# 🧠 AI Dashboard Automation  
**Asistente inteligente con IA + n8n + Google Sheets + Formularios Web**

Este proyecto automatiza la recepción de formularios web, genera respuestas inteligentes con OpenAI, guarda los datos en Google Sheets y los muestra en un dashboard visual. Ideal para freelancers, negocios pequeños o agencias que quieren optimizar su atención al cliente sin costos de SaaS.

---

## 📸 Demo

![Formulario funcionando](./formulario/screenshot1.png)  
![Dashboard con datos](./dashboard/screenshot2.png)

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

- [n8n](https://n8n.io)
- [OpenAI](https://platform.openai.com)
- [Google Sheets API](https://developers.google.com/sheets)
- [Gmail API](https://developers.google.com/gmail/api)
- HTML, CSS y JavaScript

---

## 📁 Estructura del proyecto

Conectar con Notion o bases de datos SQL

Crear múltiples dashboards o rutas condicionales

---

## 🛠️ Instalación y uso

### 1. Clona este repositorio

bash
git clone https://github.com/hxcCoder/ai-dashboard-automation.git
---

2. Importa el flujo en n8n

Entra a tu instancia de n8n

Haz clic en “Importar flujo”

Selecciona el archivo Ai_dashboard.json

Configura tus credenciales (OpenAI, Google Sheets, Gmail)
---

3. Crea un archivo .env basado en .env.example
---

env
OPENAI_API_KEY=tu_openai_key
SHEET_ID=tu_google_sheet_id
EMAIL_DESTINO=tu_correo@gmail.com
