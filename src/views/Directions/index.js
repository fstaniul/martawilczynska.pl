import React, { useState, useEffect } from 'react';
import { DirectionsContainer, MapWrapper, LeftWrapper } from './styled';
import Directions from './Directions';
import Information from './Information';
import { useNavSetBackground } from '../../components/Nav';
import CLINICS from '../../assets/clinics';

const clinics = CLINICS.map(clinic => clinic.contact);

function DirectionsRoute() {
  const navSetBackground = useNavSetBackground();
  const [active, setActive] = useState(0);

  useEffect(() => {
    navSetBackground(true);
  }, []);

  return (
    <DirectionsContainer>
      <LeftWrapper>
        {clinics.map((clinic, index) => (
          <Directions key={clinic.name} active={index === active} onClick={() => setActive(index)} clinic={clinic} />
        ))}
        <Information />
      </LeftWrapper>
      <MapWrapper>
        <Map src={clinics[active].map} />
      </MapWrapper>
    </DirectionsContainer>
  );
}

function Map({ src }) {
  return (
    <iframe
      title="Google Maps Bankowa 5-7 Jelenia Góra"
      src={src}
      frameBorder="0"
      style={{ border: '0', width: '100%', height: '100%' }}
      allowFullScreen
    />
  );
}

export default DirectionsRoute;
