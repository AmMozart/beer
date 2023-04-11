import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonImg,
} from '@ionic/react';
import React from 'react';
import styled from 'styled-components';

import { BeerData } from '../api/BeerData';

const StyledCard = styled(IonCard)`
  position: relative;

  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 200px;
`;

const StyledImg = styled(IonImg)`
  transform: rotate(-15deg);
  height: 100%;
`;

const StyledStrength = styled.span`
  font-size: 1.4em;
  color: #fff;
`;

interface CardProps {
  beer: BeerData;
}

const Card: React.FC<CardProps> = ({ beer }) => (
  <StyledCard color='warning'>
    <IonCardHeader>
      <IonCardSubtitle>
        Крепость: <StyledStrength>{beer.abv}</StyledStrength>
      </IonCardSubtitle>
      <IonCardTitle>{beer.name}</IonCardTitle>
    </IonCardHeader>

    <IonCardContent>
      <StyledImg src={beer.image_url}></StyledImg>
    </IonCardContent>
  </StyledCard>
);

export default React.memo(Card);
