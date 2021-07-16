import styled from "styled-components";
import { Button } from "./Button";
import { elevation } from "../utilities";

export const Card = styled.div`
  border-radius: 6px;
  padding: 10px;
  ${elevation[1]};
`;

export const CardButton = styled(Button)`
  width: 100%;
`;
