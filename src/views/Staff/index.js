import React, { useEffect } from "react";
import styled from "styled-components";
import { ClinicBackground } from "../../components/Containers";
import { useNavSetBackground } from "../../components/Nav";
import { colors, query } from "../../util/styles";
import { SectionHeading, SubHeading } from "../../components/Headings";
import { FormattedMessage, injectIntl } from "react-intl";
import Galery from "../../components/Galery";
import PHOTOS from "../../assets/staff-galery.json";

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  padding: 10rem 1.5rem 0;
  min-height: 100vh;
  color: ${colors.white};
  max-width: 1230px;
  margin: 0 auto;
`;

const Text = styled.div`
  flex: 1 auto;
  padding: 2rem;
  background: ${colors.white};
  color: ${colors.black};

  p:nth-last-child(1) {
    margin-bottom: 0;
  }

  margin-bottom: 2rem;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  padding-top: 3rem;

  ${query.lg`
    flex-wrap: nowrap;
  `}
`;

const GaleryContainer = styled.div`
  flex: 0 0 400px;

  ${query.lg`
    padding-right: 3rem;
  `}
`;

const Staff = ({ intl: { formatMessage } }) => {
  const setNavBackground = useNavSetBackground();
  useEffect(() => {
    setNavBackground(false);
  }, [setNavBackground]);

  return (
    <ClinicBackground>
      <Container>
        <div>
          <SectionHeading center={true} color="white">
            <FormattedMessage id="staff.header" />
            <SubHeading color="silver">
              <FormattedMessage id="staff.subheader" />
            </SubHeading>
          </SectionHeading>
          <ContentContainer>
            <GaleryContainer>
              <Galery photos={PHOTOS} />
            </GaleryContainer>
            <Text dangerouslySetInnerHTML={{ __html: formatMessage({ id: "staff.content" }) }} />
          </ContentContainer>
        </div>
      </Container>
    </ClinicBackground>
  );
};

export default injectIntl(Staff);
