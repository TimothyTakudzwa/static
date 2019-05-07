let ctx = document.getElementById("revenueChart").getContext('2d');
let ctx1 = document.getElementById("expenditureChart").getContext('2d');

let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["March 2018", "April 2018", "June 2018", "July 2018", "August 2018", "September 2018"],
        datasets: [{
            label: 'Revenue',
            data: [39774, 45009, 32788, 54332, 23342, 31900],
            backgroundColor: [
                '#BFD7B5',
                '#BFD7B5',
                '#BFD7B5',
                '#BFD7B5',
                '#BFD7B5',
                '#BFD7B5'
            ],
            borderColor: [
                '#BFD7B5',
                '#BFD7B5',
                '#BFD7B5',
                '#BFD7B5',
                '#BFD7B5',
                '#BFD7B5'
            ],
            borderWidth: 1
        }]
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

let myChart2 = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ["March 2018", "April 2018", "June 2018", "July 2018", "August 2018", "September 2018"],
        datasets: [{
            label: 'Expenditure',
            data: [374, 459, 328, 542, 342, 319],
            backgroundColor: [
                '#BFD7B5',
                '#BFD7B5',
                '#BFD7B5',
                '#BFD7B5',
                '#BFD7B5',
                '#BFD7B5'
            ],
            borderColor: [
                '#BFD7B5',
                '#BFD7B5',
                '#BFD7B5',
                '#BFD7B5',
                '#BFD7B5',
                '#BFD7B5'
            ],
            borderWidth: 1
        }]
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