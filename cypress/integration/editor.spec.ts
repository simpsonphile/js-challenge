import { faker } from '@faker-js/faker';
import { expect } from 'chai';

import { Exercise } from 'lib/getExercises';
import routes from 'lib/routes';

describe('Editor', () => {
  it('saves editor text that stays even after route change', () => {
    cy.viewport(1200, 800);

    cy.visit('/');

    let text: string | string[] | number = '';

    cy.findByTestId('code-editor').within((editor) => {
      const textarea = cy.get('textarea');

      textarea
        .type(faker.random.alphaNumeric(100), { force: true })
        .then(() => {
          text = editor.text();
        });
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

  it('accept correct answer, make it complete, show modal', async () => {
    cy.viewport(1200, 800);

    cy.visit('/');

    cy.task<Exercise[]>('getExercises').then((exercises: Exercise[]) => {
      const exercise = exercises[1];

      const { answer, fullSlug } = exercise;

      const exerciseUrl = routes.exercise(fullSlug);

      cy.visit(exerciseUrl);

      cy.findByTestId('code-editor').within((editor) => {
        const textarea = cy.get('textarea');

        textarea.type('{command}a', { force: true });
        textarea.type('{backspace}{backspace}{backspace}', {
          force: true,
        });
        textarea.type(answer || '', {
          force: true,
          parseSpecialCharSequences: false,
        });
      });

      cy.findByRole('button', {
        name: /test/i,
      }).click();

      cy.findByRole('dialog')
        .findByRole('button', {
          name: /Go to next exercise/i,
        })
        .click();

      cy.visit(exerciseUrl);

      cy.findByTestId('exercise-title').contains('✅');
    });
  });
});

export {};
