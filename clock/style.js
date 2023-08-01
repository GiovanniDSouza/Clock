var day = new Array('Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado');
var month = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro');
function clock(){
    //3° preciso passar isso pro HTML
    let dateNow = new Date();
  var h = new Date().getHours();
  var m = new Date().getMinutes();
  var s = new Date().getSeconds();

  var hours = document.getElementById("hour").innerHTML = h;
  var minutes = document.getElementById("minutes").innerHTML = m;
  var seconds = document.getElementById("seconds").innerHTML = s;

  var fullDate = day[dateNow.getDay()] + ', '  +  dateNow.getDate()  +  ' de '  +  month[dateNow.getMonth()] ; 
  document.getElementById("date").innerHTML = fullDate;
  document.getElementById("dat").innerHTML = fullDate;
}

var interval = setInterval(clock, 1000);


function clockDigital(){
  //3° preciso passar isso pro HTML
  let dateNow = new Date();
var h = new Date().getHours();
var m = new Date().getMinutes();


var hourss = document.getElementById("hourr").innerHTML = h;
var minutess = document.getElementById("minutess").innerHTML = m;


var fullDate = day[dateNow.getDay()] + ', '  +  dateNow.getDate()  +  ' de '  +  month[dateNow.getMonth()] ; 
document.getElementById("date").innerHTML = fullDate;
}

var interval = setInterval(clockDigital, 1000);

//all rains
const rains= document.querySelectorAll(".rain");
const getRandomNumber = (min, max)=>{
 return Math.floor(Math.random() * (max - min + 1) + min);
}
rains.forEach(rain=>{
    rain.style = `--rain-delay:${getRandomNumber(0, 1000)}ms`;
})

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

  function link() {
    var btn6 = document.getElementById("btn6");
    btn6.addEventListener("change", function () {
      if (btn6.checked == true) {
    
       document.getElementById('rain').style.visibility = 'visible';
      } else {
        document.getElementById('rain').style.visibility = 'hidden';
      
      }
 
    })
 
  }

  function trocarcor() {
    var btn5 = document.getElementById("btn5");
    btn5.addEventListener("change", function () {
      if (btn5.checked == true) {
        document.getElementsByTagName("body")[0].style.background = "#000000ef"
      } else {
        document.getElementsByTagName("body")[0].style.background = "#969696da"
      
      }
 
    })
 
  }

  function digital() {
    var btn4 = document.getElementById("btn4");
    btn4.addEventListener("change", function () {
      if (btn4.checked == true) {
        document.getElementById('clockDigital').style.visibility = 'visible';
        document.getElementById('clock').style.visibility = 'hidden';
      } else {
        document.getElementById('clockDigital').style.visibility = 'hidden';
        document.getElementById('clock').style.visibility = 'visible';
      }
 
    })
 
  }