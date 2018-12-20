var ctx = document.getElementById("columnChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["01", "02", "03", "04", "05", '06', '07', '08', '09'],
        datasets:  [{
          label: 'Signups',
          backgroundColor: "#80bfca",
          data: [300, 180, 210, 370, 420, 390, 310, 290, 320]

        }, {
          label: 'FTD',
          backgroundColor: "#f58220",
          data: [400, 150, 290, 260, 430, 110, 200, 510, 330]

        }],
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});