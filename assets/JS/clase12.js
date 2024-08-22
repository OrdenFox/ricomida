/* try - catch */
/*
function convertir(cadena) {
  let numero = Number(cadena);
  if (isNaN(numero)) {
    throw new Error("La conversión falló: no es un número válido");
  }
  return numero;
}

function dividir(a, b) {
  if (a === 0 || b === 0) {
    throw new Error("No se puede dividir por cero");
  }
  return a / b;
}

function ejecutar() {
  try {
    console.log(dividir(5, 0));
  } catch (error) {
    document.write("Error : ", error.message);
  }
}

ejecutar();
console.log("Sigue la ejecución");
*/
/*
let perro = {
  nombre: "Skipper",
  edad: 3,
  raza: "Golden Retriever",
  ladrar: function () {
    return (
      "guao guao guao, me llamo " +
      this.nombre +
      " y tengo " +
      this.edad +
      " años!"
    );
  },
};

document.write(perro.raza, "<br>");
document.write(perro.ladrar());
*/
/*
// Arreglo que contiene objetos
let inventario = [
  { titulo: "Harry Potter", cantidad: 50, precio: 10000 },
  { titulo: "Aprenda de Negocios", cantidad: 5, precio: 5000 },
  { titulo: "Cocina facil", cantidad: 45, precio: 12000 },
  { titulo: "Programacion", cantidad: 10, precio: 20000 },
];

// funcion para buscar producto en inventario
function buscarProducto(producto) {
  for (let i = 0; i < inventario.length; i++) {
    if (
      inventario[i].titulo.toLocaleLowerCase() === producto.toLocaleLowerCase()
    ) {
      return inventario[i];
    }
  }
  throw new Error("El Libro no existe.!");
}

// funcion para actualizar cantidad en inventario
function actualizarCantidad(mario, nuevaCantidad) {
  try {
    let producto = buscarProducto(mario);
    producto.cantidad = nuevaCantidad;
    console.log(
      "Cantidad de " + producto.titulo + " actualizada a " + producto.cantidad
    );
  } catch (error) {
    console.log("Error :", error.message);
  }
}

console.log("Inventario actual", inventario);
// Ejemplo de uso
try {
  actualizarCantidad("Harry Potter", 250);
  actualizarCantidad("Programacion", 150);
  actualizarCantidad("Steve Job", 10);
} catch (e) {
  console.log("Error :", e.message);
}

console.log("Inventario actualizado", inventario);
*/
// Array de estudiantes
let estudiantes = [
  { nombre: "Carlos", calificaciones: [85, 90, 78] },
  { nombre: "Ana", calificaciones: [92, 88, 84] },
  { nombre: "Luis", calificaciones: [70, 75, 80] },
];

// Función para agregar una calificación a un estudiante
function agregarCalificacion(nombre, calificacion) {
  try {
    if (
      typeof calificacion !== "number" ||
      calificacion < 0 ||
      calificacion > 100
    ) {
      throw new Error("Calificación no válida");
    }

    let estudiante = estudiantes.find(
      (e) => e.nombre.toLowerCase() === nombre.toLowerCase()
    );
    if (!estudiante) {
      throw new Error("Estudiante no encontrado");
    }

    estudiante.calificaciones.push(calificacion);
    console.log(
      `Calificación de ${calificacion} añadida a ${estudiante.nombre}.`
    );
  } catch (error) {
    console.log("Error:", error.message);
  }
}

// Función para calcular el promedio de calificaciones
function calcularPromedio(nombre) {
  try {
    let estudiante = estudiantes.find(
      (e) => e.nombre.toLowerCase() === nombre.toLowerCase()
    );
    if (!estudiante) {
      throw new Error("Estudiante no encontrado");
    }

    let suma = 0;
    for (let i = 0; i < estudiante.calificaciones.length; i++) {
      suma += estudiante.calificaciones[i];
    }
    let promedio = suma / estudiante.calificaciones.length;
    console.log(
      `El promedio de ${estudiante.nombre} es ${promedio.toFixed(2)}.`
    );
  } catch (error) {
    console.log("Error:", error.message);
  }
}

// Ejemplo de uso
agregarCalificacion("Carlos", 88); // Añade una nueva calificación a Carlos
agregarCalificacion("Ana", 105); // Calificación no válida, lanza un error
calcularPromedio("Luis"); // Calcula y muestra el promedio de Luis
calcularPromedio("Pedro"); // Estudiante no encontrado, lanza un error
