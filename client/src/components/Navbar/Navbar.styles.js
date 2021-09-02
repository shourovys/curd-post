import styled from "styled-components";
import { device } from "../../styles/variables/deviceBreakpoints";

export const NavbarContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: lightgray;
  padding: 20px 30px ;
  @media ${device.tablet} {
    padding: 20px 110px ;
  }
`;