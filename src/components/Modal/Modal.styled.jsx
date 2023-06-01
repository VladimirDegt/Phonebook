import styled from "@emotion/styled";

// :root {
//   --dark-background-color: #1e1823;
//   --light-background-color: #e2e2e2;
//   --primary-text-color: #111111;
//   --contrast-color: #fd9222;
//   --primary-hover-color: #fcf1e0;
//   --primary-white-color: #ffffff;
//   --secondary-white-color: #fafafa;
//   --dark-white: rgba(255, 255, 255, 0.7);
//   --transition-timing: 250ms;
//   --transition-function: cubic-bezier(0.4, 0, 0.2, 1);
// }

export const StyledBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1200;
`

export const StyledModalBuy = styled.div`
  position: absolute;
  left: 50%;
  top: 10%;
  transform: translate(-50%, 0%) scale(1);
  z-index: 40;
  width: 311px;
  border-radius: 15px;
  padding: 32px 24px;
  background-color: #fafafa; 
  max-height: 95vh;
  overflow-y: scroll;
`
export const StyledButtonClose = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  stroke: black;
  background-color: transparent;
  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    stroke: #fd9222;
  }
`
export const StyledTitle = styled.h2`
  margin-bottom: 32px;
`  

export const StyledPersonalInfo = styled.div`
    display: flex;
    align-items: end;
    justify-content: space-between;
    flex-wrap: nowrap;
`
export const StyledModalLabel = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 18px;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.17;
    color: #000000;
  p {
    margin-bottom: 8px;
  }
`
export const StyledInputWrap = styled.div`
  width: 246px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding-top: 8px;

  input {
    width: 246px;
  }
`
  
//   .modal-buy-now-input-name-retreat {
//     display: block;
//     padding-top: 8px;
//   }
  
//   .modal-buy-now-form-label input,
//   textarea {
//     height: 45px;
//     width: 100%;
  
//     background-color: transparent;
//     border: 1.5px solid rgba(17, 17, 17, 0.05);
//     filter: drop-shadow(0px 5.44492px 5.44492px rgba(0, 0, 0, 0.03));
//     border-radius: 8px;
  
//     font-weight: 500;
//     font-size: 14px;
//     line-height: 1.21;
//     color: #000000;
//     padding: 14px 18px;
//   }
  
//   .modal-buy-now-form-label input::placeholder,
//   textarea::placeholder {
//     font-weight: 400;
//     color: rgba(64, 64, 64, 0.3);
//   }
  
//   .modal-buy-now-form-label:first-child input:nth-child(3) {
//     margin-top: 14px;
//   }
  
//   .modal-buy-now-form-label input[type='tel'] {
//     padding-left: 106px;
//   }
  
//   .modal-buy-now-input-wrap {
//     position: relative;
//     padding-top: 8px;
//   }
  
//   .modal-buy-now-input-wrap svg {
//     position: absolute;
//     top: 50%;
//     transform: translateY(-50%);
//   }
  
//   .modal-buy-now-input-wrap .svg-ua {
//     left: 18px;
//   }
  
//   .ua-code {
//     position: absolute;
//     top: 50%;
//     transform: translateY(-50%);
//     left: 32px;
  
//     font-weight: 500;
//     font-size: 14px;
//     line-height: 1.21;
//     color: #000000;
//     padding: 14px 18px;
//   }
  
//   .ua-code::after {
//     content: '';
  
//     position: absolute;
//     top: 50%;
//     transform: translateY(-50%);
  
//     margin-left: 8px;
  
//     display: inline-block;
//     width: 1.5px;
//     height: 25px;
//     background-color: rgba(0, 0, 0, 0.1);
//   }
  
//   .modal-buy-now-input-wrap .svg-mastercard {
//     right: 14px;
//   }
  
//   .modal-buy-now-form-label textarea {
//     height: 91px;
//     resize: none;
//   }
  
//   .modal-buy-now-form-submit {
//     border-radius: 100px;
//     padding: 12px 28px;
//     background-color: var(--contrast-color);
//     color: var(--primary-white-color);
  
//     font-weight: 600;
//     line-height: 1.21;
  
//     margin-top: 18px;
//     text-align: center;
  
//     transition: color var(--transition-timing) var(--transition-function),
//       backgroundcolor var(--transition-timing) var(--transition-function);
//   }
  
  
//   input:invalid:not(:placeholder-shown) {
//     border: 2px solid red;
//   }
  
//   input:valid:not(:placeholder-shown) {
//     border: 2px solid lightgreen;
//   }
  
//   input:invalid:not(:placeholder-shown)+.form__error {
//     display: block;
//   }
  
//   .form__error {
//     color: red;
//     text-align: left;
//     font-size: 12px;
//     display: block;
//     margin-top: 3px;
//     display: none;
//   }
  
//   @media screen and (min-width: 768px) {
//     .modal-buy-now {
//       width: 609px;
//       padding: 48px;
//     }
  
//     .modal-buy-now-list {
//       gap: 16px;
//       margin-bottom: 40px;
//     }
  
//     .modal-buy-now-list-item {
//       width: 160px;
//       height: 196px;
//       padding: 24px 20px 18px 20px;
//       margin: none;
//     }
  
//     .modal-buy-now-list-item:not(:first-child) {
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//     }
  
//     .modal-buy-now-list-item img {
//       width: 120px;
//       height: 111px;
//     }
  
//     .modal-buy-now-list-item-desc {
//       margin-top: 14px;
//     }
  
//     .modal-buy-now-input-name-wrap {
//       flex-direction: row;
//       gap: 21px;
//     }
  
//     .modal-buy-now-form-submit {
//       padding: 14px 40px;
//     }
//   }
  
//   @media screen and (min-width: 1200px) {}