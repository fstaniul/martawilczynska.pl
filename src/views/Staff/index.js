import React, { useEffect } from "react";
import styled from "styled-components";
import { ClinicBackground } from "../../components/Containers";
import { useNavSetBackground } from "../../components/Nav";
import { colors } from "../../util/styles";
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
  padding: 2rem;
  background: ${colors.white};
  color: ${colors.black};
`;

const ContentContainer = styled.div``;

const GaleryContainer = styled.div``;

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
