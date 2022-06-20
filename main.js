let nombre = ""
let dni = 0
let dias = 0
let operacion = ""
let musculacion = 200
let funcional = 400
let crossfit = 500
let boxeo = 500
let resultado = 0
let nuevaOperacion = false


function pedirNombre() {
  nombre = prompt("Ingrese su nombre y apellido").toUpperCase();
  while (nombre === "" || !isNaN(nombre)) {
    nombre = prompt("Ingrese su nombre");
  }
}

pedirNombre();
alert(
  "Bienvenido al gimnasio del Hotel Palomo, " +
    nombre +
    ". Contamos con servicios por día para nuestros huéspedes. Sigue los pasos para elegir las opciones disponibles."
);

function pedirDni() {
  dni = prompt("Ingrese su número de documento");
  while (isNaN(parseInt(dni)) || dni.length < 7 || dni.length > 9) {
    dni = prompt(
      "Ingrese correctamente su número de documento. Debe ser un número entre 7 y 9 caracteres"
    );
  }
}

pedirDni();
alert("Su DNI ingresado es " + dni);





function calcularPrecio(valorPlan) {
    let mostrarResultado = dias * valorPlan
    return mostrarResultado
}

do {
    dias = Number (prompt("Ingresa la cantidad de días que deseas asistir al gimnasio. Exprésalo en dígitos."));
    operacion = prompt("¿Qué actividad deseas realizar? Musculación (M), Funcional (F), Crossfit (C) o Boxeo (B).")
    switch (operacion) {
        case "M":
            resultado = calcularPrecio(musculacion)
            alert("El costo por día es de 200 pesos. Abonarás" + " " + resultado + " " + "pesos.")
            break;
        case "F":
            resultado = calcularPrecio(funcional)
            alert("El costo por día es de 400 pesos. Abonarás" + " " + resultado + " " + "pesos.")
            break;
        case "C":
            resultado = calcularPrecio(crossfit)
            alert("El costo por día es de 500 pesos. Abonarás" + " " + resultado + " " + "pesos.")
            break;
        case "B":
            resultado = calcularPrecio(boxeo)
            alert("El costo por día es de 500 pesos. Abonarás" + " " + resultado + " " + "pesos.")
            break;
        default:
            alert("No elegiste ningún entrenamiento disponible")
            dias = 0
            operacion = ""
            break;
    }
    nuevaOperacion = confirm("Quieres realizar otra actividad?")
} while (nuevaOperacion);
alert ("Disfrutá de nuestro gimnasio. Saludos " + nombre)




