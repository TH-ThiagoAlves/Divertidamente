// const button = document.querySelector('button')

// button.addEventListener();

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