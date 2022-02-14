const grafico = (emoticon) => {
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

  module.exports = { grafico }