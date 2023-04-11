import {
  IonButton,
  IonContent,
  IonFooter,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React, { useCallback, useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import CardList from '../../components/CardList';
import Favourite from '../../components/Favourite';
import Pagination from '../../components/Pagination';
import Warning from '../../components/Warning';
import { fetchBeer, loading } from '../../features/beerSlice';
import { beers } from '../../features/beerSlice';
import dataBase from '../../utils/Storage';

const Cards = () => {
  const dispatch = useAppDispatch();
  const stateLoading = useAppSelector(loading);
  const currentBeers = useAppSelector(beers);

  const [page, setPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const changePage = useCallback((e: any) => {
    if (e.currentTarget?.value) {
      setPage(+e.currentTarget.value);
    }
  }, []);

  const closeFavoirites = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    dataBase.getPageNumber().then((num) => num && setPage(num));
  }, []);

  useEffect(() => {
    dispatch(fetchBeer(page));
    dataBase.setPageNumber(page);
  }, [page]);

  return (
    <IonPage color='secondary'>
      <IonHeader>
        <IonToolbar>
          <IonTitle slot='start'>Beer Menu</IonTitle>
          <IonButton slot='end' fill={'clear'} onClick={() => setIsOpen(true)}>
            Favorites
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <CardList beers={currentBeers} />
      </IonContent>
      <IonFooter>
        <Pagination changePage={changePage} currentPage={page} />
      </IonFooter>
      <Favourite isOpen={isOpen} close={closeFavoirites} />
      <Warning isOpen={stateLoading === 'failed'} />
    </IonPage>
  );
};

export default Cards;
