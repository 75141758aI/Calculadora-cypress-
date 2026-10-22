describe('Pruebas E2E de la Calculadora', () => {
  beforeEach(() => {
    cy.visit('/Calculadora.html');
  });

  it('Debe realizar una suma correctamente (7 + 8 = 15)', () => {
    cy.contains('button', '7').click();
    cy.contains('button', '+').click();
    cy.contains('button', '8').click();
    cy.contains('button', '=').click();
    cy.get('#current-operand').should('have.text', '15');
  });

  it('Debe limpiar la pantalla con el botón AC', () => {
    cy.contains('button', '9').click();
    cy.contains('button', 'AC').click();
    cy.get('#current-operand').should('have.text', '0');
  });

  it('Debe realizar una resta correctamente (9 - 4 = 5)', () => {
    cy.contains('button', '9').click();
    cy.contains('button', '-').click();
    cy.contains('button', '4').click();
    cy.contains('button', '=').click();
    cy.get('#current-operand').should('have.text', '5');
    cy.screenshot('01-resta-resultado');
  });

  it('Debe realizar una multiplicación correctamente (6 × 7 = 42)', () => {
    cy.contains('button', '6').click();
    cy.contains('button', '×').click();
    cy.contains('button', '7').click();
    cy.contains('button', '=').click();
    cy.get('#current-operand').should('have.text', '42');
    cy.screenshot('02-multiplicacion-resultado');
  });

  it('Debe comprobar una multiplicación de dos dígitos (5 × 5 = 25)', () => {
    cy.contains('button', '5').click();
    cy.contains('button', '×').click();
    cy.contains('button', '5').click();
    cy.contains('button', '=').click();
    cy.get('#current-operand').should('have.text', '25');
    cy.screenshot('05-multiplicacion-dos-cifras-resultado');
  });

  it('Debe realizar una división correctamente (8 ÷ 2 = 4)', () => {
    cy.contains('button', '8').click();
    cy.contains('button', '÷').click();
    cy.contains('button', '2').click();
    cy.contains('button', '=').click();
    cy.get('#current-operand').should('have.text', '4');
    cy.screenshot('03-division-resultado');
  });

  it('Debe borrar el último dígito (45 → 4)', () => {
    cy.contains('button', '4').click();
    cy.contains('button', '5').click();
    cy.get('#current-operand').should('have.text', '45');
    cy.contains('button', 'DEL').click();
    cy.get('#current-operand').should('have.text', '4');
    cy.screenshot('04-borrar-digito-resultado');
  });
});
