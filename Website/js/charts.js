

// ================= MONTHLY DELAY CHART =================


const monthlyDelay =
document.getElementById("monthlyDelay");



if(monthlyDelay){


new Chart(monthlyDelay, {


type:"line",


data:{


labels:[

"Jan",
"Feb",
"Mar",
"Apr",
"May",
"Jun",
"Jul"

],


datasets:[{


label:"Delayed Trips",


data:[

1200,
1800,
1500,
2300,
2000,
2800,
2500

],


borderWidth:3,


tension:.4



}]


},


options:{


responsive:true,


plugins:{


legend:{


labels:{


color:"#ffffff"


}


}


},


scales:{


x:{


ticks:{


color:"#94a3b8"


}


},


y:{


ticks:{


color:"#94a3b8"


}


}


}



}



});


}







// ================= DELAY REASONS =================



const delayReasons =
document.getElementById("delayReasons");



if(delayReasons){


new Chart(delayReasons, {


type:"doughnut",


data:{


labels:[

"Weather",
"Technical Issues",
"Traffic",
"Staff Problems"

],



datasets:[{


data:[

35,
30,
20,
15

],


borderWidth:0


}]


},


options:{


plugins:{


legend:{


labels:{


color:"#ffffff"


}


}


}



}



});


}








// ================= STATION PERFORMANCE =================



const stationChart =
document.getElementById("stationChart");



if(stationChart){


new Chart(stationChart, {


type:"bar",


data:{


labels:[

"London",
"Manchester",
"Birmingham",
"Liverpool",
"Leeds"

],



datasets:[{


label:"Performance %",


data:[

95,
82,
90,
87,
93

],


borderWidth:1



}]


},


options:{


responsive:true,


plugins:{


legend:{


labels:{


color:"#ffffff"


}


}


},


scales:{


x:{


ticks:{


color:"#94a3b8"


}


},


y:{


ticks:{


color:"#94a3b8"


}


}


}



}



});


}