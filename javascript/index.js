started = false;
level = 1;
var myVar;
mybutton = document.getElementById("mybtn");
// MAIN GAME

var ballcolor;
var pincolor;
var num = 0;
var miss = 0;
var oldpin;
var oldball;

pincolor = guess();
pincolorfunction(pincolor);
myVar = setInterval(function() {

  ballcolor = guess();
  randomColor(ballcolor);

  while (oldball === ballcolor) {
    ballcolor = guess();
    randomColor(ballcolor);
  }
  if (pincolor === ballcolor) {
    ++miss;
  }
  if (miss > 3) {
    wrong();
    myStopFunction();
    mybutton.style.display = "block";
  }
  // DETECT CLICK

  $(".pin-icon").click(function() {
    if (miss > 3) {
      wrong();
      myStopFunction();
      mybutton.style.display = "block";
    }
    if (num === 0) {
      if (pincolor == ballcolor) {
        sound("red");
        $("h3").text(level);
        level = level + 1;
        oldpin = pincolor;
        while (pincolor == oldpin) {
          pincolor = guess();
          pincolorfunction(pincolor);
        }
        miss = 0;
        console.log("success");
      } else if (pincolor != ballcolor) {
        wrong();
        myStopFunction();
        mybutton.style.display = "block";
      }
      ++num;
    }
  });

  // DETECT keypress

  $(document).keypress(function() {

    if (miss > 3) {
      wrong();
      myStopFunction();
      mybutton.style.display = "block";
    }
    if (num === 0) {
      if (pincolor == ballcolor) {
        sound("red");
        $("h3").text(level);
        level = level + 1;
        oldpin = pincolor;
        while (pincolor == oldpin) {
          pincolor = guess();
          pincolorfunction(pincolor);
        }
        miss = 0;
      } else if (pincolor != ballcolor) {
        wrong();
        myStopFunction();
        mybutton.style.display = "block";
      }
      ++num;
    }

  });

  oldball = ballcolor;
  num = 0;
  if (miss === 3) {
    wrongMiss();
    myStopFunction();
    mybutton.style.display = "block";
  }
}, 1000 - (level * 350));


function myStopFunction() {
  clearInterval(myVar);
}

// GIVES YOU A RANDOM NUMBER

function guess() {
  var random = Math.random() * 6;
  random = (Math.floor(random));
  return random;
}

// RANDOM COLOR CHOOSING

function randomColor(color) {
  if (color === 0) {
    $(".ball-icon").css("color", "red");
  } else if (color === 1) {
    $(".ball-icon").css("color", "yellow");
  } else if (color === 2) {
    $(".ball-icon").css("color", "blue");
  } else if (color === 3) {
    $(".ball-icon").css("color", "green");
  } else if (color === 4) {
    $(".ball-icon").css("color", "orange");
  } else if (color === 5) {
    $(".ball-icon").css("color", "purple");
  }
}

function pincolorfunction(color) {
  if (color === 0) {
    $(".pin-icon").css("color", "red");
  } else if (color === 1) {
    $(".pin-icon").css("color", "yellow");
  } else if (color === 2) {
    $(".pin-icon").css("color", "blue");
  } else if (color === 3) {
    $(".pin-icon").css("color", "green");
  } else if (color === 4) {
    $(".pin-icon").css("color", "orange");
  } else if (color === 5) {
    $(".pin-icon").css("color", "purple");
  }

}

// WHEN THE ANSWER IS WRONG

function wrong() {
  $("h3").text("You lost");
  $("h1").text("Your score = " + (level - 1));
  sound("wrong");
  level = 1;
}

function wrongMiss() {
  $("h3").text("You lost because you left the ball more than 2 times");
  $("h1").text("Your score = " + (level - 1));
  sound("wrong");
  level = 1;
}




// PLAYSOUND

function sound(name) {
  if (num == 0) {
    var audio = new Audio("Sounds/" + name + ".mp3");
    audio.play();
  } else {
    var audio = new Audio("Sounds/" + name + ".mp3");
    audio.play();
  }
}

function reload(){
   window.location.reload();
}
