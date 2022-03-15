describe('Menu', () => {
  it('change route by mobile menu', () => {
    // todo: dynamic width
    cy.viewport(800, 800);

    cy.visit('/');

    // check if menu is hidden
    cy.findByTestId('menuMobile').should('not.exist');

    // click hamburger button
    cy.findByTestId('hamburger').should('exist').click();

    // check if menu is shown
    cy.findByTestId('menuMobile').should('exist');

    // find accord element and expand it
    cy.findByTestId('menuMobile').within(() => {
      // find accord element
      const accord = cy.findAllByTestId('accord');

      accord.within(() => {
        const accordHead = cy.findAllByTestId('accord-head');

        accordHead.within(() => {
          cy.findByRole('button', {}).click();
        });

        cy.findAllByTestId('exercise-link').click();
      });

      // check if menu is hidden
      cy.findByTestId('menuMobile').should('not.exist');
    });
  });
});

export {};
