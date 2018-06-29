var button = document.getElementById('button'); //the button is the thing we want to manipulate so we must place it in the  ()

var rainbow = ["red","orange","yellow","green","blue","indigo","violet","black","white"];  // we are creating a variation of color which will later be put into play by activate var button

function change() {  // change function allowing change to happen and being applied to the body as you can see below document.body.style.background
  document.body.style.background = rainbow[Math.floor(9*Math.random())]; // allowing for random sequences to occur the 9*math shows that their are 9 objects to sort through

}
button.addEventListener("click",change);  //so when we click it will change
