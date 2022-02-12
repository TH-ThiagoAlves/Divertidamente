const button = document.querySelector('button')
const form = document.querySelector('form');

const guardedFeelings = () => {
    localStorage.setItem('feelings', form.innerHTML)
}

button.addEventListener('click', guardedFeelings);

const menuHamburguer = () => {
    const menu = document.querySelector("#menu");
    menu.addEventListener('click', () => {
        const imgMenu = document.querySelector("#img-hamburguer");
        menu.removeChild(imgMenu);
    });
}

window.onload = () => {
  menuHamburguer();
}
