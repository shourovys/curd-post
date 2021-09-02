import styled from "styled-components";
import { device } from "../../styles/variables/deviceBreakpoints";

export const SinglePostContainer = styled.section`
  & div {
    padding: 20px;
    & h1 {
      font-size: 3rem;
    }
    & p {
      color: black;
    }
    & img {
      width: 100%;
      height: 100%;
      max-height: 80vw;
      object-fit: cover;
    }
  }
  @media ${device.tablet} {
    display: flex;
    justify-content: space-between;
    background-color: lightgray;
    & div {
      flex-basis: 50%;
    }
  }
  @media ${device.laptop} {
    & div {
      max-height: 30vw;
    }
  }
`;
