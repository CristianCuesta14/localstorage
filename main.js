"use strict";

// Función para agregar la película
const addMovie = (event) => {
  var titulo = document.querySelector("#addmovie").value;
  if (titulo.length >= 1) {
    localStorage.setItem(titulo, titulo);
  }
};

// Selecciono el formulario
var formulario = document.querySelector("#form__movies");

// Creo el evento, el primer parámetro es el evento y el segundo es la función previamente creada
formulario.addEventListener("submit", addMovie);

// Selecciono la lista
var ul = document.querySelector("#movies__list");

// Función para mostrar los títulos guardados en el Local Storage
for (var i = 0; i < localStorage.length; i++) {
  var key = localStorage.key(i);
  var value = localStorage.getItem(key);
  var li = document.createElement("li");
  li.textContent = value;

  // Agrega un estilo CSS para quitar la decoración de las etiquetas <li>

  li.style.listStyleType = "none";

  ul.appendChild(li);
}

// Función para borrar una película
const deleteMovie = (event) => {
  var titulo = document.querySelector("#delete__movie").value;
  if (titulo.length >= 1) {
    localStorage.removeItem(titulo);
  }
};

var formDelete = document.querySelector("#form__delete-movie");

formDelete.addEventListener("submit", deleteMovie);
