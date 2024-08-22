$().ready(function () {
    $("#tablaUsuarios").DataTable({
      ajax: "./data/usuarios.txt",
      columns: [
        { data: "nombre" },
        { data: "apellido" },
        { data: "edad" },
        { data: "email" },
      ],
    });
  });
  