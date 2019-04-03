import React, { useState, useEffect } from "react";
import Directions from "./Directions";
import { FormattedMessage } from "react-intl";
import { DirectionsContainer, MapWrapper, LeftWrapper } from "./styled";
import Information from "./Information";
import { useNavSetBackground } from "../../components/Nav";

const MAPS = [
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2516.177414144611!2d15.734803216315349!3d50.9019332795401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470ede2f81a4b443%3A0xe7d30a1ec83ede45!2sBankowa+5%2F7%2C+58-500+Jelenia+G%C3%B3ra!5e0!3m2!1sen!2spl!4v1554313750776!5m2!1sen!2spl",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2505.7865745772133!2d17.01187581632004!3d51.09394617956929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc2223a838fa3%3A0x44491c3ad76d4495!2sKrucza+2a%2C+53-227+Wroc%C5%82aw!5e0!3m2!1sen!2spl!4v1554314648163!5m2!1sen!2spl"
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
        <Directions
          name="KCM Clinic Jelenia Góra"
          street="Bankowa 5-7"
          town="58-500 Jelenia Góra"
          phone="+48 756 112 222"
          email="rejestracja@kcmclinic.pl"
          active={active === 0}
          onClick={() => setActive(0)}
        >
          <FormattedMessage id="directions.monday-friday" />: 7:30 - 21:00
          <br />
          <FormattedMessage id="directions.saturday" />: 8:00 - 18:00
        </Directions>
        <Directions
          name="KCM Clinic Wrocław"
          street="Krucza 2A"
          town="53-411 Wrocław"
          phone="+48 71 75 00 636"
          email="wroclaw@kcmclinic.pl"
          active={active === 1}
          onClick={() => setActive(1)}
        />
        <Information />
      </LeftWrapper>
      <MapWrapper>
        <Map src={MAPS[active]} />
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
      style={{ border: "0", width: "100%", height: "100%" }}
      allowFullScreen
    />
  );
}

export default DirectionsRoute;
