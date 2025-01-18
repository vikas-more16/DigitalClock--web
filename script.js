let hour =document.getElementById("hour");
let minute =document.getElementById("minute");
let second = document.getElementById("second");

setInterval(()=>{
   d = new Date();
   
   htimes = d.getHours();
  mtimes = d.getMinutes();
  stimes = d.getSeconds();
  hrotation = 30*htimes + mtimes/2;
  mrotation = 6*mtimes;
  srotation = 6*stimes;
  hour.style.transform = `rotate(${hrotation}deg)`
  minute.style.transform = `rotate(${mrotation}deg)`
  second.style.transform = `rotate(${srotation}deg)`
},1000);