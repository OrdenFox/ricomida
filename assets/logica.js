/*
let inventario = [
 
    { titulo: 'Harry Potter', cantidad: 50, precio: 10000 },
    { titulo: 'Aprenda de Negocios', cantidad: 5, precio: 5000 },
    { titulo: 'Cocina facil', cantidad: 45, precio: 12000 },
    { titulo: 'Programación', cantidad: 10, precio: 20000 },
];
//funcion para buscar producto en inventario
function buscarProducto(producto) {
 
    for (let i = 0; i < inventario.length; i++) {
 
        if(inventario[i].titulo.toLocaleLowerCase() === producto.toLocaleLowerCase())
 
            return inventario[i]
        }
 
        throw new error('El libro no existe');
}
 
// funcion para actualizar cantidad en el inventario
 
function actualizarCantidad(producto_argumento, nuevaCantidad){
 
        try{
 
            let producto = buscarProducto (producto_argumento);
            producto.cantidad = nuevaCantidad;
            console.log("Cantidad de " + producto.titulo +' actualizada a '+producto.cantidad);
 
        }catch(error){
 
           console.log("Error : ", error.message);
 
        }
}
//ejemplo de uso
 
try{
 
    actualizarCantidad('Harry Potter', 25);
    actualizarCantidad('Programacion', 15);
    actualizarCantidad('Steve Job', 10);
 
}catch (e){
 
    console.log("error: ", error.message);
}
 
console.log("Inventario actualizado", inventario);

//inventario
let Alumnos = [
    {nombre: 'Pedro', calificaciones: [1,2,3]},
    {nombre:'Juan', calificaciones:[4,5,6]},
    {nombre:'Diego', calificaciones:[7,6,5]}
] 
//funcion para buscar inventario

function nuevaCalificacion (notas) {
    
for (let i = 0; i < Alumnos.length; i++) {
    
if(Alumnos[i].nombre.toLocaleLowerCase() === notas.toLocaleLowerCase())

return Alumnos[i]
}

throw new error('El Alumno no existe');
}

//funcion Actualizar Calificacion
function actualizarCaLificacion(alumno_argumento, nuevaCalificacion){
    
try{
    
let Alumnos = buscarAlumno (alumno_argumento);
Alumnos.calificaciones = nuevaCalificacion;
console.log("Calificacion de " + Alumnos.nombre +' actualizada a '+Alumnos.calificaciones);

}catch(error){
    
console.log("Error : ", error.message);

}
}

//
try{
    
actualizarCaLificacion('Pedro', 9);
actualizarCaLificacion('Juan', 9);
actualizarCaLificacion('Diego', 9);

}catch (e){
    
console.log("error: ", error.message);
}

console.log("Calificaciones Actualizadas", Alumnos);
*/

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
 
 
 
añadirNota("alfonso", 2);
console.log(estudiantes)