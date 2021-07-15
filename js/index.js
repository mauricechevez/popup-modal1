// Query Selectors
const emailModal = document.querySelector('.email-modal')
const btn = document.querySelector('.btn-modal')
const emailModalCloseButton = document.querySelector('.email-modal__close-btn')
const emailDeclineOffer = document.querySelector('.email-modal__decline-offer')


// Functions
const activateModal = (e)=>{
    emailModal.classList.add('email-modal--visible')
    console.log('Modal active')
}

const closeModal  = function(){
    emailModal.classList.remove('email-modal--visible')
    console.log('Modal removed')
}

// Event Listner
btn.addEventListener('click', ()=>{
    activateModal()
    console.log('Button Clicked')
    
})

emailModalCloseButton.addEventListener('click', ()=>{
    closeModal();
})

emailDeclineOffer.addEventListener('click', ()=>{
    closeModal();
})


