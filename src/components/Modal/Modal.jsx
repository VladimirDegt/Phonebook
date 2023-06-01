import { StyledModalBuy, 
    StyledBackdrop, 
    StyledButtonClose, 
    StyledPersonalInfo, 
    StyledModalLabel,
    StyledInputWrap, } from "./Modal.styled"

export function Modal(){
    return (
        <StyledBackdrop>
            <StyledModalBuy>
               <StyledButtonClose>
                 <svg width="24" height="24">
                   <use href="./img/icons.svg#simple-close-btn"></use>
                 </svg>
               </StyledButtonClose>

               <h2 class="modal-buy-now-title">Дані замовника</h2>
                <form>
                    <StyledPersonalInfo>
                        <StyledModalLabel>
                        <p>Personal information</p>
                        <StyledInputWrap>
                            <input
                                type="text"
                                name="name"
                                pattern="[A-Za-z]{3,16}+\s"
                                placeholder="Name"
                                aria-label="name"
                                autofocus
                                required="required"
                                maxlength="16"
                                minlength="3"
                                title="At least 3 characters"
                            />
                        </StyledInputWrap>
                        </StyledModalLabel>

                        <StyledModalLabel>
                            <StyledInputWrap>
                            <input
                                type="text"
                                name="surname"
                                pattern="[A-Za-z]{1,255}+\s"
                                placeholder="Surname"
                                aria-label="surname"
                                required="required"
                                title="at least 2 characters"
                                minlength="2"
                            />
                            </StyledInputWrap>
                        </StyledModalLabel>
                    </StyledPersonalInfo>
                </form>

            </StyledModalBuy>
        </StyledBackdrop>    
    )
};

// <!-- MODAL BUY NOW -->
// <div data-modal="1" class="modal modal-buy-now">
//   <button class="modal-buy-now-close">
//     <svg class="js-modal-close" width="24" height="24">
//       <use href="./img/icons.svg#simple-close-btn"></use>
//     </svg>
//   </button>
//   <h2 class="modal-buy-now-title"><span>BUY</span> NOW</h2>

//   <form action="/src/js/validate.js">
//     <div class="personal-info">
//       <div class="modal-buy-now-form-label">
//         <p>Personal information</p>

//         <div class="modal-buy-now-input-name-wrap">
//           <input
//             class="personal-info__name"
//             type="text"
//             name="name"
//             pattern="[A-Za-z]{3,16}+\s"
//             placeholder="Name"
//             aria-label="name"
//             autofocus
//             required="required"
//             maxlength="16"
//             minlength="3"
//             title="At least 3 characters"
//           />
//           <span class="form__error">at least 3 characters</span>
//         </div>
//       </div>

//       <div class="modal-buy-now-form-label">
//         <div class="modal-buy-now-input-name-wrap">
//           <input
//             class="personal-info__surname"
//             type="text"
//             name="surname"
//             pattern="[A-Za-z]{1,255}+\s"
//             placeholder="Surname"
//             aria-label="surname"
//             required="required"
//             title="at least 2 characters"
//             minlength="2"
//           />
//           <span class="form__error">at least 2 characters</span>
//         </div>
//       </div>
//     </div>

//     <div class="modal-buy-now-form-label">
//       <p>Email</p>
//       <div class="modal-buy-now-input-name-retreat">
//         <input
//           type="email"
//           name="email"
//           pattern="[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
//           placeholder="Enter your email"
//           aria-label="Email"
//           minlength="3"
//           maxlength="30"
//           title="please enter your email in correct format"
//           required="required"
//         />
//         <span class="form__error"
//           >This field must contain E-Mail in the format example@site.com</span
//         >
//       </div>
//     </div>
//     <div class="modal-buy-now-form-label">
//       <p>Phone number</p>
//       <div class="modal-buy-now-input-wrap">
//         <input
//           type="tel"
//           name="phone"
//           placeholder="Phone number"
//           minlength="9"
//           maxlength="9"
//           pattern="[0-9]{,9}"
//           aria-label="Phone number"
//           title="Phone number must contain 9 digits"
//           required="required"
//         />
//         <span class="form__error">
//           This field must contain a phone number in international format without
//           +380</span
//         >

//         <svg class="svg-ua" width="24" height="24">
//           <use href="./img/icons.svg#ukraine"></use>
//         </svg>
//         <span class="ua-code">+380</span>
//       </div>
//     </div>
//     <div class="modal-buy-now-form-label">
//       <p>Card number</p>
//       <div class="modal-buy-now-input-wrap">
//         <input
//           class="myValidate"
//           type="text"
//           name="card"
//           placeholder="Enter card"
//           required
//           pattern="[0-9]{16}"
//           minlength="16"
//           maxlength="16"
//           title="Please, enter your card number"
//           aria-label="card number"
//         />

//         <span class="form__error">
//           This field must contain a 16-digit card number</span
//         >
//         <svg class="svg-mastercard" width="32" height="21">
//           <use href="./img/icons.svg#mastercard"></use>
//         </svg>
//       </div>
//     </div>
//     <div class="modal-buy-now-form-label">
//       <p>Comment</p>
//       <div class="modal-buy-now-input-wrap">
//         <textarea name="comment" placeholder="Enter text"></textarea>
//       </div>
//     </div>
//     <button
//       data-modal="2"
//       class="js-open-modal js-modal-close modal-buy-now-form-submit"
//       type="submit"
//     >
//       Submit
//     </button>
//   </form>
// </div>

// <script>
//   document.querySelector('.myValidate').addEventListener('keyup', function () {
//     this.value = this.value.replace(/[^\d]/g, '');
//   });
// </script>