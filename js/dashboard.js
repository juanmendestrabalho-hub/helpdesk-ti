function loadDashboard() {
  render(`
    ${navbar()}
    <div class="container">
      <h1>Dashboard</h1>

      <div class="card">🖥 Máquinas Online: 12</div>
      <div class="card">📞 Chamados Abertos: 5</div>
      <div class="card">⚠️ Incidentes: 2</div>
    </div>
  `);
}
