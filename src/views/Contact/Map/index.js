import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { TransitionMotion, spring } from 'react-motion';
import CLINICS from '../../../assets/clinics';
import { colors, media } from '../../../util/styles';
import { useWindowWidth } from '../../../util/hooks';
import ClinicInfo from '../../../components/ClinicInfo';
import ResizableWrapper from '../../../components/ResizableWrapper';
import { useStartStopInterval } from '../../../util/hooks';
import Note from '../Note';
import MapControl from './MapControl';
import PolandContourMap, { MapNotice } from './PolandContourMap';
import MobileControls from './MobileControls';

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
  text-align: center;
  width: 350px;

  @media (min-width: ${media.lg}px) {
    margin-right: 5rem;
    text-align: right;
  }
`;

const InfoContainer = styled.div`
  position: relative;
`;

export default function Map() {
  const [{ previous, active }, setState] = useState({ previous: 0, active: 0 });
  const windowWidth = useWindowWidth();

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

  const willEnter = useCallback(
    styleThatEnter => {
      return {
        opacity: 0,
        x: +styleThatEnter.key > previous ? 50 : -50
      };
    },
    [previous]
  );

  const willLeave = useCallback(
    styleThatLeave => {
      return {
        leaving: 1,
        opacity: spring(0, SPRING_CONFIG),
        x: spring(+styleThatLeave.key > active ? 50 : -50, SPRING_CONFIG)
      };
    },
    [active]
  );

  const setActive = index => {
    return () => {
      setState(state => ({ previous: state.active, active: index }));
    };
  };

  return (
    <Container>
      <TextContainer>
        <Note>
          <FormattedMessage id="contact.clinic.contact-with" />:
        </Note>
        <TransitionMotion styles={styles} willEnter={willEnter} willLeave={willLeave}>
          {interpolatedStyles => (
            <ResizableWrapper>
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
                      width: windowWidth >= media.lg ? '350px' : '100%',
                      top: 0,
                      left: 0
                    }}
                  />
                ))}
              </InfoContainer>
            </ResizableWrapper>
          )}
        </TransitionMotion>
        {windowWidth < media.lg && <MobileControls active={active} setActive={setActive} controls={CLINICS.length} />}
      </TextContainer>
      {windowWidth >= media.lg && (
        <PolandContourMap>
          <MapNotice>
            <FormattedMessage id="contact.map.notice" />
          </MapNotice>
          {CLINICS.map(({ mapPin }, index) => (
            <MapControl key={index} {...mapPin} setActive={setActive(index)} active={active === index} />
          ))}
        </PolandContourMap>
      )}
    </Container>
  );
}
