import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../app/hooks';
import {
  addFavouriteBeer,
  favourites,
  removeFavouriteBeer,
} from '../features/favouriteSlice';
import dataBase from '../utils/Storage';

interface FavouriteProps {
  isOpen: boolean;
  close: () => void;
}

const Favourite: React.FC<FavouriteProps> = ({ isOpen, close }) => {
  const favouriteBeers = useAppSelector(favourites);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dataBase.getFavouriteBeers().then((beer) => {
      for (const key in beer) {
        dispatch(addFavouriteBeer(beer[key]));
      }
    });
  }, []);

  useEffect(() => {
    dataBase.setFavouriteBeers(favouriteBeers);
  }, [favouriteBeers]);

  return (
    <IonModal isOpen={isOpen}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Favourites</IonTitle>
          <IonButtons slot='end'>
            <IonButton onClick={close}>Close</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonList>
          {favouriteBeers.length
            ? favouriteBeers.map((beer) => (
                <IonItem key={beer.id}>
                  <IonLabel>{beer.name}</IonLabel>
                  <IonButton
                    onClick={() => dispatch(removeFavouriteBeer(beer))}
                  >
                    Delete
                  </IonButton>
                </IonItem>
              ))
            : 'The list is empty'}
        </IonList>
      </IonContent>
    </IonModal>
  );
};

export default React.memo(Favourite);
