// js/main.js

document.addEventListener("DOMContentLoaded", () => {
  const listaDesafios = document.getElementById("lista-desafios");
  const contenidoDesafio = document.getElementById("contenido-desafio");

  // Generar botones de desafíos
  desafios.forEach(d => {
    const boton = document.createElement("button");
    boton.textContent = d.titulo;
    boton.classList.add("boton-desafio");

    boton.addEventListener("click", () => {
  mostrarDesafio(d);
    });

    listaDesafios.appendChild(boton);
  });

  // Muestra la lección o las preguntas
  function mostrarDesafio(desafio) {
    listaDesafios.style.display = "none";
    contenidoDesafio.style.display = "block";
    contenidoDesafio.innerHTML = desafio.contenido;

    const btnIniciar = contenidoDesafio.querySelector("#btn-iniciar-desafio");
    if (btnIniciar) {
      btnIniciar.addEventListener("click", () => {
        iniciarPreguntas(desafio);
      });
    }

    // Botón volver
    const volver = document.createElement("button");
    volver.textContent = "Volver al inicio";
    volver.classList.add("boton-volver");
    volver.addEventListener("click", volverAlMenu);
    contenidoDesafio.appendChild(volver);
  }

  function iniciarPreguntas(desafio) {
    let indice = 0;
    let puntaje = 0;

    function mostrarPregunta() {
      const pregunta = desafio.preguntas[indice];
      contenidoDesafio.innerHTML = `
        <h2>Pregunta ${indice + 1} de ${desafio.preguntas.length}</h2>
        <img src="${pregunta.img}" alt="Nota musical" class="nota-img-grande" />
        <div class="opciones"></div>
      `;

      const contenedorOpciones = contenidoDesafio.querySelector(".opciones");

      pregunta.opciones.forEach(op => {
        const btn = document.createElement("button");
        btn.textContent = op;
        btn.classList.add("opcion");
        btn.addEventListener("click", () => {
          if (op === pregunta.correcta) {
            btn.classList.add("correcta");
            puntaje++;
          } else {
            btn.classList.add("incorrecta");
          }

          // Esperar 1s y pasar a la siguiente pregunta
          setTimeout(() => {
            indice++;
            if (indice < desafio.preguntas.length) {
              mostrarPregunta();
            } else {
              mostrarResultado();
            }
          }, 1000);
        });
        contenedorOpciones.appendChild(btn);
      });
    }

    function mostrarResultado() {
      contenidoDesafio.innerHTML = `
        <h2>Resultado final</h2>
        <p>Tu puntaje: ${puntaje} / ${desafio.preguntas.length}</p>
      `;
      const volver = document.createElement("button");
      volver.textContent = "Volver al inicio";
      volver.addEventListener("click", volverAlMenu);
      contenidoDesafio.appendChild(volver);
    }

    mostrarPregunta();
  }

  function volverAlMenu() {
    contenidoDesafio.style.display = "none";
    listaDesafios.style.display = "flex";
  }
});
