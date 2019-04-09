import React, { useState } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { TransitionMotion, spring } from 'react-motion';
import CLINICS from '../../../assets/clinics';
import { colors } from '../../../util/styles';
import ClinicInfo from '../../../components/ClinicInfo';
import Note from '../Note';
import MapControl from './MapControl';
import PolandContourMap, { MapNotice } from './PolandContourMap';

const SPRING_CONFIG = {
  precision: 0.1
};

const Container = styled.div`
  display: flex;
  margin-top: 4rem;
  justify-content: center;
  align-items: flex-start;
  color: ${colors.white};
  padding-top: 5rem;
  padding-bottom: 10rem;
`;

const TextContainer = styled.div`
  padding-top: 5rem;
  margin-right: 5rem;
  width: 350px;
  text-align: right;
`;

const InfoContainer = styled.div`
  position: relative;
`;

function willLeaveStyles() {
  return {
    opacity: spring(0, SPRING_CONFIG),
    x: spring(-50, SPRING_CONFIG),
    leaving: 1
  };
}

function willEnterStyles() {
  return {
    opacity: 0,
    x: 50
  };
}

export default function Map() {
  const [active, setActive] = useState(0);

  const styles = [
    {
      data: CLINICS[active].contact,
      key: active + '',
      style: {
        opacity: spring(1, SPRING_CONFIG),
        x: spring(0, SPRING_CONFIG)
      }
    }
  ];

  return (
    <Container>
      <TextContainer>
        <Note>
          <FormattedMessage id="contact.clinic.contact-with" />:
        </Note>
        <TransitionMotion styles={styles} willEnter={willEnterStyles} willLeave={willLeaveStyles}>
          {interpolatedStyles => (
            <InfoContainer>
              {interpolatedStyles.map(({ key, data, style: { opacity, x, leaving } }) => (
                <ClinicInfo
                  key={key}
                  {...data}
                  theme={ClinicInfo.THEMES.WHITE}
                  style={{
                    opacity,
                    transform: `translateX(${x}px)`,
                    position: leaving === 1 ? 'absolute' : 'initial',
                    width: '350px',
                    top: 0,
                    left: 0
                  }}
                />
              ))}
            </InfoContainer>
          )}
        </TransitionMotion>
      </TextContainer>
      <PolandContourMap>
        <MapNotice>
          <FormattedMessage id="contact.map.notice" />
        </MapNotice>
        {CLINICS.map(({ mapPin }, index) => (
          <MapControl key={index} {...mapPin} setActive={() => setActive(index)} active={active === index} />
        ))}
      </PolandContourMap>
    </Container>
  );
}
