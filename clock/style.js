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

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


function trocarcor(id) {
  if (id == "azul") {
      document.getElementsByTagName("body")[0].style.background = "#000000ef"
      //document.querySelectorAll(".agua")[1].style.background = "rgb(0 153 255 / 15%)" esta dando erro atualizar o github esta com esse erro
  }
  else if(id == "white"){ document.getElementsByTagName("body")[0].style.background = "#969696da"}

  
  console.log(id)}