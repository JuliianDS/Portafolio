document.addEventListener("DOMContentLoaded", () => {
  fetch('./modal/modal.html') // Ajusta la ruta si está dentro de una carpeta
    .then(response => {
      if (!response.ok) {
        throw new Error('No se pudo cargar el archivo de modales');
      }
      return response.text();
    })
    .then(data => {
      document.getElementById('contenedor-modales').innerHTML = data;
    })
    .catch(error => console.error('Error al cargar los modales:', error));
});