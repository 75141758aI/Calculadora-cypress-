# 🧮 Calculadora Web con Pruebas Automatizadas en Cypress

> **Guía de Práctica N° 10:** Documentación técnica en repositorios  
> **Programa de Estudios:** Diseño y Programación Web  
> **Unidad Didáctica:** Pruebas de Calidad de Software  
> **Docente:** Lic. Yesenia Mallma Navarro  

---

## 📋 Descripción del Proyecto

Este proyecto consiste en una **Calculadora Web interactiva** desarrollada con tecnologías estándar del desarrollo frontend (HTML5, CSS3 y JavaScript vanilla), integrada con una suite completa de **pruebas automatizadas de extremo a extremo (E2E)** utilizando el framework **Cypress**.

El objetivo principal es asegurar la confiabilidad, exactitud en las operaciones aritméticas y la correcta experiencia de usuario mediante pruebas automatizadas y control de versiones con Git y GitHub.

---

## 🛠️ Tecnologías Utilizadas

| Herramienta / Tecnología | Versión / Tipo | Función Principal |
| :--- | :--- | :--- |
| **HTML5** | Estándar | Estructura semántica de la calculadora y elementos de interacción |
| **CSS3** | Grid & Flexbox | Diseño visual, interfaz intuitiva y adaptabilidad responsiva |
| **JavaScript (ES6+)** | Lógica de cliente | Control del estado, manipulación del DOM y operaciones aritméticas |
| **Node.js & npm** | Entorno de ejecución | Gestión de paquetes y dependencias del proyecto |
| **Cypress** | Framework E2E | Automatización y ejecución de pruebas de calidad de software |
| **Git & GitHub** | Control de versiones | Repositorio remoto, colaboración y documentación técnica |

---

## 📂 Estructura del Repositorio

```plaintext
calculadora-cypress/
│
├── docs/
│   └── CONFLUENCE.md            # Contenido listo para la página de Confluence
├── cypress/
│   ├── e2e/
│   │   └── calculadora.cy.js    # Suite de pruebas E2E automatizadas
│   ├── screenshots/             # Capturas generadas tras la ejecución de pruebas
│   └── support/
│       ├── commands.js          # Comandos personalizados de Cypress
│       └── e2e.js               # Configuración global del entorno de pruebas
│
├── Calculadora.html             # Interfaz visual de la calculadora
├── estilos.css                  # Hoja de estilos de la aplicación
├── script.js                    # Lógica operativa de la calculadora
├── cypress.config.js            # Archivo de configuración central de Cypress
├── package.json                 # Metadatos del proyecto y scripts de ejecución
├── pnpm-lock.yaml               # Versiones bloqueadas de las dependencias
├── pnpm-workspace.yaml          # Configuración del workspace de pnpm
├── .gitignore                   # Archivos y carpetas ignorados por Git
└── README.md                    # Documentación técnica principal del proyecto
```

---

## ⚙️ Requisitos Previos

Antes de ejecutar este proyecto, asegúrate de tener instalado en tu equipo:

1. **Node.js** (versión 20.x o superior): [Descargar Node.js](https://nodejs.org/)
2. **Git**: [Descargar Git para Windows](https://git-scm.com/)
3. **pnpm** (gestor usado por este repositorio). Se puede habilitar con `corepack enable`.
4. **Navegador Electron**, incluido con Cypress, o Chrome/Edge para el modo interactivo.

Para verificar que las herramientas están correctamente instaladas, abre tu terminal y ejecuta:

```bash
node -v
npm -v
git --version
```

---

## 🚀 Instalación y Puesta en Marcha

Sigue estos pasos para clonar y levantar el proyecto en tu entorno local:

### 1. Clonar el repositorio

```bash
git clone https://github.com/75141758aI/Calculadora-cypress-.git
cd Calculadora-cypress-
```

### 2. Instalar dependencias

Ejecuta el siguiente comando para descargar las librerías necesarias (incluyendo Cypress y el servidor local):

```bash
pnpm install
```

Si pnpm pregunta si puede ejecutar el script de instalación de Cypress, aprueba únicamente `cypress`; ese paso descarga el binario que usa el ejecutor de pruebas.

---

## 🧪 Ejecución de Pruebas con Cypress

El proyecto cuenta con dos modalidades para la ejecución de pruebas de calidad:

### A. Modo Interactivo (Interfaz Gráfica de Cypress)

Permite visualizar la ejecución paso a paso en el navegador en tiempo real:

1. Inicia el servidor web local en una terminal:
   ```bash
   pnpm start
   ```
2. En otra terminal, abre la interfaz visual de Cypress:
   ```bash
   pnpm cy:open
   ```
3. En la ventana de Cypress:
   - Selecciona **E2E Testing**.
   - Elige tu navegador preferido (Chrome, Edge o Electron).
   - Haz clic sobre el archivo de pruebas `calculadora.cy.js` para ejecutar los tests.

---

### B. Modo Headless (Ejecución automatizada en Consola)

Ejecuta el servidor web y los tests de forma desatendida en la terminal con un solo comando:

```bash
pnpm cy:run
```

> **Resultado esperado:** Todas las pruebas pasan exitosamente con el reporte en verde (Passing: 6).

---

## 🔍 Cobertura de Pruebas Automatizadas

La suite `cypress/e2e/calculadora.cy.js` valida los siguientes casos de prueba:

1. **Operación de Suma:** Verifica que `7 + 8 = 15`.
2. **Operación de Resta:** Verifica que `9 - 4 = 5` con evidencia gráfica.
3. **Operación de Multiplicación:** Verifica que `6 × 7 = 42` con evidencia gráfica.
4. **Operación de División:** Verifica que `8 ÷ 2 = 4` con evidencia gráfica.
5. **Función de Limpieza (All Clear - AC):** Comprueba que al presionar `AC`, la pantalla se restablece a `0`.
6. **Función de Borrado Parcial (DEL):** Valida que al ingresar `45` y presionar `DEL`, el valor restante sea `4`.

---

## 📝 Historial de Versiones (Changelog)

- **v1.0.0** (Octubre 2026):
  - Creación de la interfaz gráfica y estilos responsivos.
  - Implementación de la lógica aritmética en JavaScript.
  - Configuración del framework Cypress y creación de pruebas E2E.
  - Documentación técnica del proyecto (`README.md`).

---

## 👤 Autor

- **Estudiante:** Aldo Uriel Incarroca Jayo
- **Institución:** IESTP "Santiago Antúnez de Mayolo"
- **Programa:** Diseño y Programación Web
- **Unidad Didáctica:** Pruebas de Calidad de Software
- **Repositorio oficial:** [75141758aI/Calculadora-cypress-](https://github.com/75141758aI/Calculadora-cypress-)
