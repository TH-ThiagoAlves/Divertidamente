const button = document.querySelector('button')
const form = document.querySelector('form');

const guardedFeelings = () => {
    localStorage.setItem('feelings', form.innerHTML)
}

button.addEventListener('click', guardedFeelings);
