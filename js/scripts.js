document.addEventListener("DOMContentLoaded", function () {
  // Obtén el enlace y la sección que deseas mostrar
  var enlaceMostrar = document.getElementById("mostrarGraficas");
  var seccionMostrar = document.getElementById("graficas");

  // Verifica si los elementos existen antes de añadir el evento
  if (enlaceMostrar && seccionMostrar) {
    // Configura el evento de clic en el enlace
    enlaceMostrar.addEventListener("click", function (event) {
      event.preventDefault(); // Previene el comportamiento predeterminado del enlace

      // Muestra la sección cambiando su estilo de display
      seccionMostrar.style.display = "block";
    });
  } else {
    console.error("No se encontró el elemento 'mostrarGraficas' o 'graficas'");
  }

  // Configura el gráfico con Chart.js
  const ctx = document.getElementById("skillsChart").getContext("2d");
  const skillsChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Elm"],
      datasets: [
        {
          label: "Nivel de Habilidad %",
          data: [70, 40, 30, 10, 5], // Puedes ajustar los valores según tus conocimientos
          backgroundColor: [
            "rgba(255, 0, 20, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
          ],
          borderColor: [
            "rgba(75, 192, 192, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
        },
      },
      plugins: {
        legend: {
          display: true,
          position: "top",
        },
      },
    },
  });
});
