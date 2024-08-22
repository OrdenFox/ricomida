var estudiantes = [
    { nombre: "Diego", calificaciones: [3, 5, 2] },
    { nombre: "Alfonso", calificaciones: [7, 5, 6] },
    { nombre: "Maria", calificaciones: [5, 5, 3] },
]; 

function buscarEstudiante(producto){
    for(var i = 0; i < estudiantes.length; i++ ){
        if (estudiantes[i].nombre.toLocaleLowerCase() === producto.toLocaleLowerCase()){
            return estudiantes[i];
        } 
    }
    throw new Error("El estudiante no existe!")
}

function añadirNota(estudiante_b, nuevaNota){
    try {
        var producto = buscarEstudiante(estudiante_b);
        producto.calificaciones.push(nuevaNota);
        console.log("Se le añadio esta nota: " + nuevaNota + " a " + estudiante_b);
    } catch (error) { 
        console.error("Error : ", error.message);
    }
}

function Promedio(estudiante_c, estudiante_d, estudiante_e){
    try {
        var producto = buscarEstudiante(estudiante_c);
        var calificaciones = producto.calificaciones
        var suma = 0;

        for(var i = 0; i < calificaciones.length; i++ ){
            suma += calificaciones[i];
        }
        
        var promedio = suma / calificaciones.length;
        console.log("El promedio de " + estudiante_c + " es " + promedio)
    } catch (error) { 
        console.error("Error : ", error.message);

    }
}

añadirNota("alfonso", 2);
Promedio("Diego");
console.log(estudiantes)