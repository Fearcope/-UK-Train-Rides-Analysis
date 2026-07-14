// =============================
// Counter Animation
// =============================

const counters = document.querySelectorAll("[data-count]");

const counterObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter = entry.target;

const target = +counter.dataset.count;

let count = 0;

const speed = target / 120;

const update = ()=>{

count += speed;

if(count < target){

counter.innerText = Math.floor(count).toLocaleString();

requestAnimationFrame(update);

}else{

counter.innerText = target.toLocaleString();

}

}

update();

counterObserver.unobserve(counter);

}

});

});

counters.forEach(counter=>counterObserver.observe(counter));



// =============================
// Navbar Scroll Effect
// =============================

window.addEventListener("scroll",()=>{

const nav=document.querySelector(".navbar");

if(window.scrollY>60){

nav.style.background="rgba(5,15,30,.95)";

nav.style.boxShadow="0 10px 30px rgba(0,0,0,.35)";

}else{

nav.style.background="rgba(7,17,31,.85)";

nav.style.boxShadow="none";

}

});



// =============================
// Scroll Reveal Animation
// =============================

const sections=document.querySelectorAll("section");

const reveal=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{threshold:.15});

sections.forEach(sec=>{

sec.style.opacity="0";

sec.style.transform="translateY(60px)";

sec.style.transition=".8s";

reveal.observe(sec);

});




// =============================
// Gallery Hover
// =============================

const cards=document.querySelectorAll(".gallery-card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.transform=`perspective(1000px) rotateY(${(x-rect.width/2)/25}deg) rotateX(${-(y-rect.height/2)/25}deg)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="rotateX(0) rotateY(0)";

});

});




// =============================
// Smooth Scroll
// =============================

document.querySelectorAll("a[href^='#']").forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});




// =============================
// Back To Top Button
// =============================

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.className="top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

topBtn.style.display=window.scrollY>400?"block":"none";

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};
window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},1500);

});