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
  width: 311px;
  min-height: 471px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 15px;
  background-color: #FCFCFC;

  @media (min-width: 768px) {
    width: 517px;
  }
`
export const StyledButtonClose = styled.button`
  position: absolute;
  padding: 0;
  border: none;
  top: 24px;
  right: 24px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  border-radius: 50%;
  background-color: #FAFAFA;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background-color: #3f51b5;
  
  svg {
    fill: #FAFAFA;
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1); 
  }
`
export const StyledTitleModal = styled.h2`
  width: 100%;
  height: 48px;
  margin: 0;
  text-align: center;
  color: #111111;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`
export const StyledFormModal = styled.form`
  ${displayFlex}
  margin: 50px 24px 24px 24px;
  padding: 0px;
  gap: 14px;
`
export const StyledButtonList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  padding: 0;
  margin-top: 100px;
  width: 100%;
  list-style-type: none;

  li {
    width: 125px;
    height: 40px;
  }
`

export const StyledButtonModal = styled.button`
  width: 125px;
  height: 50px;
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
}
`
export const StyledLink = styled.a`
box-sizing: border-box; 
display: inline-block;
width: 125px;
padding: 8px;
border-radius: 8px;
background-color: #3f51b5;
text-align: center;

color: #FAFAFA;
border: 0;
outline: none;
text-decoration: none;
cursor: pointer;
box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

:hover,
:focus {
  background-color: #FAFAFA;

svg {
  fill: green;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1); 
}
}
`
export const StyledSpan = styled.span`
  font-size: 18px;

  :nth-of-type(odd) {
    font-weight: bold;
`
