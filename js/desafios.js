
// js/desafios.js

const desafios = [
  {
    id: 1,
    titulo: "Desafío 1: Notas DO, RE y MI",
    tipo: "leccion",
    contenido: `
      <h2>Lección: Notas DO, RE y MI</h2>
      <p>Observa las posiciones de estas notas en el pentagrama:</p>

      <div class="imagenes-leccion">
        <div>
          <img src="assets/img/do.png" alt="Nota Do" class="nota-img" />
          <p>Do</p>
        </div>
        <div>
          <img src="assets/img/re.png" alt="Nota Re" class="nota-img" />
          <p>Re</p>
        </div>
        <div>
          <img src="assets/img/mi.png" alt="Nota Mi" class="nota-img" />
          <p>Mi</p>
        </div>
      </div>

      <button id="btn-iniciar-desafio">Iniciar desafío</button>`,
    preguntas: [
      {
        img: "assets/img/mi.png",
        opciones: ["DO", "RE", "MI", "FA"],
        correcta: "MI"
      },
      {
        img: "assets/img/re.png",
        opciones: ["DO", "RE", "MI", "FA"],
        correcta: "RE"
      },
      {
        img: "assets/img/do.png",
        opciones: ["DO", "RE", "MI", "FA"],
        correcta: "DO"
      }
        ]
  },
  {
    id: 2,
    titulo: "Desafío 2: Notas FA, SOL y LA",
    tipo: "leccion",
    contenido: `
      <h2>Lección: Notas FA, SOL y LA</h2>
      <p>Observa las posiciones de estas notas en el pentagrama:</p>

      <div class="imagenes-leccion">
        <div>
          <img src="assets/img/fa.png" alt="Nota Fa" class="nota-img" />
          <p>Fa</p>
        </div>
        <div>
          <img src="assets/img/sol.png" alt="Nota Sol" class="nota-img" />
          <p>Sol</p>
        </div>
        <div>
          <img src="assets/img/la.png" alt="Nota La" class="nota-img" />
          <p>La</p>
        </div>
      </div>

      <button id="btn-iniciar-desafio">Iniciar desafío</button>`,
    preguntas: [
      {
        img: "assets/img/fa.png",
        opciones: ["Fa", "Sol", "La", "Si"],
        correcta: "Fa"
      },
      {
        img: "assets/img/sol.png",
        opciones: ["Do", "Sol", "La", "Re"],
        correcta: "Sol"
      },
      {
        img: "assets/img/la.png",
        opciones: ["La", "Si", "Mi", "Fa"],
        correcta: "La"
      }
    
    ]
  }
];
