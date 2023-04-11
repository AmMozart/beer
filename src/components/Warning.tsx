import { IonToast } from '@ionic/react';
import React from 'react';

interface WarningProps {
  isOpen: boolean;
}

const Warning: React.FC<WarningProps> = ({ isOpen }) => (
  <IonToast
    isOpen={isOpen}
    message='Failed to get data from server'
    duration={3000}
  ></IonToast>
);

export default React.memo(Warning);
