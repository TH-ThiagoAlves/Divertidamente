/* Constantes globais*/

const button = document.querySelector('button')
const form = document.querySelector('form');
let data = [0, 0, 0, 0, 0];

/* button.addEventListener('click', guardedFeelings);  não existe nenhum elemento no html com a classe, id ou tag button no html o addevente ta quebrando todo codigo js devido a isso deixei comentado!*/

const menuHamburguer = () => {
    const menu = document.querySelector("#menu");
    menu.addEventListener('click', () => {
        const imgMenu = document.querySelector("#img-hamburguer");
        menu.removeChild(imgMenu);
    });
}
 
/* sentimentos e graficos */

const li = () => {
    document.querySelectorAll('.emoção').forEach(element => {
        element.addEventListener('click', sumEmot);
    });
}

const sumEmot = (event) => {
    const armz = event.target.parentNode;
    switch (armz.id) {
        case 'alegria':
            data[0] += 1;
            armz.removeEventListener('click', sumEmot)
            break
        case 'tristeza':
            data[1] += 1;
            armz.removeEventListener('click', sumEmot)
            break
        case 'raiva':
            data[2] += 1;
            armz.removeEventListener('click', sumEmot)
            break
        case 'medo':
            data[3] += 1;
            armz.removeEventListener('click', sumEmot)
            break
        case 'nojo':
            data[4] += 1;
            armz.removeEventListener('click', sumEmot)
            break
    } 
}; 
let dateSaved = new Date(); // o valor de date saved precisa ser salvo quando o formulario for enviado e puxado de volta pra fazer a comparação.
let dateAtual = new Date();

const temporizador = () => {
  if (dateSaved.getDay !== dateAtual.getDay) {
      return li(); 
  } 
}






window.onload = () => {
    menuHamburguer();
    li();
}