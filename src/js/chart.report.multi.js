// let ctx = document.getElementById("lineChart").getContext('2d');

let ctx1 = document.getElementById("doni-usage").getContext('2d');


let donutConfig = {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [
                953,
                813,
                756,
                369
            ],
            backgroundColor: [
                '#BFD7B5',
                '#A3C4BC',
                '#413C58',
                '#0E5640'
        
            ],
            label: 'Transaction Counter'}]
        },
    options: {
        responsive: true,
				legend: {
					position: 'top',
				},
				title: {
					display: true,
					text: 'Transcation Counter'
				},
				animation: {
					animateScale: true,
					animateRotate: true
				}
			}
    };

let myDoughnutChart = new Chart(ctx1, donutConfig);

$('#regCat').click(()=>{
    //Default Load Daily Transaction Data
$('.tt-btn').addClass('.btn-success');

//Load Daily Transaction Data

//Load Weekly Transaction Data

//Load Yearly Transaction Data

});





