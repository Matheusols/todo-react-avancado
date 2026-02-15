# Todo React Avançado

Aplicação de lista de tarefas (To do List) desenvolvida com React, aplicando conceitos avançados como Context API, Hooks customizados e Memoization.

---

Funcionalidades

-  Adicionar nova tarefa
-  Marcar tarefa como concluída
-  Remover tarefa
-  Filtrar tarefas:
  - Todas
  - Concluídas
  - Pendentes

---

# Conceitos Aplicados

### Hooks
- `useState` para gerenciamento de estado
- `useMemo` para otimização de renderizações
- Hook customizado `useInput` para controle de formulário

### Context API
- `createContext`
- `useContext`
- Provider global (`TodoProvider`) para gerenciamento do estado da aplicação

### Memoization
- `React.memo` aplicado no componente de tarefa
- `useMemo` para lista filtrada

---

# Tecnologias Utilizadas

- React
- JavaScript (ES6+)
- CSS3
- Vite

---

# Como Executar o Projeto

1. Clone o repositório:

```bash

git clone <url-do-repositorio>

cd (pasta do projeto)

npm install

npm run dev