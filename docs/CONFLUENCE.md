# Calculadora Web con Pruebas Automatizadas

## Resumen del proyecto

- **Nombre:** Calculadora Web con Pruebas Automatizadas
- **Repositorio GitHub:** https://github.com/75141758aI/Calculadora-cypress-
- **Autor:** Aldo Uriel Incarroca Jayo
- **Institución:** IESTP Santiago Antúnez de Mayolo
- **Programa:** Diseño y Programación Web
- **Unidad didáctica:** Pruebas de Calidad de Software

## Descripción

Aplicación web de una calculadora interactiva. La interfaz está construida con HTML y CSS, y las operaciones se procesan con JavaScript. Cypress automatiza pruebas de extremo a extremo para comprobar las operaciones aritméticas y las funciones de limpieza y borrado.

## Tecnologías utilizadas

| Herramienta | Función |
| --- | --- |
| HTML5 | Estructura de la interfaz |
| CSS3 | Diseño y presentación |
| JavaScript | Lógica de la calculadora |
| Node.js | Entorno de ejecución |
| pnpm | Instalación y administración de dependencias |
| Cypress | Pruebas automatizadas de extremo a extremo |
| Git y GitHub | Control de versiones y alojamiento del repositorio |

## Instalación y ejecución

Requisitos: Node.js 20 o superior, Git y pnpm.

```bash
git clone https://github.com/75141758aI/Calculadora-cypress-.git
cd Calculadora-cypress-
pnpm install
pnpm start
```

La aplicación se sirve localmente en http://127.0.0.1:4173/Calculadora.html. Para abrir Cypress en modo interactivo, ejecuta `pnpm cy:open`. Para ejecutar la suite en consola, usa `pnpm cy:run`.

## Pruebas implementadas

1. Suma: 7 + 8 = 15.
2. Resta: 9 - 4 = 5.
3. Multiplicación: 6 × 7 = 42.
4. División: 8 ÷ 2 = 4.
5. Limpieza completa con AC: la pantalla vuelve a 0.
6. Borrado del último dígito con DEL: 45 queda en 4.
7. Multiplicación adicional: 5 × 5 = 25.

La suite está en `cypress/e2e/calculadora.cy.js`; los siete casos pasaron en Cypress. Cypress guarda capturas de algunos casos en `cypress/screenshots/`.
