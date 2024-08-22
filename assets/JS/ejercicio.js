let salir = false;
while (!salir) {
  let opcion = parseInt(
    prompt(
      "Bienvenidos\n1) Boletas y Pagos\n2) Señal y Llamadas\n3) Oferta Comercial\n4) Otras Consultas\n5) Salir"
    )
  );
  switch (opcion) {
    case 5:
      alert("Gracias por preferir nuestros servicios!");
      salir = true;
      break;
    case 4:
      break;
    case 3:
      opcionTres();
      break;
    case 2:
      opcionDos();
      break;
    case 1:
      opcionUno();
      break;
    default:
      alert("Ingrese una opción válida! (1-5)");
  }

  function opcionUno() {
    let subMenu = false;
    while (!subMenu) {
      let opcion = parseInt(
        prompt("Seleccione una opción\n1) Ver Boleta\n2) Pagar cuenta")
      );
      switch (opcion) {
        case 2:
          alert("Usted está siendo transferido. Espere por favor...");
          subMenu = true;
          break;
        case 1:
          alert("Haga click para descargar su boleta");
          subMenu = true;
          break;
        default:
          alert("Ingrese una opción válida! (1-2)");
      }
    }
  }
  function opcionDos() {
    let subMenu = false;
    while (!subMenu) {
      let opcion = parseInt(
        prompt(
          "Seleccione una opción\n1) Problemas con la señal\n2) Problemas con las llamadas"
        )
      );
      switch (opcion) {
        case 2:
        case 1:
          let mensaje = leeMensaje("A continuación escriba su solicitud");
          alert(
            "Estimado usuario, su solicitud: " +
              mensaje +
              " Ha sido ingresadsa con éxito. Pronto será contactado por uno de nuestros ejecutivos"
          );
          subMenu = true;
          break;
        default:
          alert("Ingrese una opción válida! (1-2)");
      }
    }
  }
  function leeMensaje(texto) {
    let mensaje = prompt(texto);
    return mensaje;
  }
  function opcionTres() {
    let mensaje = leeMensaje(
      "Escriba SI para ser contactado, de lo contrario NO"
    );
    if (mensaje.toUpperCase() == "SI") {
      alert("un ejecutivo contactará con usted...");
    } else {
      alert("Gracias por preferir nuestros servicios!");
    }
  }
}
/*

let valores = [10, 8, 5, 9, 20, 4, 6]; // Vector de valores

function par(numero) {
  // Funcion que evalua si un numero es par
  if (numero % 2 === 0) {
    return true;
  }
  return false;
}

for (let i = 0; i < valores.length; i++) {
  if (par(valores[i])) {
    console.log("Valor Par", valores[i]);
  } else {
    console.log("Valor ImPar", valores[i]);
  }
}
*/
/*
if () {
  
} else if () {
  
} else if () {
  
} else {
  
}

switch () {
  case valor posible:
    codigo
    break;
  case valor posible:
    codigo
    break;
}

let salir = "salir";
do {
  let nota = prompt("Ingresa la nota");
  if (nota == "salir") {
    salir = nota;
  } else if (nota < 4) {
    alert("Deficiente");
  } else if (nota >= 4 && nota < 5) {
    alert("Suficiente");
  } else if (nota >= 5 && nota < 6) {
    alert("Notable");
  } else {
    alert("Sobresaliente");
  }
} while (salir != "salir");
*/
/*
let salir = "";
let suma = 0;
let cantidadNumeros = 0;
let promedio = 0;
while (salir != "salir") {
  let numero = prompt("Ingresa la numero: ");
  if (numero == "salir") {
    salir = numero;
  } else {
    suma += parseInt(numero);
    cantidadNumeros++;
  }
  promedio = suma / cantidadNumeros;
}
document.write("La suma de los numeros es " + suma);
document.write("Cantidad de numeros ingresados : " + cantidadNumeros);
document.write("El promedio de los numeros es " + promedio.toFixed(2));
*/
