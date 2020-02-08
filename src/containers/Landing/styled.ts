import { css } from "@emotion/core";
import styled from "@emotion/styled";
import Button from "@material-ui/core/Button";
import { ReactComponent as Cs } from "../../assets/cs.svg";
import { ReactComponent as En } from "../../assets/en.svg";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const IconStyle = css`
  width: 30px;
  :hover {
    cursor: pointer;
  }
`;

export const CsIcon = styled(Cs)`
  ${IconStyle}
  margin-left: 5px;
`;

export const EnIcon = styled(En)`
  ${IconStyle}
  margin-right: 5px;
`;

export const Languages = styled.div`
  margin: 20px 0;
`;

export const StyledButton = styled(Button)`
  margin-left: 10px;
`;

export const Error = styled.p`
  color: red;
`;
