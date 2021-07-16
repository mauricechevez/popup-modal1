window.onload = function(){

// Query Selectors
const emailModal = document.querySelector('.email-modal')
// const btn = document.querySelector('.btn-modal')
const emailModalCloseButton = document.querySelector('.email-modal__close-btn')
const emailDeclineOffer = document.querySelector('.email-modal__decline-offer')
const bodyOfSite = document.body
const emailInvalidMsg = document.querySelector('.email-modal__invalid-message')
const emailInputBox = document.querySelector('.email-modal__input-field')
const submitButton = document.querySelector('.email-modal__button')


let modalActivate = false


/* ########### Functions ############# */
const activateModal = (e)=>{
    if(modalActivate === false){
        modalActivate = true
        emailModal.classList.add('email-modal--visible')
        console.log('Modal active')
    }
    else return;
}

// Validation of the Email
function validateEmail(mail) 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
  {
      console.log('Thanks for your email')
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

const closeModal  = function(){
    emailModal.classList.remove('email-modal--visible')
    console.log('Modal removed')
}

/* ########### Event Listners ########### */
emailModalCloseButton.addEventListener('click', ()=>{
    closeModal();
})

emailDeclineOffer.addEventListener('click', ()=>{
    closeModal();
})

bodyOfSite.addEventListener('mouseleave', ()=>{
    activateModal()
})

submitButton.addEventListener('click', ()=>{
    validateEmail(emailInputBox.value)
})

}



