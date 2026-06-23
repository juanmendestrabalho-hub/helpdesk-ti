
let chamados = JSON.parse(localStorage.getItem("chamados")) || [];

function loadChamados() {
  render(`
    ${navbar()}
    <div class="container">
      <h1>Chamados</h1>

      <input id="titulo" placeholder="Novo chamado">
      <button onclick="addChamado()">Criar</button>

      ${chamados.map(c => `
        <div class="card">
          ${c}
        </div>
      `).join("")}
    </div>
  `);
}

function addChamado() {
  const titulo = document.getElementById("titulo").value;
  chamados.push(titulo);
  localStorage.setItem("chamados", JSON.stringify(chamados));
  loadChamados();
}
