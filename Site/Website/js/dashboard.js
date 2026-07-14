// dashboard.js

const delayTrend = document.getElementById("delayTrend");

if (delayTrend) {
    new Chart(delayTrend, {
        type: "line",
        data: {
            labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul"],
            datasets: [{
                label: "Delayed Trips",
                data: [1200,1500,1800,1700,2000,1900,2300],
                borderColor: "#38BDF8",
                backgroundColor: "rgba(56,189,248,0.15)",
                fill: true,
                tension: .4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        color: "#fff"
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: "#94A3B8"
                    }
                },
                y: {
                    ticks: {
                        color: "#94A3B8"
                    }
                }
            }
        }
    });
}



const stationPerformance =
document.getElementById("stationPerformance");

if(stationPerformance){

new Chart(stationPerformance,{

type:"bar",

data:{

labels:[
"London",
"Manchester",
"Liverpool",
"Leeds",
"Birmingham"
],

datasets:[{

label:"Performance %",

data:[
95,
82,
88,
91,
85
],

backgroundColor:[
"#2563EB",
"#38BDF8",
"#06B6D4",
"#2563EB",
"#38BDF8"
]

}]

},

options:{

responsive:true,

plugins:{

legend:{

labels:{
color:"#fff"
}

}

},

scales:{

x:{

ticks:{
color:"#94A3B8"
}

},

y:{

ticks:{
color:"#94A3B8"
}

}

}

}

});

}