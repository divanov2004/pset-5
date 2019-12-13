window.onload = function() {
    document.getElementById("hello-sample").onclick = sayHelloStaff;
    document.getElementById("rectangle-sample").onclick = drawRectangleStaff;
    document.getElementById("colored-rectangle-sample").onclick = drawColoredRectangleStaff;
    document.getElementById("triangle-sample").onclick = drawTriangleStaff;
    document.getElementById("smile-sample").onclick = drawFaceStaff;
    document.getElementById("pyramid-sample").onclick = drawPyramidStaff;

    // this is how we're connecting our buttons to our JavaScript functions. let's walk through it.
    //
    // document.getElementById("some-id")   <-- you need to give each button a unique ID
    //                                          and access it in this manner
    //
    // onclick is an event that is fired when you click something (in our case, a button).
    // when we give onclick a value, we're telling JavaScript what to do when we click the button.
    // you should set onclick equal to your function names (i.e., sayHello).
    //
    // there are six event listeners being added for the staff solutions. you'll have an
    // equivalent set of six event listeners for your solutions. the first one is done for you.

    document.getElementById("hello").onclick = sayHello;
    document.getElementById("rectangle").onclick = drawRectangle;
    document.getElementById("coloredRectangle").onclick = drawColoredRectangle;
    document.getElementById("triangle").onclick = drawTriangle;
    document.getElementById("smile").onclick = drawFace;
    document.getElementById("pyramid").onclick = drawPyramid;
}

/*
 * Exercise 1.
 */

const sayHello = function() {
  let canvas = document.getElementById("student-canvas-1");
  let context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);

  let message = prompt("Message: ")
  if (message == null) {
    return;
  }
  else {
    while (message.length > 50) {
      window.alert("Your message is too long. Keep it under 50 characters.")
      message = prompt("Message: ")
    }
  }
  context.font = "48px Sans-Serif";
  context.clearRect(0, 0, canvas.width, canvas.height)
  context.strokeText(message, 30, 70, 994);
};

/*
 * Exercise 2.
 */

const drawRectangle = function() {
  let canvas = document.getElementById("student-canvas-2");
  let context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  let width = prompt("Width: ")
  let height = prompt("Height: ")
  let xCoordinate = prompt("X: ")
  let yCoordinate = prompt("Y: ")
  if (width == null || height == null || xCoordinate == null || yCoordinate == null) {
    return;
  } else {
    while (width > canvas.width || width < 1 ) {
      window.alert("Your width must be between 1 and 1024.")
      width = prompt("Width: ")
      height = prompt("Height: ")
      xCoordinate = prompt("X: ")
      yCoordinate = prompt("Y: ")
      if (width == null || height == null || xCoordinate == null || yCoordinate == null) {
        return
      }
    }
    while (height > canvas.height || height < 1 ) {
      window.alert("Your height must be between 1 and 512.")
      width = prompt("Width: ")
      height = prompt("Height: ")
      xCoordinate = prompt("X: ")
      yCoordinate = prompt("Y: ")
      if (width == null || height == null || xCoordinate == null || yCoordinate == null) {
        return
      }
    }
    while (xCoordinate > 1024 || height < 1 ) {
      window.alert("Your x-coordinate must be between 1 and 1024.")
      width = prompt("Width: ")
      height = prompt("Height: ")
      xCoordinate = prompt("X: ")
      yCoordinate = prompt("Y: ")
      if (width == null || height == null || xCoordinate == null || yCoordinate == null) {
        return
      }
    }
    while (height > 512 || height < 1 ) {
      window.alert("Your y-coordinate must be between 1 and 512.")
      width = prompt("Width: ")
      height = prompt("Height: ")
      xCoordinate = prompt("X: ")
      yCoordinate = prompt("Y: ")
      if (width == null || height == null || xCoordinate == null || yCoordinate == null) {
        return
      }
    }
  }
  context.rect(xCoordinate, yCoordinate, width, height);
  context.clearRect(0, 0, canvas.width, canvas.height)
  context.stroke();
};

/*
 * Exercise 3.
 */

const drawColoredRectangle = function() {
  let canvas = document.getElementById("student-canvas-3");
  let context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  let enteredColor = prompt("Color: ");
  let stringColor = String(enteredColor)
  let color = stringColor.toLowerCase();
  if (enteredColor == null) {
    return;
  } else {
      while (color != "black" && color != "blue" && color != "green" && color != "orange" && color != "purple" && color != "red" && color != "yellow") {
        if (enteredColor == null) {
          return
      }
        window.alert(enteredColor + " is not a supported color.")
        enteredColor = prompt("Color: ");
        stringColor = String(enteredColor)
        color = stringColor.toLowerCase();
      }
      if (color == "black") {
        context.fillStyle = "black"
        context.fillRect(10, 10, 100, 50)
      } else if (color == "blue") {
        context.fillStyle = "blue"
        context.fillRect(10, 10, 100, 50)
      } else if (color == "green") {
        context.fillStyle = "green"
        context.fillRect(10, 10, 100, 50)
      } else if (color == "orange") {
        context.fillStyle = "orange"
        context.fillRect(10, 10, 100, 50)
      } else if (color == "purple") {
        context.fillStyle = "purple"
        context.fillRect(10, 10, 100, 50)
      } else if (color == "red") {
        context.fillStyle = "red"
        context.fillRect(10, 10, 100, 50)
      } else if (color == "yellow") {
        context.fillStyle = "yellow"
        context.fillRect(10, 10, 100, 50)
      }
  }
};

/*
 * Exercise 4.
 */

const drawTriangle = function() {
  let canvas = document.getElementById("student-canvas-4");
  let context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  let hypotheticalHypotenuse;
  do {
    var enteredFirstSide = (prompt("Side 1:"));
    var enteredSecondSide = (prompt("Side 2:"));
    var enteredThirdSide = (prompt("Side 3:"));
    var firstSide = Number(enteredFirstSide)
    var secondSide = Number(enteredSecondSide)
    var thirdSide = Number(enteredThirdSide)
    if (enteredFirstSide == null || enteredThirdSide == null || enteredThirdSide == null) {
      return;
    } else if (firstSide > 999 || secondSide > 999 || thirdSide > 999 || firstSide < 1 || secondSide < 1 || thirdSide < 1) {
      window.alert("That's not a valid right triangle.")
      firstSide = Number(prompt("Side 1:"));
      secondSide = Number(prompt("Side 2:"));
      thirdSide = Number(prompt("Side 3:"));
    } else {

    }
    hypotenuse = Math.max(firstSide, secondSide, thirdSide)
    height = Math.min(firstSide, secondSide, thirdSide)
    base = Math.sqrt((hypotenuse ** 2) - (height ** 2))
    hypotheticalHypotenuse = Math.sqrt((base ** 2) + (height ** 2))
  } while (hypotheticalHypotenuse !== hypotenuse)

  let heightCoordinate = 25 + height
  let baseCoordinate = 25 + base
  context.beginPath();
  context.moveTo(25, 25);
  context.lineTo(25, heightCoordinate);
  context.lineTo(baseCoordinate, heightCoordinate);
  context.lineTo(25, 25);
  context.stroke();
};

/*
 * Exercise 5.
 */

const drawFace = function() {
  const canvas = document.getElementById("student-canvas-5");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  do {
  var radius = (prompt("Radius: "))
  if (radius == null) {
    break;
  }
  if (radius < 32) {
    alert("Your radius must be at least 32.")
  }
  else if (isNaN(radius)) {
    alert("Your radius is not a number.")
  }
  else if (radius > 256) {
    alert("Your smiley face won't fit on the canvas.")
  }
} while (radius > 256 || isNaN(radius) || radius < 32)

var eyesRadius = 0.15 * radius
var mouthRadius = 0.7 * radius


ctx.beginPath();
ctx.arc(512, 256, radius, 0, 2 * Math.PI);
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.arc(512, 256, mouthRadius, 0, Math.PI);
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.arc(512 - 0.4 * radius, 256 - 0.4 * radius, eyesRadius, 0, 2 * Math.PI);
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.arc(512 + 0.4 * radius, 256 - 0.4* radius, eyesRadius, 0, 2 * Math.PI);
ctx.stroke();
ctx.closePath();

};

/*
 * Exercise 6 (extra credit).
 */

const drawPyramid = function() {
const canvas = document.getElementById("student-canvas-6");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  var distance = 0;
  var height = 0;
  var adjustDistance = 0;
  var adjustHeight = 0;
  var check = 5;
  var side;

  do {
      var side = prompt("Side: ")
      if (side == null) {
        break;
      }
      if (side < 1) {
        alert("Your block size must be at least 1.")
      }
      else if (side > 100) {
        alert("Your pyramid won't fit on the canvas.")
      }
      else if (isNaN(side)) {
        alert("Your block size is not a number.")
      }
    } while (isNaN(side) || side > 100 || side < 1)
    distance = Number(distance);
    height = Number(height);
    side = Number(side);
    for (x = 5; x > 0; x--) {
    check = x
    while(check >= 1) {
      ctx.beginPath();
      ctx.rect(10 + distance, (502 - side) - height, side,  side);
      ctx.stroke();
      ctx.closePath();
      distance = distance + side
      check--
    }
      adjustingDistance++
      distance = adjustingDistance * (1/2 * side)
      adjustingHeight++
      height = adjustingHeight * side
    }
};
