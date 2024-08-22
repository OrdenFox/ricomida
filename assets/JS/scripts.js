let notas_a = [92, 88, 12, 77, 57, 100, 67, 38, 97, 89, 56];
let notas_b = [45, 87, 98, 100, 86, 94, 67, 74, 53, 95, 100];

function promedio(notas) {
  let promedio = 0;
  for (let i = 0; i < notas.length; i++) {
    promedio += notas[i];
  }
  return (promedio /= notas.length);
}

console.log("Valor del promedio Sala A " + promedio(notas_a).toFixed(2));
console.log("Valor del promedio Sala B " + promedio(notas_b).toFixed(2));

/*
let nota = parseInt(prompt("Indique la nota del alumno : "));
var nota_cadena = nota.toString();
console.log(nota_cadena);
*/
function obtenerGrado(nota) {
  let grado = "";
  if (nota === 100) {
    grado = "A++";
  } else if (nota >= 90 && nota <= 99) {
    grado = "A";
  } else if (nota >= 80 && nota <= 89) {
    grado = "B";
  } else if (nota >= 70 && nota <= 79) {
    grado = "C";
  } else if (nota >= 60 && nota <= 69) {
    grado = "D";
  } else {
    grado = "F";
  }
  return grado;
}
console.log("Grado del Alumno ", obtenerGrado(85));
console.log("Grado del Alumno ", obtenerGrado(56));
console.log("Grado del Alumno ", obtenerGrado(65));
console.log("Grado del Alumno ", obtenerGrado(75));

console.log(Math.PI);
/*
switch (true) {
  case nota === 100:
    console.log("Aprobado con A++");
    break;
  case nota >= 90 && nota <= 99:
    console.log("Aprobado con A");
    break;
  case nota >= 80 && nota <= 89:
    console.log("Aprobado con B");
    break;
  case nota >= 70 && nota <= 79:
    console.log("Aprobado con C");
    break;
  default:
    console.log("Reprobado con F");
}
*/
