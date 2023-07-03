import styled from "@emotion/styled";

export const StyledHeader = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  min-height: 64px;
  padding: 10px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
  0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 4px;
  overflow: hidden;
`
export const StyledFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding: 8px 16px;

  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`
export const StyledButtonClick = styled.button`
  height: 46px;
  padding: 8px;
  border-radius: 4px;
  background-color: #FAFAFA;
  text-align: center;
  display: inline-block;
  color: #3f51b5;
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
  background-color: #3f51b5;
  color: #fff;
  border: 1px solid #fff;
`

