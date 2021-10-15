import Button from "@mui/material/Button";
// import styled from "styled-components";
import { experimentalStyled as styled } from "@mui/material/styles";

export const GreenButton = styled(Button)`
  color: #20b2aa;

  :hover {
    color: #2e8b57;
  }
`;

export const RedButton = styled(Button)`
  color: #ffb2aa;

  :hover {
    color: #ff8b57;
  }
`;
