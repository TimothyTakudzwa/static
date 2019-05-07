let ctx = document.getElementById("lineChart").getContext('2d');

let ctx1 = document.getElementById("doni-usage").getContext('2d');

let myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00"],
        datasets: [{
            label: 'Daily Transcations',
            data: [12, 19, 3, 5, 2, 3, 8, 11],
            backgroundColor: [
                '#BFD7B5'
              
            ],
            borderColor: [
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
        },
        elements: {
            line: {
               tension: 0, // disables bezier curves
           }
       }
    }
});

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
let myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00"],
        datasets: [{
            label: 'Daily Transcations',
            data: [12, 19, 3, 5, 2, 3, 8, 11],
            backgroundColor: [
                '#BFD7B5'
              
            ],
            borderColor: [
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
        },
        elements: {
            line: {
               tension: 0, // disables bezier curves
           }
       }
    }
});

//Load Daily Transaction Data
$('#weekly').click(()=>{
    let myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday"],
            datasets: [{
                label: 'Daily Transcations',
                data: [12, 19, 3, 5, 2, 3, 8, 11],
                backgroundColor: [
                    '#BFD7B5'
                  
                ],
                borderColor: [
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
            },
            elements: {
                line: {
                   tension: 0, // disables bezier curves
               }
           }
        }
    });
    // $.ajax({
    //     url: "#",
    //     dataType: 'json',
    //     success: function(data){

    //         let k;
    //         let d =  new Date(data[""][""]);
    //         let data_objects = Object.keys(data[""]);
    //         console.log(data_objects);
    //         let x_temp_array = data[""];
    //         let count = Object.keys(data[""]).length;
    //         console.log(count);
    //         let temp_cnt = [d];
    //         let temp_cnt2 = [];
    //         let points = [];


    //         for(k = count ; k > 0 ; k--){
    //             points.push(data[""][(data_objects[count - k])][""]);
    //         }
    //         console.log(points.length);
    //         console.log(points);
    //         let myChart = new Chart(ctx, {
    //             type: 'line',
    //             data: {
    //                 labels: ["8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00"],
    //                 datasets: [{
    //                     label: 'Daily Transcations',
    //                     data: [12, 19, 3, 5, 2, 3, 8, 11],
    //                     backgroundColor: [
    //                         '#BFD7B5'
                          
    //                     ],
    //                     borderColor: [
    //                         '#BFD7B5'
    //                     ],
    //                     borderWidth: 1
    //                 }]
    //             },
    //             options: {
    //                 scales: {
    //                     yAxes: [{
    //                         ticks: {
    //                             beginAtZero:true
    //                         }
    //                     }]
    //                 },
    //                 elements: {
    //                     line: {
    //                        tension: 0, // disables bezier curves
    //                    }
    //                }
    //             }
    //         });
    //     },
    //     error: function(){
    //         alert("error check url or api key");
    //     }
    // });
});

//Load Weekly Transaction Data
$('#monthly').click(()=>{
    let myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [1, 2, 3 , 4 , 5, 6, 7, 8, 9 , 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
            datasets: [{
                label: 'Monthly Transcations',
                data: [45, 67, 38, 57, 42, 39, 78, 56, 89, 93, 87, 78, 56, 24, 78, 99, 56, 89, 67, 45, 66, 34, 56, 87, 56, 55, 23, 88, 92],
                backgroundColor: [
                    '#BFD7B5'
                ],
                borderColor: [
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
            },
            elements: {
                line: {
                   tension: 0, // disables bezier curves
               }
           }
        }
    });
    // $.ajax({
    //     url: "#",
    //     dataType: 'json',
    //     success: function(data){

    //         let k;
    //         let d =  new Date(data[""][""]);
    //         let data_objects = Object.keys(data[""]);
    //         console.log(data_objects);
    //         let x_temp_array = data[""];
    //         let count = Object.keys(data[""]).length;
    //         console.log(count);
    //         let temp_cnt = [d];
    //         let temp_cnt2 = [];
    //         let points = [];


    //         for(k = count ; k > 0 ; k--){
    //             points.push(data[""][(data_objects[count - k])][""]);
    //         }
    //         console.log(points.length);
    //         console.log(points);
    //         let myChart = new Chart(ctx, {
    //             type: 'line',
    //             data: {
    //                 labels: [1, 2, 3 , 4 , 5, 6, 7, 8, 9 , 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    //                 datasets: [{
    //                     label: 'Monthly Transcations',
    //                     data: [45, 67, 38, 57, 42, 39, 78, 56, 89, 93, 87, 78, 56, 24, 78, 99, 56, 89, 67, 45, 66, 34, 56, 87, 56, 55, 23, 88, 92],
    //                     backgroundColor: [
    //                         '#BFD7B5'
    //                     ],
    //                     borderColor: [
    //                         '#BFD7B5'
    //                     ],
    //                     borderWidth: 1
    //                 }]
    //             },
    //             options: {
    //                 scales: {
    //                     yAxes: [{
    //                         ticks: {
    //                             beginAtZero:true
    //                         }
    //                     }]
    //                 },
    //                 elements: {
    //                     line: {
    //                        tension: 0, // disables bezier curves
    //                    }
    //                }
    //             }
    //         });

    //     },
    //     error: function(){
    //         alert("error check url or api key");
    //     }
    // });
}); 

//Load Yearly Transaction Data
$('#yearly').click(()=>{
    let myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            datasets: [{
                label: 'Yearly Transcations',
                data: [210, 356, 388, 257, 428, 396, 478, 501, 634, 766, 567, 400],
                backgroundColor: [
                    '#BFD7B5'
                ],
                borderColor: [
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
            },
            elements: {
                line: {
                   tension: 0, // disables bezier curves
               }
           }
        }
    });
    // $.ajax({
    //     url: "#",
    //     dataType: 'json',
    //     success: function(data){

    //         let k;
    //         let d =  new Date(data[""][""]);
    //         let data_objects = Object.keys(data[""]);
    //         console.log(data_objects);
    //         let x_temp_array = data[""];
    //         let count = Object.keys(data[""]).length;
    //         console.log(count);
    //         let temp_cnt = [d];
    //         let temp_cnt2 = [];
    //         let points = [];


    //         for(k = count ; k > 0 ; k--){
    //             points.push(data[""][(data_objects[count - k])][""]);
    //         }
    //         console.log(points.length);
    //         console.log(points);
    //         let myChart = new Chart(ctx, {
    //             type: 'line',
    //             data: {
    //                 labels: ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    //                 datasets: [{
    //                     label: 'Yearly Transcations',
    //                     data: [210, 356, 388, 257, 428, 396, 478, 501, 634, 766, 567, 400],
    //                     backgroundColor: [
    //                         '#BFD7B5'
    //                     ],
    //                     borderColor: [
    //                         '#BFD7B5'
    //                     ],
    //                     borderWidth: 1
    //                 }]
    //             },
    //             options: {
    //                 scales: {
    //                     yAxes: [{
    //                         ticks: {
    //                             beginAtZero:true
    //                         }
    //                     }]
    //                 },
    //                 elements: {
    //                     line: {
    //                        tension: 0, // disables bezier curves
    //                    }
    //                }
    //             }
    //         });
    //     },
    //     error: function(){
    //         alert("error check url or api key");
    //     }
    // });
});
});

$('#itCat').click(()=>{
    //Default Load Daily Transaction 
$('.tt-btn').addClass('.btn-success');
let myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00"],
        datasets: [{
            label: 'Daily Transcations',
            data: [12, 19, 3, 5, 2, 3, 8, 11],
            backgroundColor: [
                '#BFD7B5'
              
            ],
            borderColor: [
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
        },
        elements: {
            line: {
               tension: 0, // disables bezier curves
           }
       }
    }
});

//Load Daily Transaction Data
$('#weekly').click(()=>{
    let myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday"],
            datasets: [{
                label: 'Daily Transcations',
                data: [12, 19, 3, 5, 2, 3, 8, 11],
                backgroundColor: [
                    '#BFD7B5'
                  
                ],
                borderColor: [
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
            },
            elements: {
                line: {
                   tension: 0, // disables bezier curves
               }
           }
        }
    });
    // $.ajax({
    //     url: "#",
    //     dataType: 'json',
    //     success: function(data){

    //         let k;
    //         let d =  new Date(data[""][""]);
    //         let data_objects = Object.keys(data[""]);
    //         console.log(data_objects);
    //         let x_temp_array = data[""];
    //         let count = Object.keys(data[""]).length;
    //         console.log(count);
    //         let temp_cnt = [d];
    //         let temp_cnt2 = [];
    //         let points = [];


    //         for(k = count ; k > 0 ; k--){
    //             points.push(data[""][(data_objects[count - k])][""]);
    //         }
    //         console.log(points.length);
    //         console.log(points);
    //         let myChart = new Chart(ctx, {
    //             type: 'line',
    //             data: {
    //                 labels: ["8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00"],
    //                 datasets: [{
    //                     label: 'Daily Transcations',
    //                     data: [12, 19, 3, 5, 2, 3, 8, 11],
    //                     backgroundColor: [
    //                         '#BFD7B5'
                          
    //                     ],
    //                     borderColor: [
    //                         '#BFD7B5'
    //                     ],
    //                     borderWidth: 1
    //                 }]
    //             },
    //             options: {
    //                 scales: {
    //                     yAxes: [{
    //                         ticks: {
    //                             beginAtZero:true
    //                         }
    //                     }]
    //                 },
    //                 elements: {
    //                     line: {
    //                        tension: 0, // disables bezier curves
    //                    }
    //                }
    //             }
    //         });
    //     },
    //     error: function(){
    //         alert("error check url or api key");
    //     }
    // });
});

//Load Weekly Transaction Data
$('#monthly').click(()=>{
    let myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [1, 2, 3 , 4 , 5, 6, 7, 8, 9 , 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
            datasets: [{
                label: 'Monthly Transcations',
                data: [45, 67, 38, 57, 42, 39, 78, 56, 89, 93, 87, 78, 56, 24, 78, 99, 56, 89, 67, 45, 66, 34, 56, 87, 56, 55, 23, 88, 92],
                backgroundColor: [
                    '#BFD7B5'
                ],
                borderColor: [
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
            },
            elements: {
                line: {
                   tension: 0, // disables bezier curves
               }
           }
        }
    });
    // $.ajax({
    //     url: "#",
    //     dataType: 'json',
    //     success: function(data){

    //         let k;
    //         let d =  new Date(data[""][""]);
    //         let data_objects = Object.keys(data[""]);
    //         console.log(data_objects);
    //         let x_temp_array = data[""];
    //         let count = Object.keys(data[""]).length;
    //         console.log(count);
    //         let temp_cnt = [d];
    //         let temp_cnt2 = [];
    //         let points = [];


    //         for(k = count ; k > 0 ; k--){
    //             points.push(data[""][(data_objects[count - k])][""]);
    //         }
    //         console.log(points.length);
    //         console.log(points);
    //         let myChart = new Chart(ctx, {
    //             type: 'line',
    //             data: {
    //                 labels: [1, 2, 3 , 4 , 5, 6, 7, 8, 9 , 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    //                 datasets: [{
    //                     label: 'Monthly Transcations',
    //                     data: [45, 67, 38, 57, 42, 39, 78, 56, 89, 93, 87, 78, 56, 24, 78, 99, 56, 89, 67, 45, 66, 34, 56, 87, 56, 55, 23, 88, 92],
    //                     backgroundColor: [
    //                         '#BFD7B5'
    //                     ],
    //                     borderColor: [
    //                         '#BFD7B5'
    //                     ],
    //                     borderWidth: 1
    //                 }]
    //             },
    //             options: {
    //                 scales: {
    //                     yAxes: [{
    //                         ticks: {
    //                             beginAtZero:true
    //                         }
    //                     }]
    //                 },
    //                 elements: {
    //                     line: {
    //                        tension: 0, // disables bezier curves
    //                    }
    //                }
    //             }
    //         });

    //     },
    //     error: function(){
    //         alert("error check url or api key");
    //     }
    // });
}); 

//Load Yearly Transaction Data
$('#yearly').click(()=>{
    let myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            datasets: [{
                label: 'Yearly Transcations',
                data: [210, 356, 388, 257, 428, 396, 478, 501, 634, 766, 567, 400],
                backgroundColor: [
                    '#BFD7B5'
                ],
                borderColor: [
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
            },
            elements: {
                line: {
                   tension: 0, // disables bezier curves
               }
           }
        }
    });
    // $.ajax({
    //     url: "#",
    //     dataType: 'json',
    //     success: function(data){

    //         let k;
    //         let d =  new Date(data[""][""]);
    //         let data_objects = Object.keys(data[""]);
    //         console.log(data_objects);
    //         let x_temp_array = data[""];
    //         let count = Object.keys(data[""]).length;
    //         console.log(count);
    //         let temp_cnt = [d];
    //         let temp_cnt2 = [];
    //         let points = [];


    //         for(k = count ; k > 0 ; k--){
    //             points.push(data[""][(data_objects[count - k])][""]);
    //         }
    //         console.log(points.length);
    //         console.log(points);
    //         let myChart = new Chart(ctx, {
    //             type: 'line',
    //             data: {
    //                 labels: ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    //                 datasets: [{
    //                     label: 'Yearly Transcations',
    //                     data: [210, 356, 388, 257, 428, 396, 478, 501, 634, 766, 567, 400],
    //                     backgroundColor: [
    //                         '#BFD7B5'
    //                     ],
    //                     borderColor: [
    //                         '#BFD7B5'
    //                     ],
    //                     borderWidth: 1
    //                 }]
    //             },
    //             options: {
    //                 scales: {
    //                     yAxes: [{
    //                         ticks: {
    //                             beginAtZero:true
    //                         }
    //                     }]
    //                 },
    //                 elements: {
    //                     line: {
    //                        tension: 0, // disables bezier curves
    //                    }
    //                }
    //             }
    //         });
    //     },
    //     error: function(){
    //         alert("error check url or api key");
    //     }
    // });
});
});

$('#baCat').click(()=>{
//Default Load Daily Transaction Data
$('.tt-btn').addClass('.btn-success');
let myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00"],
        datasets: [{
            label: 'Daily Transcations',
            data: [12, 19, 3, 5, 2, 3, 8, 11],
            backgroundColor: [
                '#BFD7B5'
              
            ],
            borderColor: [
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
        },
        elements: {
            line: {
               tension: 0, // disables bezier curves
           }
       }
    }
});


//Load Daily Transaction Data
$('#weekly').click(()=>{
    let myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday"],
            datasets: [{
                label: 'Daily Transcations',
                data: [12, 19, 3, 5, 2, 3, 8, 11],
                backgroundColor: [
                    '#BFD7B5'
                  
                ],
                borderColor: [
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
            },
            elements: {
                line: {
                   tension: 0, // disables bezier curves
               }
           }
        }
    });
    // $.ajax({ 
    //     url: "#",
    //     dataType: 'json',
    //     success: function(data){

    //         let k;
    //         let d =  new Date(data[""][""]);
    //         let data_objects = Object.keys(data[""]);
    //         console.log(data_objects);
    //         let x_temp_array = data[""];
    //         let count = Object.keys(data[""]).length;
    //         console.log(count);
    //         let temp_cnt = [d];
    //         let temp_cnt2 = [];
    //         let points = [];


    //         for(k = count ; k > 0 ; k--){
    //             points.push(data[""][(data_objects[count - k])][""]);
    //         }
    //         console.log(points.length);
    //         console.log(points);
    //         let myChart = new Chart(ctx, {
    //             type: 'line',
    //             data: {
    //                 labels: ["8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00"],
    //                 datasets: [{
    //                     label: 'Daily Transcations',
    //                     data: [12, 19, 3, 5, 2, 3, 8, 11],
    //                     backgroundColor: [
    //                         '#BFD7B5'
                          
    //                     ],
    //                     borderColor: [
    //                         '#BFD7B5'
    //                     ],
    //                     borderWidth: 1
    //                 }]
    //             },
    //             options: {
    //                 scales: {
    //                     yAxes: [{
    //                         ticks: {
    //                             beginAtZero:true
    //                         }
    //                     }]
    //                 },
    //                 elements: {
    //                     line: {
    //                        tension: 0, // disables bezier curves
    //                    }
    //                }
    //             }
    //         });
    //     },
    //     error: function(){
    //         alert("error check url or api key");
    //     }
    // });
});

//Load Weekly Transaction Data
$('#monthly').click(()=>{
    let myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [1, 2, 3 , 4 , 5, 6, 7, 8, 9 , 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
            datasets: [{
                label: 'Monthly Transcations',
                data: [45, 67, 38, 57, 42, 39, 78, 56, 89, 93, 87, 78, 56, 24, 78, 99, 56, 89, 67, 45, 66, 34, 56, 87, 56, 55, 23, 88, 92],
                backgroundColor: [
                    '#BFD7B5'
                ],
                borderColor: [
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
            },
            elements: {
                line: {
                   tension: 0, // disables bezier curves
               }
           }
        }
    });
    // $.ajax({
    //     url: "#",
    //     dataType: 'json',
    //     success: function(data){

    //         let k;
    //         let d =  new Date(data[""][""]);
    //         let data_objects = Object.keys(data[""]);
    //         console.log(data_objects);
    //         let x_temp_array = data[""];
    //         let count = Object.keys(data[""]).length;
    //         console.log(count);
    //         let temp_cnt = [d];
    //         let temp_cnt2 = [];
    //         let points = [];


    //         for(k = count ; k > 0 ; k--){
    //             points.push(data[""][(data_objects[count - k])][""]);
    //         }
    //         console.log(points.length);
    //         console.log(points);
    //         let myChart = new Chart(ctx, {
    //             type: 'line',
    //             data: {
    //                 labels: [1, 2, 3 , 4 , 5, 6, 7, 8, 9 , 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    //                 datasets: [{
    //                     label: 'Monthly Transcations',
    //                     data: [45, 67, 38, 57, 42, 39, 78, 56, 89, 93, 87, 78, 56, 24, 78, 99, 56, 89, 67, 45, 66, 34, 56, 87, 56, 55, 23, 88, 92],
    //                     backgroundColor: [
    //                         '#BFD7B5'
    //                     ],
    //                     borderColor: [
    //                         '#BFD7B5'
    //                     ],
    //                     borderWidth: 1
    //                 }]
    //             },
    //             options: {
    //                 scales: {
    //                     yAxes: [{
    //                         ticks: {
    //                             beginAtZero:true
    //                         }
    //                     }]
    //                 },
    //                 elements: {
    //                     line: {
    //                        tension: 0, // disables bezier curves
    //                    }
    //                }
    //             }
    //         });

    //     },
    //     error: function(){
    //         alert("error check url or api key");
    //     }
    // });
}); 

//Load Yearly Transaction Data
$('#yearly').click(()=>{
    let myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            datasets: [{
                label: 'Yearly Transcations',
                data: [210, 356, 388, 257, 428, 396, 478, 501, 634, 766, 567, 400],
                backgroundColor: [
                    '#BFD7B5'
                ],
                borderColor: [
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
            },
            elements: {
                line: {
                   tension: 0, // disables bezier curves
               }
           }
        }
    });
    // $.ajax({
    //     url: "#",
    //     dataType: 'json',
    //     success: function(data){

    //         let k;
    //         let d =  new Date(data[""][""]);
    //         let data_objects = Object.keys(data[""]);
    //         console.log(data_objects);
    //         let x_temp_array = data[""];
    //         let count = Object.keys(data[""]).length;
    //         console.log(count);
    //         let temp_cnt = [d];
    //         let temp_cnt2 = [];
    //         let points = [];


    //         for(k = count ; k > 0 ; k--){
    //             points.push(data[""][(data_objects[count - k])][""]);
    //         }
    //         console.log(points.length);
    //         console.log(points);
    //         let myChart = new Chart(ctx, {
    //             type: 'line',
    //             data: {
    //                 labels: ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    //                 datasets: [{
    //                     label: 'Yearly Transcations',
    //                     data: [210, 356, 388, 257, 428, 396, 478, 501, 634, 766, 567, 400],
    //                     backgroundColor: [
    //                         '#BFD7B5'
    //                     ],
    //                     borderColor: [
    //                         '#BFD7B5'
    //                     ],
    //                     borderWidth: 1
    //                 }]
    //             },
    //             options: {
    //                 scales: {
    //                     yAxes: [{
    //                         ticks: {
    //                             beginAtZero:true
    //                         }
    //                     }]
    //                 },
    //                 elements: {
    //                     line: {
    //                        tension: 0, // disables bezier curves
    //                    }
    //                }
    //             }
    //         });
    //     },
    //     error: function(){
    //         alert("error check url or api key");
    //     }
    // });
});
});

$('#MSCat').click(()=>{
    //Default Load Daily Transaction Data
$('.tt-btn').addClass('.btn-success');
let myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00"],
        datasets: [{
            label: 'Daily Transcations',
            data: [12, 19, 3, 5, 2, 3, 8, 11],
            backgroundColor: [
                '#BFD7B5'
              
            ],
            borderColor: [
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
        },
        elements: {
            line: {
               tension: 0, // disables bezier curves
           }
       }
    }
});

//Load Daily Transaction Data
$('#weekly').click(()=>{
    let myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday"],
            datasets: [{
                label: 'Daily Transcations',
                data: [12, 19, 3, 5, 2, 3, 8, 11],
                backgroundColor: [
                    '#BFD7B5'
                  
                ],
                borderColor: [
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
            },
            elements: {
                line: {
                   tension: 0, // disables bezier curves
               }
           }
        }
    });
    // $.ajax({
    //     url: "#",
    //     dataType: 'json',
    //     success: function(data){

    //         let k;
    //         let d =  new Date(data[""][""]);
    //         let data_objects = Object.keys(data[""]);
    //         console.log(data_objects);
    //         let x_temp_array = data[""];
    //         let count = Object.keys(data[""]).length;
    //         console.log(count);
    //         let temp_cnt = [d];
    //         let temp_cnt2 = [];
    //         let points = [];


    //         for(k = count ; k > 0 ; k--){
    //             points.push(data[""][(data_objects[count - k])][""]);
    //         }
    //         console.log(points.length);
    //         console.log(points);
    //         let myChart = new Chart(ctx, {
    //             type: 'line',
    //             data: {
    //                 labels: ["8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00"],
    //                 datasets: [{
    //                     label: 'Daily Transcations',
    //                     data: [12, 19, 3, 5, 2, 3, 8, 11],
    //                     backgroundColor: [
    //                         '#BFD7B5'
                          
    //                     ],
    //                     borderColor: [
    //                         '#BFD7B5'
    //                     ],
    //                     borderWidth: 1
    //                 }]
    //             },
    //             options: {
    //                 scales: {
    //                     yAxes: [{
    //                         ticks: {
    //                             beginAtZero:true
    //                         }
    //                     }]
    //                 },
    //                 elements: {
    //                     line: {
    //                        tension: 0, // disables bezier curves
    //                    }
    //                }
    //             }
    //         });
    //     },
    //     error: function(){
    //         alert("error check url or api key");
    //     }
    // });
});

//Load Weekly Transaction Data
$('#monthly').click(()=>{
    let myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [1, 2, 3 , 4 , 5, 6, 7, 8, 9 , 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
            datasets: [{
                label: 'Monthly Transcations',
                data: [45, 67, 38, 57, 42, 39, 78, 56, 89, 93, 87, 78, 56, 24, 78, 99, 56, 89, 67, 45, 66, 34, 56, 87, 56, 55, 23, 88, 92],
                backgroundColor: [
                    '#BFD7B5'
                ],
                borderColor: [
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
            },
            elements: {
                line: {
                   tension: 0, // disables bezier curves
               }
           }
        }
    });
    // $.ajax({
    //     url: "#",
    //     dataType: 'json',
    //     success: function(data){

    //         let k;
    //         let d =  new Date(data[""][""]);
    //         let data_objects = Object.keys(data[""]);
    //         console.log(data_objects);
    //         let x_temp_array = data[""];
    //         let count = Object.keys(data[""]).length;
    //         console.log(count);
    //         let temp_cnt = [d];
    //         let temp_cnt2 = [];
    //         let points = [];


    //         for(k = count ; k > 0 ; k--){
    //             points.push(data[""][(data_objects[count - k])][""]);
    //         }
    //         console.log(points.length);
    //         console.log(points);
    //         let myChart = new Chart(ctx, {
    //             type: 'line',
    //             data: {
    //                 labels: [1, 2, 3 , 4 , 5, 6, 7, 8, 9 , 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    //                 datasets: [{
    //                     label: 'Monthly Transcations',
    //                     data: [45, 67, 38, 57, 42, 39, 78, 56, 89, 93, 87, 78, 56, 24, 78, 99, 56, 89, 67, 45, 66, 34, 56, 87, 56, 55, 23, 88, 92],
    //                     backgroundColor: [
    //                         '#BFD7B5'
    //                     ],
    //                     borderColor: [
    //                         '#BFD7B5'
    //                     ],
    //                     borderWidth: 1
    //                 }]
    //             },
    //             options: {
    //                 scales: {
    //                     yAxes: [{
    //                         ticks: {
    //                             beginAtZero:true
    //                         }
    //                     }]
    //                 },
    //                 elements: {
    //                     line: {
    //                        tension: 0, // disables bezier curves
    //                    }
    //                }
    //             }
    //         });

    //     },
    //     error: function(){
    //         alert("error check url or api key");
    //     }
    // });
}); 



//Load Yearly Transaction Data
$('#yearly').click(()=>{
    let myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            datasets: [{
                label: 'Yearly Transcations',
                data: [210, 356, 388, 257, 428, 396, 478, 501, 634, 766, 567, 400],
                backgroundColor: [
                    '#BFD7B5'
                ],
                borderColor: [
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
            },
            elements: {
                line: {
                   tension: 0, // disables bezier curves
               }
           }
        }
    });
    // $.ajax({
    //     url: "#",
    //     dataType: 'json',
    //     success: function(data){

    //         let k;
    //         let d =  new Date(data[""][""]);
    //         let data_objects = Object.keys(data[""]);
    //         console.log(data_objects);
    //         let x_temp_array = data[""];
    //         let count = Object.keys(data[""]).length;
    //         console.log(count);
    //         let temp_cnt = [d];
    //         let temp_cnt2 = [];
    //         let points = [];


    //         for(k = count ; k > 0 ; k--){
    //             points.push(data[""][(data_objects[count - k])][""]);
    //         }
    //         console.log(points.length);
    //         console.log(points);
    //         let myChart = new Chart(ctx, {
    //             type: 'line',
    //             data: {
    //                 labels: ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    //                 datasets: [{
    //                     label: 'Yearly Transcations',
    //                     data: [210, 356, 388, 257, 428, 396, 478, 501, 634, 766, 567, 400],
    //                     backgroundColor: [
    //                         '#BFD7B5'
    //                     ],
    //                     borderColor: [
    //                         '#BFD7B5'
    //                     ],
    //                     borderWidth: 1
    //                 }]
    //             },
    //             options: {
    //                 scales: {
    //                     yAxes: [{
    //                         ticks: {
    //                             beginAtZero:true
    //                         }
    //                     }]
    //                 },
    //                 elements: {
    //                     line: {
    //                        tension: 0, // disables bezier curves
    //                    }
    //                }
    //             }
    //         });
    //     },
    //     error: function(){
    //         alert("error check url or api key");
    //     }
    // });
});
});

