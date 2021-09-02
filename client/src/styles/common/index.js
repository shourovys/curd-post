import styled from "styled-components";
import { device } from "../variables/deviceBreakpoints";

export const Container = styled.section`
  max-width: 100vw;
  padding: 0 15px;
  margin: 0 auto;
  background-color: ${({ backgroundColor }) => backgroundColor};

  @media ${device.mobile} {
    max-width: 540px;
    width: 100%;
  }
  @media ${device.tablet} {
    max-width: 720px;
  }
  @media ${device.tabletL} {
    max-width: 960px;
  }
  @media ${device.laptop} {
    max-width: 1199px;
    width: 100%;
  }
`;

export const PaddingContainer = styled.section`
  padding-top: 40px;
  padding-bottom: 20px;

  @media ${device.tablet} {
    padding-top: 60px;
    padding-bottom: 40px;
  }

  @media ${device.tabletL} {
    padding-top: 80px;
    padding-bottom: 70px;
  }
`;

export const CardContainer = styled.section`
  @media ${device.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
  }
  @media ${device.tabletL} {
    grid-template-columns: repeat(3, 1fr);
  }
`;
