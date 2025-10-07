function cambiarPlayera(nombre, elemento) {
  // Cambia la imagen
  document.getElementById("playera").src = "assets/playeras/" + nombre;

  // Quita la clase "selected" de todos los elementos similares
  document.querySelectorAll(".color").forEach(el => {
    el.classList.remove("selected");
  });

  // Agrega la clase "selected" al elemento que llamó la función
  elemento.classList.add("selected");
}

function cambiarTalla(talla, elemento) {
  // Cambia la imagen
  document.getElementById("lbl-sel-talla").textContent = "Talla: " + talla;

  // Quita la clase "selected" de todos los elementos similares
  document.querySelectorAll(".talla").forEach(el => {
    el.classList.remove("selected");
  });

  // Agrega la clase "selected" al elemento que llamó la función
  elemento.classList.add("selected");
}

function colocarDiseno(nombre, elemento) {
  //Cambiamos el diseño en el preview

  document.getElementById("diseno_img").src = elemento.src;
  document.getElementById("lbl-sel-img").textContent = "Dibujo: " + nombre.replace(".png","");

  document.querySelectorAll(".diseno").forEach(el => {
    el.classList.remove("selected");
  });

  // Agrega la clase "selected" al elemento que llamó la función
  elemento.classList.add("selected");
}

function cambiarCategoria(cat, elemento) {
  //Cambiamos el diseño en el preview

  document.querySelectorAll(".cat").forEach(el => {
    el.classList.remove("selected");
  });

  // Agrega la clase "selected" al elemento que llamó la función
  elemento.classList.add("selected");
}

function moverCarrusel(direccion) {
  const carrusel = document.getElementById("carrusel");
  carrusel.scrollBy({
    left: direccion * 100,
    behavior: "smooth"
  });
}