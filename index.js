for(var a=0;a<document.querySelectorAll(".drum").length;a++)
{
  document.querySelectorAll(".drum")[a].addEventListener("click", function() {
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
}

// //based on the key pressed.
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

//function for making sound on the basis of key pressed or button pressed.
function makeSound(key){
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var crashAudio = new Audio("sounds/crash.mp3");
      crashAudio.play();
      break;
    case "k":
      var kickAudio = new Audio("sounds/kick-bass.mp3");
      kickAudio.play();
      break;
    case "l":
      var snareAudio = new Audio("sounds/snare.mp3");
      snareAudio.play();
      break;
    default: console.log(key);
}
}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100)
}
