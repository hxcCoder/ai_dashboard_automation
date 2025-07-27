# 🧠 AI Dashboard Automation  
**Asistente inteligente con IA + n8n + Google Sheets + Formularios Web**

Este proyecto automatiza la recepción de formularios web, genera respuestas inteligentes con OpenAI, guarda los datos en Google Sheets y los muestra en un dashboard visual. Ideal para freelancers, negocios pequeños o agencias que quieren optimizar su atención al cliente sin costos de SaaS.

---

## 📸 Demo

[Formulario funcionando](assets/formulario.jpg)  
[Dashboard con datos](assets/dashboard.jpg)

> *(Reemplaza estas imágenes con tus propias capturas de pantalla si las tienes)*

---

## 🚀 Funcionalidades

- ✅ Recibe datos desde un formulario web (`nombre`, `email`, `mensaje`)
- 🤖 Procesa el mensaje con OpenAI para generar una respuesta inteligente
- 📄 Guarda todos los datos automáticamente en Google Sheets
- 📬 Envía notificaciones por correo con Gmail
- 📊 Visualiza los datos desde un dashboard web (GET)
- ⚠️ Maneja errores y notifica automáticamente si algo falla
  
---

## ⚙️ Tecnologías usadas
---
- [n8n](https://n8n.io)
- [OpenAI](https://platform.openai.com)
- [Google Sheets API](https://developers.google.com/sheets)
- [Gmail API](https://developers.google.com/gmail/api)
- HTML, CSS y JavaScript

---

## 🛠️ Instalación y uso
---
1. Clona este repositorio

git clone https://github.com/hxcCoder/ai-dashboard-automation.git
---
2. Importa el flujo en n8n
---

Ve a tu instancia de n8n

Haz clic en "Import"

Selecciona el archivo Ai_dashboard.json

Conecta tus credenciales de OpenAI, Google Sheets y Gmail
---
3. Configura las variables
---
Crea un archivo .env basado en el ejemplo:
---

env:
OPENAI_API_KEY=tu_api_key
SHEET_ID=tu_sheet_id
EMAIL_DESTINO=correo@ejemplo.com

---
4. Ejecuta el formulario
---
Abre formulario/index.html en tu navegador, completa el formulario y envíalo.
---
5. Visualiza los datos
---

Abre dashboard/dashboard.html para ver los datos actualizados automáticamente.

---
💼 Casos de uso
---

Freelancers con formularios de contacto

Tiendas online que quieren automatizar atención

Clínicas que agendan consultas desde su sitio web

Agencias o consultoras que reciben solicitudes constantes

Cualquier negocio que quiera dar una primera respuesta automática

---
📌 ¿Por qué este proyecto es útil?
---

💬 Atención inmediata con IA

🔐 Organiza los datos en un sistema seguro

⏱️ Ahorra tiempo y trabajo manual

🧩 Escalable: se puede integrar con Telegram, Notion, WhatsApp, CRMs, etc.

---
📬 Contacto
---
¿Quieres este sistema funcionando en tu negocio o adaptarlo a tus necesidades?

👤 Desarrollado por hxcCoder
📧 Correo: pon_aquí_tu_correo@ejemplo.com
🔗 (Agrega tu LinkedIn si tienes)

