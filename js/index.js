var frutas = ["Guinda", "Pera", "Frutilla", "Sandia", "Melon", "Uva"];

var persona = {
  nombre: "Tomas",
  edad: 25,
  direccion: {
    calle: "11 oriente",
    numero: "#678",
  },
  estaCasado: true,
  estudios: ["basica", "media", "tecnico"],
};

var mascotas = [
  { nombre: "Terry", tipo: "Perro", peso: 3.5 },
  { nombre: "Boby", tipo: "Perro", peso: 3.5 },
  { nombre: "Nala", tipo: "Gato", peso: 3.5 },
  { nombre: "Steve", tipo: "Perro", peso: 3.5 },
  { nombre: "Jonny", tipo: "Gato", peso: 3.5 },
  { nombre: "Mike", tipo: "Perro", peso: 3.5 },
  { nombre: "Terry", tipo: "Gayo", peso: 3.5 },
];
//ejecutar la funcion
cargaFrutas();
cargaPersona();

//creacion de la funcion
function cargaFrutas() {
  var caja = document.getElementById("caja-frutas");

  caja.innerHTML = "<h3>Mis Frutas</h3> <ul>";
  frutas.forEach((item) => {
    caja.innerHTML += "<li>" + item + "</li>";
  });
  caja.innerHTML += "</ul>";
}

function cargaPersona() {
  var caja = document.getElementById("caja-persona");
  caja.innerHTML = "<h3>Datos Personales</h3><br>";
  caja.innerHTML += persona.nombre + "<br>";
  caja.innerHTML += persona.edad + " años<br>";
  caja.innerHTML += persona.direccion.calle + "<br>";

  if (persona.estaCasado) {
    caja.innerHTML += "Casado<br>";
  } else {
    caja.innerHTML += "Soltero<br>";
  }
  caja.innerHTML += "Estudios<br>";
  persona.estudios.forEach((item) => {
    caja.innerHTML += "<li>" + item + "</li>";
  });
}
