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

// rellenar el trazado que acabo de realizar
ctx.fillStyle = "yellow"
ctx.fill()

ctx.stroke() // llamada de acción. realiza el trazado siguiente los metodos anteriores
ctx.closePath() // aqui termina el trazado