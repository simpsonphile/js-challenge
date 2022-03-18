import { expect } from 'chai';

describe('Editor', () => {
  it('it saves editor text that stays even after route change', () => {
    cy.viewport(1200, 800);

    cy.visit('/');

    let text: string | string[] | number = '';

    cy.findByTestId('code-editor').within((editor) => {
      const textarea = cy.get('textarea');

      textarea.type('heheeheh', { force: true });

      text = editor.text();
    });

    let hasFoundExpandedAccord = false;

    cy.findAllByTestId('accord').each((accord) => {
      if (accord.attr('aria-expanded') === 'true' || hasFoundExpandedAccord)
        return false;

      hasFoundExpandedAccord = true;

      cy.wrap(accord).click().findByTestId('exercise-link').first().click();
    });

    cy.visit('/');

    cy.findByTestId('code-editor').within((editor) => {
      expect(editor.text()).to.equal(text);
    });
  });
});

export {};
