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

  document.getElementById("diseno_img").src = elemento.src.replace("/min/","/350px/");
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

  //ocultar los demas
  const categorias = ['01','02','03','04','05','06','07']; 
  categorias.forEach(c => {
    if(c !== cat) {
      document.getElementById("carrusel"+c).style.display = "none";
    }
  });

  //mostrar el carrusel correspondiente
  document.getElementById("carrusel"+cat).style.display = "flex";

  // Agrega la clase "selected" al elemento que llamó la función
  elemento.classList.add("selected");

  //seleccionamos la primer imagen de este carrusel
  const primerDiseno = document.querySelector("#carrusel"+cat+" img.diseno");
  if(primerDiseno) {
    colocarDiseno(primerDiseno.src.split('/').pop(), primerDiseno);
  }
}

// function moverCarrusel(direccion) {
//   const carrusel = document.getElementById("carrusel");
//   carrusel.scrollBy({
//     left: direccion * 100,
//     behavior: "smooth"
//   });
// }