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

function colocarDisenoOld(nombre, elemento) {
  //Cambiamos el diseño en el preview

  document.getElementById("diseno_img").src = elemento.src.replace("/min/","/350px/");
  document.getElementById("lbl-sel-img").textContent = "Dibujo: " + nombre.replace(".png","");

  document.querySelectorAll(".diseno").forEach(el => {
    el.classList.remove("selected");
  });

  // Agrega la clase "selected" al elemento que llamó la función
  elemento.clas
  sList.add("selected");
}


function colocarDiseno(nombre, elemento) {
  const imgPreview = document.getElementById("diseno_img");
  const loader = document.getElementById("loader");

  //Ocultamos la imagen actual mientras carga la nueva
  imgPreview.style.opacity = "0";

  // Mostrar el loader
  loader.style.display = "block";

  // Cambiar el diseño en el preview
  const nuevaSrc = elemento.src.replace("/min/", "/350px/");
  imgPreview.onload = () => {
    
    //mostramos la imagen
    imgPreview.style.opacity = ".8";

    // Ocultar el loader cuando la imagen haya cargado
    loader.style.display = "none";
  
    //Pruebas
    // setTimeout(() => {
    //     loader.style.display = "none";
    //     imgPreview.style.opacity = ".8";
    //   },2000);
    
  };

  imgPreview.onerror = () => {
    // Ocultar el loader si hay error al cargar
    loader.style.display = "none";
    console.error("Error al cargar la imagen:", nuevaSrc);
  };

  imgPreview.src = nuevaSrc;
  document.getElementById("lbl-sel-img").textContent = "Dibujo: " + nombre.replace(".png", "");

  document.querySelectorAll(".diseno").forEach(el => {
    el.classList.remove("selected");
  });

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


document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("loadingModal");
  const images = document.querySelectorAll("img");
  let loadedCount = 0;

  images.forEach(img => {
    if (img.complete) {
      loadedCount++;
    } else {
      img.addEventListener("load", () => {
        loadedCount++;
        if (loadedCount === images.length) {
          modal.style.display = "none";
        }
      });
      img.addEventListener("error", () => {
        loadedCount++;
        if (loadedCount === images.length) {
          modal.style.display = "none";
        }
      });
    }
  });

  // Si todas ya estaban cargadas
  if (loadedCount === images.length) {
      setTimeout(() => {
        modal.style.display = "none";
      },2000);
  }
});
