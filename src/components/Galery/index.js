import React, { useState, useCallback, useMemo } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TransitionMotion, spring } from "react-motion";
import { colors } from "../../util/styles";
import Modal from "../Modal";

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  padding-right: 1rem;
`;

const ImageContainer = styled.div`
  position: relative;
  height: 250px;
  width: 250px;
  margin-bottom: 2rem;

  @media screen and (min-width: 300px) {
    height: 300px;
    width: 300px;
  }

  @media screen and (min-width: 350px) {
    height: 350px;
    width: 350px;
  }

  @media screen and (min-width: 400px) {
    height: 400px;
    width: 400px;
  }
`;

const Image = styled.div`
  position: absolute;
  display: block;
  width: 250px;
  height: 250px;
  cursor: zoom-in;
  background-position: center;
  background-size: 100%;
  transition: background-size 300ms ease;

  &:hover {
    background-size: 110%;
  }

  @media screen and (min-width: 300px) {
    height: 300px;
    width: 300px;
  }

  @media screen and (min-width: 350px) {
    height: 350px;
    width: 350px;
  }

  @media screen and (min-width: 400px) {
    height: 400px;
    width: 400px;
  }
`;

function calculateNextIndex(index, length) {
  return (index + length) % (2 * length);
}

const ControlsContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  padding-bottom: 1rem;
`;

const ControlsSeparator = styled.div`
  width: 40px;
  height: 5px;
  border-radius: 5px;
  background: ${colors.silver};
  margin: 0 1rem;
`;

const Control = styled.button`
  background: transparent;
  border: none;
  outline: none;
  font-size: 2.5rem;
  cursor: pointer;
  color: ${colors.silver};
  padding: 0;
  margin: 0;

  &:focus,
  &:hover {
    color: ${colors.white};
  }
`;

const Controls = ({ prev, next }) => (
  <ControlsContainer>
    <Control onClick={prev}>
      <FontAwesomeIcon icon="chevron-left" />
    </Control>
    <ControlsSeparator />
    <Control onClick={next}>
      <FontAwesomeIcon icon="chevron-right" />
    </Control>
  </ControlsContainer>
);

const Galery = ({ photos }) => {
  const [photoData, setPhotoData] = useState(() => [...photos].reverse().map((data, index) => ({ ...data, key: index })));
  const [isModalShown, setShowModal] = useState(false);

  const styles = useMemo(
    () =>
      photoData.map(({ key, ...data }, index, photos) => {
        const isLast = index === photos.length - 1;
        return {
          key: key + "",
          data,
          style: {
            top: spring(isLast ? 0 : 10),
            left: spring(isLast ? 0 : 10),
            x: spring(0),
            y: spring(0),
            r: spring(0),
            o: spring(1)
          }
        };
      }),
    [photoData]
  );

  const next = useCallback(
    () =>
      setPhotoData(photos => {
        const lastPhoto = photos[photos.length - 1];
        const newFirst = { ...lastPhoto, key: calculateNextIndex(lastPhoto.key, photos.length) };
        return [newFirst].concat(photos.slice(0, -1));
      }),
    []
  );

  const prev = useCallback(
    () =>
      setPhotoData(photos => {
        const firstPhoto = photos[0];
        const newLastPhoto = { ...firstPhoto, key: calculateNextIndex(firstPhoto.key, photos.length) };
        return photos.slice(1).concat([newLastPhoto]);
      }),
    []
  );

  const closeModal = useCallback(() => setShowModal(false));
  const showModal = useCallback(() => setShowModal(true));

  const willLeave = useCallback(
    styleThatLeave => {
      const isAtStart = +photoData[0].key % photoData.length === +styleThatLeave.key % photoData.length;
      if (!isAtStart) return null;
      return {
        x: spring(-150),
        y: spring(-50),
        r: spring(-45),
        o: spring(0),
        top: spring(0),
        left: spring(0)
      };
    },
    [photoData]
  );

  const willEnter = useCallback(
    styleThatEntered => {
      const isLast = photoData[photoData.length - 1].key === +styleThatEntered.key;
      if (!isLast)
        return {
          x: 0,
          y: 0,
          r: 0,
          o: 1,
          top: 10,
          left: 10
        };
      return {
        x: -150,
        y: -50,
        r: -45,
        o: 0,
        top: 0,
        left: 0
      };
    },
    [photoData]
  );

  return (
    <Container>
      <TransitionMotion styles={styles} willLeave={willLeave} willEnter={willEnter}>
        {interpolatedStyles => (
          <ImageContainer>
            {interpolatedStyles.map(({ style, key, data }, index, arr) => (
              <Image
                onClick={showModal}
                key={key}
                style={{
                  top: style.top,
                  left: style.left,
                  transform: `translate(${style.x}px, ${style.y}px) rotate(${style.r}deg)`,
                  opacity: style.o,
                  boxShadow: index === arr.length - 1 ? "3px 3px 6px rgba(0,0,0,0.4)" : "none",
                  backgroundImage: `url(${data.thumbnail})`
                }}
              />
            ))}
          </ImageContainer>
        )}
      </TransitionMotion>
      <Controls next={next} prev={prev} />
      {isModalShown && (
        <Modal prev={prev} next={next} close={closeModal}>
          <img src={photoData[photoData.length - 1].image} alt="" style={{ maxWidth: "100%" }} />
        </Modal>
      )}
    </Container>
  );
};

Galery.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      thumbnail: PropTypes.string
    })
  ).isRequired
};

export default Galery;
