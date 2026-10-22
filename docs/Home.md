# Calculadora Web con pruebas automatizadas

Bienvenido a la documentación del proyecto **Calculadora Web con Pruebas Automatizadas**.

## Proyecto

Calculadora web desarrollada con HTML5, CSS3 y JavaScript. Cypress verifica sus operaciones aritméticas, la limpieza de pantalla y el borrado del último dígito.

- **Autor:** Aldo Uriel Incarroca Jayo
- **Repositorio:** https://github.com/75141758al/Calculadora-cypress-
- **Unidad didáctica:** Pruebas de Calidad de Software

## Requisitos

- Node.js 20 o superior
- Git
- pnpm

## Instalación rápida

```bash
git clone https://github.com/75141758al/Calculadora-cypress-.git
cd Calculadora-cypress-
pnpm install
pnpm start
```

Abre http://127.0.0.1:52343/Calculadora.html para usar la calculadora. Ejecuta `pnpm cy:open` para abrir Cypress o `pnpm cy:run` para correr la suite de pruebas en consola.

## Pruebas

La suite `cypress/e2e/calculadora.cy.js` contiene seis casos: suma, resta, multiplicación, división, limpieza total (AC) y borrado parcial (DEL).

## Documentación

- `README.md`: requisitos, instalación, comandos y detalles del proyecto.
- `docs/CONFLUENCE.md`: contenido para la página colaborativa de Confluence.
