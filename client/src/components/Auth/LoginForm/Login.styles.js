import styled from "styled-components";
import { device } from "../../../styles/variables/deviceBreakpoints";

export const FormContainer = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 75vh;
    max-width: 800px;
    background-color: #5D3485;
    margin: 0 auto;
    padding: 5px;
    
    @media ${device.tablet} {
        padding: 40px;
    }
     
`;
