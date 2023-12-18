Feature: Gerenciamento de Tarefas

  Permitir que o usuário adicione, marque e apague tarefas na lista de tasks.

  Scenario Outline: Adicionar uma Tarefa
      Given que o usuário acessa a página de tarefas
      When ele insere a tarefa "<task>" no campo de adição e clica em "Adicionar"
      Then  a tarefa "<task>" deve ser adicionada à lista
      Examples:
          | task          | result       |
          | Comprar pão   | Comprar pão        |
          | Estudar BDD   | Estudar BDD        |
          | Zerar cp2077  | Zerar cp2077 |

  Scenario Outline: Marcar uma Tarefa como Concluída
      Given que a tarefa "<task>" está na lista com estado inicial "<initialState>"
      When o usuário clica na tarefa "<task>"
      Then o estado da tarefa "<task>" deve mudar para marcado
      Examples:
          | task      |  initialState  |
          | task1     |      false     |
          | task2     |      false     |

  Scenario Outline: Apagar uma Tarefa
      Given que a lista contém a tarefa "<task>"
      When o usuário seleciona a opção de apagar para a tarefa
      Then a tarefa "<task>" não deve mais aparecer na lista
      Examples:
          | task    |
          | task1   |
          | task2   |
