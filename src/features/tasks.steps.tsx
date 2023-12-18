import { fireEvent, render } from '@testing-library/react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { screen } from '@testing-library/react';
import Index from '../pages';

const feature = loadFeature('./src/features/tasks.feature');

defineFeature(feature, (test) => {
  test('Adicionar uma Tarefa', ({ given, when, then }) => {
    given(/^que o usuário acessa a página de tarefas$/, () => {
      //
    });

    when(/^ele insere a tarefa "(.*?)" no campo de adição e clica em "(.*?)"$/, (task, buttonAddTask) => {
      render(<Index />);
      fireEvent.change(screen.getByPlaceholderText('placeholder add task'), { target: { value: task } });
      fireEvent.click(screen.getByRole('button', { name: buttonAddTask }));
    });

    then(/^a tarefa "(.*?)" deve ser adicionada à lista$/, (textExpected) => {
      expect(screen.getByText(textExpected)).toBeDefined();
    });
  });

  test('Marcar uma Tarefa como Concluída', ({ given, when, then }) => {
    given(/^que a tarefa "(.*?)" está na lista com estado inicial "(.*?)"$/, (task, initialState) => {
      render(<Index />);
      fireEvent.change(screen.getByPlaceholderText('placeholder add task'), { target: { value: task } });
      fireEvent.click(screen.getByRole('button', { name: 'Adicionar' }));

      if (initialState === 'true') {
        expect(screen.getByRole('button', { name: task }).classList.contains('underline')).toBeTruthy();
      } else {
        expect(screen.getByRole('button', { name: task }).classList.contains('underline')).toBeFalsy();
      }
    });

    when(/^o usuário clica na tarefa "(.*?)"$/, (task, clica) => {
      fireEvent.click(screen.getByRole('button', { name: task }));
    });

    then(/^o estado da tarefa "(.*?)" deve mudar para marcado$/, (task, marcado) => {
      expect(screen.getByRole('button', { name: task }).classList.contains('underline')).toBeTruthy();
    });
  });

  test('Apagar uma Tarefa', ({ given, when, then }) => {
    given(/^que a lista contém a tarefa "(.*?)"$/, (task) => {
      render(<Index />);

      fireEvent.change(screen.getByPlaceholderText('placeholder add task'), { target: { value: task } });
      fireEvent.click(screen.getByRole('button', { name: 'Adicionar' }));
    });

    when(/^o usuário seleciona a opção de apagar para a tarefa$/, () => {
      fireEvent.click(screen.getByLabelText(`remover task 0`));
    });

    then(/^a tarefa "(.*?)" não deve mais aparecer na lista$/, (task) => {
      expect(screen.queryByRole('button', { name: task })).toBeNull();
    });
  });
});
