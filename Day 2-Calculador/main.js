

//Dark Mode//

var toggleButton = document.getElementById("toggleButton");

toggleButton.onclick = function() {
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
    toggleButton.src = "img/sun.png";
  } else{
    toggleButton.src = "img/moon.png";
  }
}


//Canculator//

function Solve(val) {
   var v = document.getElementById('text');
   v.value += val;
}
function Result() {
   var num1 = document.getElementById('text').value;
   var num2 = eval(num1);
   document.getElementById('text').value = num2;
}
function Clear() {
   var inp = document.getElementById('text');
   inp.value = '0';
}
function Back() {
   var ev = document.getElementById('text');
   ev.value = ev.value.slice(0,-1);
}



