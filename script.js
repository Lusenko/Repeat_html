let burger = document.querySelector('.burger-button');
let closeModal = document.querySelector('.close-modal');
let modalWindow = document.querySelector('.modal-window');

burger.addEventListener('click', () =>{
    modalWindow.style.display = 'block';
})
closeModal.addEventListener('click', () =>{
    modalWindow.style.display = 'none';
})
