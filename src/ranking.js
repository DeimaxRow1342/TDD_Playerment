document.addEventListener("DOMContentLoaded", function() {
    cargarPracticasIniciales();
  
    document.getElementById("proyectoForm").addEventListener("submit", function(event) {
      event.preventDefault();
      agregarNuevaPractica();
  
    });
    document.getElementById("showRankingButton").addEventListener("click", mostrarRanking);
    
  });