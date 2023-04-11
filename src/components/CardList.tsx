import { IonItem, IonList } from '@ionic/react';
import React from 'react';

import { BeerData } from '../api/BeerData';
import Card from '../components/Card';

interface CardListProps {
  beers: BeerData[];
  onClick?: () => void;
}

const CardList: React.FC<CardListProps> = ({ beers, onClick }) => {
  return (
    <IonList>
      {beers.map((beer) => (
        <IonItem
          key={beer.id}
          routerLink={`/card/${beer.id}`}
          onClick={onClick}
        >
          <Card beer={beer} />
        </IonItem>
      ))}
    </IonList>
  );
};

export default React.memo(CardList);
