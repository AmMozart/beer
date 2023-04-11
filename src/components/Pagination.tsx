import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/react';
import React from 'react';

interface PaginationProps {
  currentPage: number;
  changePage: (e: any) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, changePage }) => (
  <IonSegment
    value={currentPage.toString()}
    color={'warning'}
    onIonChange={changePage}
  >
    <IonSegmentButton value='1'>
      <IonLabel>1</IonLabel>
    </IonSegmentButton>
    <IonSegmentButton value='2'>
      <IonLabel>2</IonLabel>
    </IonSegmentButton>
    <IonSegmentButton value='3'>
      <IonLabel>3</IonLabel>
    </IonSegmentButton>
  </IonSegment>
);

export default React.memo(Pagination);
