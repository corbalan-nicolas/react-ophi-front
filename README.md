## ¿Puedo Consumir Este Alimento? (SPA)
Esta es una **Single Page Application** informativa: vos indicás cuál es tu alergia/intolerancia y la app te ayuda a saber qué alimentos son aptos para vos, y cuáles no, consumiendo la API del **parcial 1**.

## 👨‍🎓 Alumnos
- Corbalan Nicolas  
- Espasandin Gonzalo  
- Gamero Facundo  
- Gamero Gustavo  

## 🧩 Funcionalidades de la SPA

- **Autenticación y cuenta de usuario**
  - Registro de usuario con nombre, email, contraseña y alergia/intolerancia seleccionada.
  - Inicio de sesión contra la API con **JWT** y manejo del token en el cliente.
  - Protección de vistas internas mediante **rutas protegidas** (`protectedView`, middlewares de router).
  - Edición del perfil del usuario (nombre, alergia, etc.).

- **Gestión de productos/alimentos**
  - Listado de productos obtenidos desde la API (vista de dashboard y vista pública).
  - Detalle de producto con información ampliada (ingredientes, trazas, información nutricional, etc.).
  - Búsqueda y filtrado de productos por nombre.
  - Creación, edición y eliminación de productos (sección de dashboard y formularios `ProductCreateForm`, `ProductEditForm`, etc.).

- **Validación de compatibilidad (¿soy apto?)**
  - Consulta a la API para determinar si un alimento es **apto o no** según la alergia/intolerancia del usuario logueado.
  - Visualización clara del resultado (mensajes y estados de alerta en la UI).

- **Historial y experiencia de usuario**
  - Registro de las consultas realizadas (historial asociado al usuario) mediante la API de historial.
  - Navegación principal (`MainNavigation`, `DashboardNavigation`) diferenciando vistas públicas y privadas.
  - Feedback visual con componentes reutilizables (`Alert`, `InlineLoader`, iconos propios, etc.).

## 📎 Tecnologías
- React
- React Router (DATA mode)
- TailwindCSS
- JWT (Json Web Token) para autenticación con la API

## 👨‍💻 Instalación
1. Instalar, configurar y tener corriendo la **API del parcial 1** de forma local.  
2. Clonar este proyecto:
   ```bash
   git clone https://github.com/corbalan-nicolas/react-ophi-front.git
   ```
3. Instalar las dependencias:
   ```bash
   npm install
   ```
4. Configurar las variables de entorno (usar como referencia `.env.example`), incluyendo al menos la **URL base de la API**.
5. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Más información
- Carrera: Diseño y Programación Web  
- Materia: Aplicaciones Híbridas  
- Docente: Cruz Jonathan Emanuel  
- Comisión: DWN4AV  