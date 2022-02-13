// Constantes globais

// button.addEventListener();
const button = document.querySelector('button')
const form = document.querySelector('form');
let data = [50, 32, 1, 20, 0];


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

window.onload = () => {
    li();
};

