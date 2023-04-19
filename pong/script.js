console.log("probando juego de pong");

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 800;
canvas.style.backgroundColor = "black";

//* variables globales
let ballX = 50;
let ballY = 50;
let isBallMovingRight = true;
// true muevela a la derecha
// false muevela a la izquierda
let isBallMovingDown = true;

let paddleX = 200;
let paddleY = 700;
let paddleW = 150;
let paddleH = 30;

let isGameOn = true;

//* seccion de funciones
const ballDraw = () => {
  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.arc(ballX, ballY, 15, 0, 2 * Math.PI)
  ctx.fill()
  ctx.closePath()
}

const ballMove = () => {
  if (isBallMovingRight === true) {
    // condicionamos el movimiendo de la pelotita
    ballX += 2; // hacia la derecha
  } else {
    ballX -= 2; // hacia la izquierda
  }

  if (isBallMovingDown === true) {
    ballY += 2; // hacia abajo
  } else {
    ballY -= 2; // hacia arriba
  }
}

const clearCanvas = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}

const ballWallCollision = () => {
  // quiero que esto se verifique siempre
  if (ballX > canvas.width) {
    // console.log("la pelotita llegó al final derecha")
    // determinar que la pelotita ha cambiado su direccion
    // ballX -= 20
    isBallMovingRight = false;
  } else if (ballY > canvas.height) {
    // console.log("la pelotita llegó al final abajo")
    // isBallMovingDown = false;
    // ! aqui vamos a detener el juego
    isGameOn = false;
    alert("Has perdido!")
  } else if (ballX < 0) {
    // console.log("la pelotita llegó al final izquierda")
    isBallMovingRight = true;
  } else if (ballY < 0) {
    // console.log("la pelotita llegó al final arriba")
    isBallMovingDown = true;
  }
}

const paddleDraw = () => {
  ctx.fillRect(paddleX, paddleY, paddleW, paddleH)
}

const paddleMove = (event) => {
  // esto ocurre cuando presionamos cualquier tecla
  console.log("presionando una tecla", event.code)
  if (event.code === "ArrowLeft") {
    // quiero mover el paddle hacia la izquierda
    paddleX -= 20;
  } else if (event.code === "ArrowRight") {
    // quiero mover el paddle hacia la derecha
    paddleX += 20;
  }
}

const ballPaddleCollision = () => {

  // ballX
  // ballY

  // paddleX
  // paddleY

  // paddleW
  if (ballY > paddleY && ballX > paddleX && ballX < (paddleX + paddleW)) {
    console.log("la pelotita colisiona con la paleta")
    isBallMovingDown = false; // ahora mueve la pelotita hacia arriba

  }

}

//* function de recursion
const gameLoop = () => {
  // console.log("ejecutando recursion")
  // console.log(ballX, ballY)
  // 1. Limpieza del canvas
  clearCanvas()

  // 2. Movimientos y acciones de los elementos
  ballMove()
  ballWallCollision() // siempre verificamos si esto ocurre
  ballPaddleCollision() // siempre verificamos si esto ocurre

  // 3. Dibujado de los elementos
  ballDraw()
  paddleDraw()

  // 4. Recursion
  if (isGameOn === true) {
    requestAnimationFrame(gameLoop)
  }
  // si es false, se detiene la recursion.

}

//* addEventListeners
window.addEventListener("keydown", paddleMove)

// cuando inicie la pagina, inicia el juego
gameLoop()


// Paleta no deberia salir del canvas.
// tomar en cuenta el radio de la pelota para las colisiones.
// pulir la velocidad del juego.

// BONUS
// - addEventListener para pausar el juego cambiando isGameOn
//    - O que en vez de pausar, reinicie el juego.
// - que la paleta cambie ambas direcciones de la pelot. (o que sea aletorio)
// - crear texto y agregarlo sobre la paleta.
// - Cambiar los adeventlistener a que sea clicks derecho o izquierdo del raton.
// - podrian tener un h1 fuera del canvas y cada vez que colisiona la pelotita con la paleta, suma puntos.
// - que la velocidad de la pelotita aumente cuando colisiona
// - Que la paleta disminuya su tamaño cuando colisione.

// MEGABONUS
// - Segunda paleta arriba que se mueve con otras teclas.
// - Mejorar la movilidad de la paleta
//    - La paleta se mueva de forma automatica Izquiera o Derecha y con las teclas, cambiamos la dirección.
// - Obstaculos que colisionen con la pelota.
