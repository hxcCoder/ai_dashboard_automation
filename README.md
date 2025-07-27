🧠 AI Dashboard Automation
Asistente inteligente con IA + n8n + Google Sheets + Formularios Web

Automatiza la recepción de formularios web, responde con inteligencia artificial, guarda la información en Google Sheets y muestra los datos en un dashboard visual. Ideal para freelancers, pequeños negocios o agencias que necesitan atención al cliente 24/7 sin complicaciones.

📸 Demo


(Puedes reemplazar estas imágenes por las tuyas reales. Usa capturas del formulario enviado y del dashboard con los datos cargados.)

🚀 Funcionalidades
✅ Recibe datos desde un formulario web (nombre, email, mensaje)

🤖 Genera una respuesta automática usando IA (OpenAI)

📄 Guarda todo en Google Sheets

📬 Envía notificaciones por correo

📊 Muestra los datos en un dashboard web (GET)

⚠️ Notifica errores si algo falla

⚙️ Tecnologías usadas
n8n (automatización del flujo)

OpenAI (procesamiento con IA)

Google Sheets API (almacenamiento)

Gmail API (notificación)

HTML, CSS y JS (formulario y dashboard frontend)


🛠️ Instalación y uso
1. Clona este repositorio
bash
Copiar
Editar
git clone https://github.com/tuusuario/ai-dashboard-automation.git
2. Importa el flujo en n8n
Entra a tu instancia de n8n

Haz clic en Importar flujo

Selecciona el archivo Ai_dashboard.json

Configura tus credenciales (OpenAI, Gmail, Google Sheets)

3. Configura variables
Crea un archivo .env con base en .env.example, por ejemplo:

env
Copiar
Editar
OPENAI_API_KEY=tu_openai_key
SHEET_ID=tu_google_sheet_id
EMAIL_DESTINO=tu_correo@gmail.com
4. Abre index.html en un navegador
Este es el formulario. Envíalo y observa cómo los datos llegan al dashboard.

5. Abre dashboard.html
Aquí se mostrarán los datos guardados automáticamente.

🌐 Casos de uso
💼 Freelancers que quieren automatizar formularios de contacto

🛍️ Tiendas pequeñas que reciben dudas y quieren responder con IA

📅 Clínicas o negocios que registran consultas

📩 Formularios de soporte automatizados

⚙️ Automatización interna en empresas

🧠 ¿Por qué este proyecto es útil?
Ahorra tiempo en atención al cliente

Da una primera respuesta automática

Organiza los datos sin intervención humana

Escalable: se puede integrar con Notion, Telegram, CRMs y más

📩 Contacto
¿Quieres que adapte esto a tu negocio?
👉 Contáctame por LinkedIn o por correo: tucorreo@dominio.com

📝 Licencia
Este proyecto está bajo la MIT License

¿Qué sigue?
Puedes:

Añadir Telegram o WhatsApp como canales de notificación

Conectar con Notion o bases de datos SQL

Crear múltiples dashboards o rutas condicionales


