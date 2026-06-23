const maquinas = [
  "SCC98929CP",
  "SCC85150CP",
  "SCC98952CP"
];

function loadMaquinas() {
  render(`
    ${navbar()}
    <div class="container">
      <h1>Máquinas</h1>

      ${maquinas.map(m => `
        <div class="card">${m}</div>
      `).join("")}
    </div>
  `);
}
