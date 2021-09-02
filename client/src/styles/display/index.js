import styled from "styled-components";
import { device } from "../variables/deviceBreakpoints";

export const HideAfterMobile = styled.div`
  @media ${device.mobile} {
    display: none;
  }
`;
export const HideAfterTablet = styled.div`
  @media ${device.tablet} {
    display: none;
  }
`;
export const HideAfterTabletL = styled.div`
  @media ${device.tabletL} {
    display: none;
  }
`;

export const ShowAfterMobile = styled.div`
 display:none;
  @media ${device.mobile} {
    display: block;
  }
`;

export const ShowAfterTablet = styled.div`
 display:none;
  @media ${device.tablet} {
    display: block;
  }
`;

export const ShowAfterTabletL = styled.div`
 display:none;
  @media ${device.tabletL} {
    display: block;
  }
`;
