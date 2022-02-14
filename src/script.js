const button = document.querySelector('#send-form');
const nameUser = document.querySelector('#input-line-name');
const pronouns = document.querySelector('#pronouns');
const trigger = document.querySelector('#trigger');
const yourReaction = document.querySelector('#your-reaction');
const alternativeReactions = document.querySelector('#alternative-reactions');
const emotes = document.querySelectorAll('.emoção');
const buttonSandwich = document.querySelector('#container-sandwich');
const menu = document.querySelector('#menu');
const maxResults = 4;
const player = document.querySelector('.player')
const video = document.createElement('div')

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
                           
const loadVideos = async (emotion) => {
  const info = await getApi(API_KEY, emotion)
  info.forEach((item) => {
    const frame = document.createElement('iframe');
    frame.src = `http://www.youtube.com/embed/${item.id.videoId}`;
    frame.width = '380';
    frame.height = '315';
    frame.frameborder = '0';
    frame.allowFullscreen;
    video.appendChild(frame);
    player.appendChild(video);

  })
}

const alterarHtml = (object) => {
  return loadVideos(object);
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
    default:
      return alterarHtml(generico);
  }
  
}

const analise = () => {
  const verifica = emoticon.filter((element) => element == number);
  if (verifica.length >= 1){
     return analise2();
  }
 
};

const alegria = 'como lidar com a alegria';

const tristeza = 'como lidar com a tristeza';

const raiva = 'como lidar com a raiva';

const medo = 'como lidar com o medo';

const nojo = 'como lidar com o nojo';

const generico = 'Meditação!!';

window.onload = () => {
  li();
  grafico(emoticon);
  analise();
  button.addEventListener('click', guardedFeelings);
  temporizador();
}
