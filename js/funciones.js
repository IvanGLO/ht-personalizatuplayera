function cambiarPlayera(nombre) {
  document.getElementById("playera").src = "assets/playeras/" + nombre;
}

function colocarDiseno(nombre) {
  document.getElementById("diseno_img").src = "assets/disenos/" + nombre;
}

function moverCarrusel(direccion) {
  const carrusel = document.getElementById("carrusel");
  carrusel.scrollBy({
    left: direccion * 100,
    behavior: "smooth"
  });
}