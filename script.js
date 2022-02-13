// Constantes globais

// button.addEventListener();
const button = document.querySelector('button')
const form = document.querySelector('form');
let data = [0, 0, 5, 0, 0];
const emotes = document.querySelectorAll('.emoção');
const number = Math.max.apply(null, data)


const guardedFeelings = () => {
    localStorage.setItem('feelings', form.innerHTML)
}

/* button.addEventListener('click', guardedFeelings);  não existe nenhum elemento no html com a classe, id ou tag button no html o addevente ta quebrando todo codigo js devido a isso deixei comentado!*/

// const clickMenu = () => {
//     const menu = document.querySelector('.nav-bar');
//     menu.addEventListener('click', () => {
//         document.getElementById('menu').classList.toggle('change');
//         document.getElementById('nav').classList.toggle('change');
//         document.getElementById('menu-bg').classList.toggle('change');
//     })
// }

/* sentimentos e graficos */

const li = () => {
    emotes.forEach(element => {
        element.addEventListener('click', sumEmot);
    });
}
const il = () => {
    emotes.forEach(element => {
        element.removeEventListener('click', sumEmot)
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
            data: [{
                name: 'tristeza',
                y: data[1],
                sliced: true,
                selected: true
            }, {
                name: 'medo',
                y: data[3]
            }, {

                name: 'alegria',
                y: data[0]

            }, {
                name: 'raiva',
                y: data[2]
            }, {
                name: 'nojo',
                y: data[4]
            }]
        }]
    });
}

const sumEmot = (event) => {
    const armz = event.target.parentNode;
    switch (armz.id) {
        case 'alegria':
            data[0] += 1;
            grafico();
            return il();
        case 'tristeza':
            data[1] += 1;
            grafico();
            return il();
        case 'raiva':
            data[2] += 1;
            grafico();
            return il();
        case 'medo':
            data[3] += 1;
            grafico();
            return il();
        case 'nojo':
            data[4] += 1;
            grafico();
            return il();
    }

    console.log(data);
};

let dateSaved = 13; // o valor de date saved precisa ser salvo quando o formulario for enviado e puxado de volta pra fazer a comparação.
let dateAtual = new Date();

const temporizador = () => {
    if (dateSaved.getDate() !== dateAtual.getDate()) {
        return li();
    }
}

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
    data.forEach((element, index) => {
        if (element == number)
            inx = index
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
    const verifica = data.filter((element) => element == number);
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
    grafico();
    analise();
};

