import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonImg,
  IonItem,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { beers } from '../../features/beerSlice';
import {
  addFavouriteBeer,
  favourites,
  removeFavouriteBeer,
} from '../../features/favouriteSlice';

const StyledIonImg = styled(IonImg)`
  height: 300px;
`;

const CardDetails: React.FC = () => {
  const dispatch = useAppDispatch();
  const favouriteBeers = useAppSelector(favourites);

  const { id } = useParams<{ id: string }>();
  const beerArray = useAppSelector(beers);
  const beer = beerArray.find((beer) => beer.id === +id);

  const addFavourite = () => {
    if (beer) dispatch(addFavouriteBeer(beer));
  };

  const removeFavourite = () => {
    if (beer) dispatch(removeFavouriteBeer(beer));
  };

  return beer ? (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>{beer.name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <StyledIonImg src={beer.image_url}></StyledIonImg>
        <IonList>
          <IonItem>
            <p>Descriotion: {beer.description}</p>
          </IonItem>
          <IonItem>
            <p>
              Volume: {beer.boil_volume.value} {beer.boil_volume.unit}
            </p>
          </IonItem>
          <IonItem>
            <p>First Brewen: {beer.first_brewed}</p>
          </IonItem>
          <IonItem>
            {favouriteBeers.find((fav) => fav.id === beer.id) ? (
              <IonButton fill={'solid'} onClick={removeFavourite}>
                Remove from Favourites
              </IonButton>
            ) : (
              <IonButton fill={'outline'} onClick={addFavourite}>
                Add to Favourites
              </IonButton>
            )}
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  ) : null;
};

export default CardDetails;
