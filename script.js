console.log("probando")

const canvas = document.querySelector("#my-canvas");
const ctx = canvas.getContext("2d")
// ctx es TODA nuestra paleta de acciones sobre el canvas
// nos permite dibujar, trazar, cambiar colores, etc.

canvas.style.backgroundColor = "lightgray"

// si no empieza en H, termina en H
// si empieza en H, no termina en H
// length
// width
// height


// metodos y propiedades para FILL => rellenos cuadriculados

// dibujar un rectangulo relleno
ctx.fillRect(40, 40, 30, 30)
// 1. Posición en el eje X
// 2. Posición en el eje Y
// 3. Ancho de el rectangulo
// 4. Alto de el rectangulo

// cambiar colores de rellenos
ctx.fillStyle = "green";
ctx.fillRect(40, 100, 100, 20)

ctx.fillStyle = "blue";
ctx.fillRect(45, 105, 100, 20)


// borrar una sección del canvas
ctx.clearRect(55, 100, 50, 50)
// 1. Posición en el eje X
// 2. Posición en el eje Y
// 3. Ancho de el borrado
// 4. Alto de el borrado

// propiedades y metodos de trazado

// cambiar color de trazado
ctx.strokeStyle = "red";

// dibujar trazados cuadriculados
ctx.strokeRect(50, 130, 50, 50)


ctx.strokeStyle = "brown"

// metodos de trazados complejos

ctx.beginPath() // aqui empieza un trazado

ctx.moveTo(50, 200) // mueve el cursor a este punto (posX, posY)
ctx.lineTo(60, 220) // desde el punto anterior, traza a este punto (posX, posY)
ctx.lineTo(40, 210)
ctx.lineTo(40, 240)
ctx.lineTo(30, 180)

ctx.moveTo(100, 200)
ctx.lineTo(120, 210) 

ctx.stroke() // llamada de acción. realiza el trazado siguiente los metodos anteriores

ctx.closePath() // aqui termina el trazado




//* propiedades y metodos de arcos (circulos y circunferencias)

ctx.beginPath() // aqui empieza un trazado

ctx.arc( 100, 300, 40, 0, 1.5 * Math.PI, false )
// 1. posición central de la circunferencia X
// 2. posición central de la circunferencia Y
// 3. radio de la circunferencia
// 4. Angulo donde empieza el trazado
// 5. Angulo donde termina el trazado
// angulos son: 0, 0.5 X PI, 1 * PI, 1.5 * PI, 2 * PI
// 6. (opcional) es contrareloj o a favor de reloj (false predeterminado)

ctx.lineTo(100, 300)
ctx.lineTo(140, 300)

// rellenar el trazado que acabo de realizar
ctx.fillStyle = "yellow"
ctx.fill()



ctx.stroke() // llamada de acción. realiza el trazado siguiente los metodos anteriores
ctx.closePath() // aqui termina el trazado

// ojo de pacman
ctx.beginPath()
ctx.arc( 85, 283, 5, 0, 2 * Math.PI, false )
ctx.fillStyle = "black"
ctx.stroke() 
ctx.fill()
ctx.closePath()


ctx.beginPath()

ctx.moveTo(150, 200)
ctx.lineTo(150, 250)
ctx.lineTo(200, 200)
ctx.lineTo(150, 200)

ctx.stroke() 
ctx.fill()

ctx.closePath()


// Images

let imagen = new Image()
imagen.src = "https://tinyurl.com/ironhack-pokemons/25.svg";

// metodo para dubujar imagenes en canvas
// ctx.drawImage(imagen, 100, 400, 100, 100) // o agregamos 2 valores de dimensiones
// ctx.drawImage(imagen, 100, 400) // o no agregamos dimensiones y toma el original de la imagen
// 1. la image
// 2-5. los mismos que dibujar un cuadrado

// para prevenir que la imagen no se haya recibo al momento de dibujarla.
imagen.addEventListener("load", () => {
  // ejemplo para primero asegurarnos de recibir la imagen antes de pintarla
  ctx.drawImage(imagen, 100, 400, 100, 120)
})

// tambien podemos agregar textos => Self-guided



//* Recursion

let control = 0;

function printSomething() {
  console.log("ejecutando recursion")
  control++

  if (control < 1000) {
    printSomething() // volver a ejecutar la misma funcion
  }
}

// printSomething()

// for (let i = 0; i < 1000; i++) {
//   console.log("ejecutando bucle for")
// }

// ejemplo de recursion para crear animaciones

// let controlAnimation = 0;
let posicionXCubito = 50;

function animarCubo() {
  // controlAnimation++
  console.log("Intentando animar un cubo")
  // 1. tengo que limpiar el canvas
  ctx.clearRect(0, 550, 400, 50)
  
  // 2. modificar la posición de el elemento
  posicionXCubito += 10
  
  // 3. dibujamos los elementos
  ctx.fillRect(posicionXCubito, 550, 30, 30)
  
  // 4. recursion
  if (posicionXCubito < 300) {
    // animarCubo()
    // requestAnimationFrame => metodo que nos permite generar recursion a una velocidad optimizada para la pantalla
    requestAnimationFrame(animarCubo) // analiza el FPS del la pantalla => ejecuta la funcion 60 veces por segundo.
  }

}

animarCubo()