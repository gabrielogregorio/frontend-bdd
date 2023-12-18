import { render } from '@testing-library/react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { screen } from '@testing-library/react';

const feature = loadFeature('./src/features/chooseLanguage.feature');

let errorCaught: Error | null = null;

defineFeature(feature, (test) => {
  beforeEach(() => {
    errorCaught = null;
  });

  test('Usuário escolhe linguagem', ({ given, when, then }) => {
    given(/^O usuário escolhe uma linguagem$/, () => {
      //
    });

    when(/^Ele digita (.*)$/, (language) => {
      render(<div>{language}</div>);
    });

    then(/^então deve-se retornar a linguagem (.*)$/, (languageExpected) => {
      expect(screen.getByText(languageExpected)).toBeDefined();
    });
  });
});
