window.addEventListener("DOMContentLoaded", async () => {
  const tableBody = document.querySelector("#data-table tbody");

  try {
    const response = await fetch("http://localhost:5678/webhook-test/dashboard-data-get");
    const data = await response.json();

    data.forEach((row) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${row.name || ""}</td>
        <td>${row.email || ""}</td>
        <td>${row.message || ""}</td>
        <td>${row.date || ""}</td>
      `;
      tableBody.appendChild(tr);
    });
  } catch (error) {
    console.error("Error al cargar datos del dashboard:", error);
    tableBody.innerHTML = "<tr><td colspan='4'>Error al cargar datos.</td></tr>";
  }
});
