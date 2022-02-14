const li = () => {
    const emotes = document.querySelectorAll('.emoção');
    emotes.forEach(element => {
      element.addEventListener('click', sumEmot);
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
    let emoticon = [0, 0, 0, 0, 0];
    const armz = event.target.parentNode;
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

  module.exports = { li }