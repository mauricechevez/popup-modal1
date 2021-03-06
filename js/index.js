window.onload = function(){

// Query Selectors
const emailModal = document.querySelector('.email-modal')
const emailModalCloseButton = document.querySelector('.email-modal__close-btn')
const emailDeclineOffer = document.querySelector('.email-modal__decline-offer')
const bodyOfSite = document.body
const emailInvalidMsg = document.querySelector('.email-modal__invalid-message')
const emailFormGroup= document.querySelector('.email-modal__form-group')
let emailInputBox = document.querySelector('.email-modal__input-field')
const submitButton = document.querySelector('.email-modal__button')
const emailSuccessMessage = document.querySelector('.email-thankyou')
let modalActivate = false
let count=4; // for Timer/Countdown

/* ########### Countdown Timer to display ########### */
/* Source : https://stackoverflow.com/questions/1191865/code-for-a-simple-javascript-countdown-timer */
const counter = ()=>{
    let countDown = setInterval(function(){
        document.getElementById('email-thankyou__countdown').innerHTML= `<span>This window will close in ${count} seconds</span>`;
        count = count -1;
        if(count < 0){
            clearInterval(countDown);
        }
    }, 1000);
}


/* ########### Functions ############# */
const activateModal = ()=>{
    if(modalActivate === false){
        modalActivate = true
        emailModal.classList.add('email-modal--visible')
    }
    else return;
}

// Validation of the Email
function validateEmail(mail){
  let result = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)
  return result
}

const closeModal  = function(){
    emailModal.classList.remove('email-modal--visible')
    console.log('Modal removed')
}

const removeErrors = ()=>{
    document.getElementsByClassName('email-modal__form-group')[0].classList.remove('email-modal__form-group--error')
    document.getElementsByClassName('email-modal__invalid-message')[0].classList.remove('email-modal__invalid-message--visible')
}


/* ########### Event Listeners ########### */
emailModalCloseButton.addEventListener('click', ()=>{
    closeModal();
})

emailDeclineOffer.addEventListener('click', ()=>{
    closeModal();
})

bodyOfSite.addEventListener('mouseleave', ()=>{
    activateModal()
})

submitButton.addEventListener('click', (e)=>{
    e.preventDefault(e)
    if(validateEmail(emailInputBox.value)){
        counter()
        emailSuccessMessage.classList.add('email-thankyou--visible')
        setTimeout(()=>{
            closeModal();
        }, 5000)
    }
    else {
        console.log('Invalid email')
        emailInvalidMsg.classList.add('email-modal__invalid-message--visible')
        emailFormGroup.classList.add('email-modal__form-group--error')
    }
})

emailInputBox.addEventListener('click', ()=>{
    removeErrors();
})


/* END OF SCRIPT */
}



