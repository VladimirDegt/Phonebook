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
  background-color: #FAFAFA;

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

export const StyledLink = styled.a`
    box-sizing: border-box; 
    display: inline-block;
    width: 75px;
    height: 50px;
    padding: 4px;
    border-radius: 8px;
    background-color: #FAFAFA;
    text-align: center;
    vertical-align: middle;
    border: 0;
    outline: none;
    text-decoration: none;
    cursor: pointer;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

    svg {
      margin-top: 8px;
    }

    @media (min-width: 768px) {
        width: 125px;
  }

`

export const StyledSpan = styled.span`
  font-size: 18px;

  :nth-child(odd) {
    font-weight: bold;
`
export const StyledInfoList = styled.ul`
    display: flex;
    flex-direction: column;
  justify-content: space-evenly;
  padding: 0;
  gap: 20px;
  margin-top: 30px;
  width: 100%;
  list-style-type: none;

  li p {
    padding: 0;
    margin: 0;
  }

  li h3 {
    padding: 0;
    margin: 0;
  }
`