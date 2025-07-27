document.getElementById("contact-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
    date: new Date().toISOString()
  };

  try {
    const response = await fetch("http://localhost:5678/webhook-test/formulario-recepcion", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    document.getElementById("response-message").textContent = "Formulario enviado correctamente!";
    document.getElementById("contact-form").reset();
  } catch (error) {
    console.error("Error:", error);
    document.getElementById("response-message").textContent = "Hubo un error al enviar el formulario.";
  }
});
