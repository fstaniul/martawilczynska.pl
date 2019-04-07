import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { DirectionsContainer, MapWrapper, LeftWrapper } from './styled';
import Directions from './Directions';
import Information from './Information';
import { useNavSetBackground } from '../../components/Nav';

const CLINICS = [
  {
    name: 'KCM Clinic Jelenia Góra',
    street: 'Bankowa 5-7',
    town: '58-500 Jelenia Góra',
    phone: '+48 756 112 222',
    email: 'rejestracja@kcmclinic.pl',
    children: (
      <>
        <FormattedMessage id="directions.monday-friday" />: 7:30 - 21:00
        <br />
        <FormattedMessage id="directions.saturday" />: 8:00 - 18:00
      </>
    ),
    map:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2516.177414144611!2d15.734803216315349!3d50.9019332795401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470ede2f81a4b443%3A0xe7d30a1ec83ede45!2sBankowa+5%2F7%2C+58-500+Jelenia+G%C3%B3ra!5e0!3m2!1sen!2spl!4v1554313750776!5m2!1sen!2spl'
  },
  {
    name: 'KCM Wrocław',
    street: 'Krucza 2A',
    town: '53-411 Wrocław',
    phone: '+48 71 75 00 636',
    email: 'wroclaw@kcmclinic.pl',
    note: <FormattedMessage id="directions.notes.consultation-only" />,
    map:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2505.7865745772133!2d17.01187581632004!3d51.09394617956929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc2223a838fa3%3A0x44491c3ad76d4495!2sKrucza+2a%2C+53-227+Wroc%C5%82aw!5e0!3m2!1sen!2spl!4v1554314648163!5m2!1sen!2spl'
  },
  {
    name: 'Dr Olender - Prywatny Szpital Chirurgi Plastycznej',
    street: 'Brzozowa 2',
    town: '42-311 Żarki Letnisko',
    phone: (
      <>
        +48 515 296 215
        <br />
        +48 34 311 10 32
      </>
    ),
    email: 'kontakt@drolender.pl',
    map:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2531.2773318205855!2d19.26749961585282!3d50.6219646828724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4717310e7529f0f5%3A0xc833babbcd4b7a23!2sDr+Olender+Prywatny+Szpital+Chirurgii+Plastycznej!5e0!3m2!1spl!2sus!4v1554654822530!5m2!1spl!2sus'
  },
  {
    name: 'Beauty Group',
    street: 'Wojciechowskiego 7',
    town: '71-476 Szczecin',
    phone: (
      <>
        PL: +48 (0)91 45 40 442
        <br />
        EN: +48 503 111 068
      </>
    ),
    email: 'info@beautygroup.pl',
    map:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4751.126629559309!2d14.523137!3d53.458392!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7f3a963ed0d7a7c3!2sBeauty+Group+Klinika+Chirurgii+Plastycznej+(wcze%C5%9Bniej%3A+Artplastica)!5e0!3m2!1spl!2sus!4v1554654749100!5m2!1spl!2sus'
  }
];

function DirectionsRoute() {
  const navSetBackground = useNavSetBackground();
  const [active, setActive] = useState(0);

  useEffect(() => {
    navSetBackground(true);
  }, []);

  return (
    <DirectionsContainer>
      <LeftWrapper>
        {CLINICS.map((clinic, index) => (
          <Directions key={clinic.name} active={index === active} onClick={() => setActive(index)} {...clinic} />
        ))}
        <Information />
      </LeftWrapper>
      <MapWrapper>
        <Map src={CLINICS[active].map} />
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
