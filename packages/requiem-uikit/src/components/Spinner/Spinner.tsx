import React from "react";
import styled from "styled-components";
import { SpinnerProps } from "./types";
import SquareLoader from "react-spinners/SquareLoader";

const Container = styled.div`
  position: relative;
`;

const Spinner: React.FC<SpinnerProps> = ({ size = 128 }) => {
  return (
    <Container>
      <SquareLoader color={"#c7c7c7"} size={size} />
    </Container>
  );
};

export default Spinner;
