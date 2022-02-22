const path = require('path');

const fromRoot = (str) => path.join(process.cwd(), str);

module.exports = plop => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      },
    ],
    actions: [
      {
        type: 'add',
        path: fromRoot('components/{{pascalCase name}}/{{pascalCase name}}.tsx'),
        templateFile: './plop-templates/Component.js.hbs',
      },
      {
        type: 'add',
        path: fromRoot('components/{{pascalCase name}}/{{pascalCase name}}.styles.ts'),
        templateFile: './plop-templates/StyledComponent.js.hbs',

      },
      {
        type: 'add',
        path: fromRoot('components/{{pascalCase name}}/index.ts'),
        templateFile: './plop-templates/ComponentIndex.js.hbs',
      }
    ],
  });
  plop.setGenerator('page', {
    description: 'Create a page component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your page name?'
      },
      {
        type: 'input',
        name: 'path',
        message: 'path to page (pages/[path]/name/index.tsx)'
      },
      {
        type: 'list',
        name: 'type',
        message: 'static or dynamic?',
        choices: [
          'static', 'dynamic'
        ]
      }
    ],
    actions(data) {
      const fileName = data.type === 'static' ? data.name.toLowerCase() : '[slug]'
      return [
        {
          type: 'add',
          path: fromRoot(`pages/{{path}}/${fileName}/index.tsx`),
          templateFile: './plop-templates/Component.js.hbs',
        }
      ]
    }
  });
  plop.setGenerator('hook', {
    description: 'Create a hook component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your page name?'
      },

    ],
    actions: [
        {
          type: 'add',
          path: fromRoot(`hooks/use{{pascalCase name}}/index.ts`),
          templateFile: './plop-templates/Hook.js.hbs',
        }
      ]
  });
  plop.setGenerator('exercise', {
    description: 'Create a exercise',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your exercise name?'
      },
      {
        type: 'input',
        name: 'category',
        message: 'category name'
      },
      {
        type: 'input',
        name: 'description'
      }
    ],
    actions: [
        {
          type: 'add',
          path: fromRoot(`_exercises/{{category}}/{{name}}.md`),
          templateFile: './plop-templates/Exercise.js.hbs',
        }
      ]
  });
};