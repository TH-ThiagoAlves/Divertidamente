const button = document.querySelector('#send-form');
const nameUser = document.querySelector('#input-line-name');
const pronouns = document.querySelector('#pronouns');
const trigger = document.querySelector('#trigger');
const yourReaction = document.querySelector('#your-reaction');
const alternativeReactions = document.querySelector('#alternative-reactions');

let form = [];
let emoticon = [0, 0, 0, 0, 0];

localStorage.getItem('feelings') === null ? ``: 
form = JSON.parse(localStorage.getItem('feelings'));

let index = form.length - 1
let dateSaved = parseInt(form[index].data[0] + form[index].data[1]);
emoticon = form[index].emoticon;

const guardedFeelings = () => {
  const dia = new Date();
  const obj = {
    name: nameUser.value,
    pronouns: pronouns.value,
    trigger: trigger.value,
    yourReaction: yourReaction.value,
    alternativeReactions: alternativeReactions.value,
    data: `${dia.getDate()}/${dia.getMonth() + 1}/${dia.getFullYear()}`,
    emoticon,
  }
  form.push(obj)
  localStorage.setItem('feelings', JSON.stringify(form))
}

const li = () => {
  document.querySelectorAll('.emoção')
    .forEach(element => element.addEventListener('click', sumEmot)
  );
}

const sumEmot = (event) => {
  const armz = event.target.parentNode;
  switch (armz.id) {
    case 'alegria':
      emoticon[0] += 1;
      armz.removeEventListener('click', sumEmot)
    break;
    case 'tristeza':
      emoticon[1] += 1;
      armz.removeEventListener('click', sumEmot)
    break;
    case 'raiva':
      emoticon[2] += 1;
      armz.removeEventListener('click', sumEmot)
    break;
    case 'medo':
      emoticon[3] += 1;
      armz.removeEventListener('click', sumEmot)
    break;
    case 'nojo':
      emoticon[4] += 1;
      armz.removeEventListener('click', sumEmot)
    break;
  }
}; 

const temporizador = () => {
  const dateAtual = new Date();
  if (dateSaved.getDay !== dateAtual.getDay) {
      return li(); 
  } 
}

window.onload = () => {
  li();
  button.addEventListener('click', guardedFeelings);
}
