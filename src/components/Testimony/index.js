import React, { useMemo } from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import Stars from "./Stars";
import { colors } from "../../util/styles";

const Container = styled.div`
  background: ${colors.silver};
  padding: 3rem;
  margin-bottom: 2rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
`;

const Heading = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 2rem;
`;

const Name = styled.h4`
  margin-bottom: 0;
`;

const DateDisplay = styled.div`
  font-size: 1.3rem;
`;

export default function Testimony({ name, date, stars, content, className, style }) {
  const displayDate = useMemo(() => dayjs(date).format("DD MMM YYYY"), [date]);

  return (
    <Container className={className} style={style}>
      <Heading>
        <div>
          <Name>{name}</Name>
          <DateDisplay>{displayDate}</DateDisplay>
        </div>
        <Stars stars={stars} />
      </Heading>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Container>
  );
}
