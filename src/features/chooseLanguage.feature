Feature: Choose Language

  Escolha de uma linguagem

  Scenario Outline: Usuário escolhe linguagem
      Given O usuário escolhe uma linguagem
      When Ele digita <language>
      Then então deve-se retornar a linguagem <result>
      Examples:
          | language  | result |
          | pt        | pt     |
          | en        | en     |


