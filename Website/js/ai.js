

function predict(){


let distance =
document.getElementById("distance").value;


let result =
document.getElementById("prediction");


let percent =
document.getElementById("percentage");



if(distance===""){


result.innerHTML =
"Please enter journey distance";


return;


}




let probability =
Math.floor(Math.random()*40)+40;



percent.innerHTML =
probability+"%";




if(probability > 60){


result.innerHTML =
"🚨 High Delay Risk";


result.style.color="#ef4444";


}

else{


result.innerHTML =
"✅ Journey Expected On Time";


result.style.color="#22c55e";


}



}