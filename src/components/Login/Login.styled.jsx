import styled from "@emotion/styled";
import { displayFlex } from "utils/display-flex";

export const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(192, 188, 188, 0.507);
`
export const StyledModal = styled.div`
  position: absolute;
  width: 200px;
  min-height: 200px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 15px;
  background-color: #FCFCFC;

  @media (min-width: 768px) {
    width: 400px;
  }
`

export const StyledFormModal = styled.form`
  ${displayFlex}
  margin: 50px 24px 24px 24px;
  padding: 0px;
  gap: 14px;
`

export const StyledInputModal = styled.input`
  width: 100%;
  min-height: 14px;
  outline: none;
  border: 1.5px solid rgba(17, 17, 17, 0.05);
  padding: 14px 18px;
  border-radius: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    border: 1.5px solid #3f51b5;
  }

  @media (min-width: 768px) {
    font-weight: 500;
    font-size: 16px;
  }  
`

export const StyledButtonModal = styled.button`
  width: 100px;
  padding: 8px;
  border-radius: 8px;
  background-color: #3f51b5;
  text-align: center;
  display: inline-block;
  color: #FAFAFA;
  border: 0;
  outline: none;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
  0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

:hover,
:focus {
  background-color: #FAFAFA;
  color: #3f51b5;
`