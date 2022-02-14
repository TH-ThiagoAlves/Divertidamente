const button = document.querySelector('#send-form');
const nameUser = document.querySelector('#input-line-name');
const pronouns = document.querySelector('#pronouns');
const trigger = document.querySelector('#trigger');
const yourReaction = document.querySelector('#your-reaction');
const alternativeReactions = document.querySelector('#alternative-reactions');
const emotes = document.querySelectorAll('.emoção');

let form = [];
let emoticon = [0, 0, 0, 0, 0];

if (localStorage.getItem('feelings') !== null) {
  form = JSON.parse(localStorage.getItem('feelings'));
  let index = form.length - 1;
  emoticon = form[index].emoticon;
}

const number = Math.max.apply(null, emoticon)

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
  emotes.forEach(element => {
    element.addEventListener('click', sumEmot);
  });
}
const il = () => {
 emotes.forEach(element => {
   element.removeEventListener('click', sumEmot);
 });
}

const grafico = () => {
  Highcharts.chart('container', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Grafico das sua emções'
    },
    plotOptions: {
      pie: {
        allowPointSelect: false,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        }
      }
    },
    series: [{
      name: 'você sentiu',
      colorByPoint: true,
      data: [
        {
          name: 'tristeza',
          y: emoticon[1],
          sliced: true,
          selected: true
        },
        {
          name: 'medo',
          y: emoticon[3]
        },
        {
          name: 'alegria',
          y: emoticon[0]
        },
        {
          name: 'raiva',
          y: emoticon[2]
        },
        {
          name: 'nojo',
          y: emoticon[4]
        }]
    }]
  });
}

const sumEmot = (event) => {
  const armz = event.target.parentNode;
  console.log(armz.id)
  switch (armz.id) {
    case 'alegria':
      emoticon[0] += 1;
      grafico();
      return il();
    case 'tristeza':
      emoticon[1] += 1;
      grafico();
      return il();
    case 'raiva':
      emoticon[2] += 1;
      grafico();
      return il();
    case 'medo':
      emoticon[3] += 1;
      grafico();
      return il();
    case 'nojo':
      emoticon[4] += 1;
      grafico();
      return il();
  }
};

 const temporizador = () => {
  let dateAtual = '';
  const index = JSON.parse(localStorage.getItem('feelings')).length -1;
  dateSaved =  JSON.parse(localStorage.getItem('feelings'))[index].data;
   const dia = new Date();
  if (localStorage.getItem('feelings') !== null) {
    dateAtual = `${dia.getDate()}/${dia.getMonth() + 1}/${dia.getFullYear()}`
  }
  if (dateSaved !== dateAtual) {
    return li();
    
  }else{
    return il();
  }
}; 

const alterarHtml = (objet) => {
  const recomenda = document.querySelector('#recomendações');
  recomenda.innerHTML = `<ul>
                           <li>${objet.meditação}<li>
                           <li>${objet.artigo}<li>
                           <li>${objet.video}<li>
                           <li>${objet.mensagem}<li>
                           <li>${objet.bonus}<li>
                           </ul>`
};

const analise2 = () => {
  let inx = 0;
  emoticon.forEach((element, index) => {
    if (element == number) inx = index
  });
  switch (inx) {
    case 0:
      return alterarHtml(alegria);
    case 1:
      return alterarHtml(tristeza);
    case 2:
      return alterarHtml(raiva);
    case 3:
      return alterarHtml(medo);
    case 4:
      return alterarHtml(nojo);
  }
}




const analise = () => {
  const verifica = emoticon.filter((element) => element == number);
  if (verifica.length >= 1) alterarHtml(generico);
  return analise2();
};

const alegria = {
  meditação: 'a',
  artigo: 'b',
  video: 'c',
  mensagem: 'd',
  bonus: 'a',

}

const tristeza = {
  meditação: 'a',
  artigo: 'b',
  video: 'c',
  mensagem: 'd',
  bonus: 'a',
}

const raiva = {
  meditação: 'a',
  artigo: 'b',
  video: 'c',
  mensagem: 'd',
  bonus: 'a',
}
const medo = {
  meditação: 'a',
  artigo: 'b',
  video: 's',
  mensagem: 'd',
  bonus: 'c',
}

const nojo = {
  meditação: 'a',
  artigo: 'b',
  video: 'c',
  mensagem: 'd',
  bonus: 'v',
}

const generico = {
  meditação: 'a',
  artigo: 'b',
  video: 'c',
  mensagem: 'd',
  bonus: 'v',
}

window.onload = () => {
  li();
  grafico(emoticon);
  analise();
  button.addEventListener('click', guardedFeelings);
  temporizador();
}

//module.exports = { guardedFeelings, li, sumEmot}