# Agendamento Petshop

Aplicação web para gerenciamento de agendamentos de atendimento em um petshop. Os usuários podem consultar a agenda por data, cadastrar novos agendamentos e cancelar atendimentos.

O projeto foi desenvolvido com JavaScript, Webpack e JSON Server.

## Funcionalidades

- Visualização dos agendamentos por data;
- Agenda organizada por períodos:
  - Manhã: 09h às 12h;
  - Tarde: 13h às 18h;
  - Noite: 19h às 21h;
- Exibição de horário, nome do pet, nome do tutor e descrição do serviço;
- Remoção imediata de agendamentos;
- Cadastro de agendamentos em um modal;
- Bloqueio de horários ocupados;
- Bloqueio de horários fora do horário de atendimento;
- Validação dos campos obrigatórios;
- Atualização automática da agenda após alterações.

## Requisitos

### Agenda

- Exibir os agendamentos em ordem cronológica;
- Agrupar os agendamentos por período;
- Cada seção da agenda deve apresentar um ícone, nome do período e intervalo de horário;
- Cada agendamento deve apresentar horário, nome do animal, nome do tutor, descrição do serviço e opção de remoção.

### Modal "Agende um atendimento"

O modal deve ser aberto pelo botão **Novo agendamento** e deve bloquear o fundo da página.

Campos do formulário:

- Nome do tutor;
- Nome do pet;
- Telefone;
- Descrição do serviço;
- Data;
- Hora.

Ao confirmar o agendamento, o modal deve ser fechado e o novo card deve aparecer na seção correspondente.

### Regras de comportamento

- Adicionar o agendamento na seção correta: manhã, tarde ou noite;
- Ordenar os agendamentos pelo horário;
- Alterar a data exibida ao selecionar outra data no topo da página;
- Remover o agendamento imediatamente após a confirmação;
- Impedir dois agendamentos no mesmo horário e na mesma data;
- Exigir tutor, pet, telefone, serviço, data e hora;
- Permitir somente horários dentro das faixas válidas;
- Impedir o envio de informações vazias ou inválidas e exibir mensagens claras.

## Tecnologias

- HTML5;
- CSS3;
- JavaScript;
- Webpack;
- Webpack Dev Server;
- Babel;
- Day.js;
- JSON Server.

## Pré-requisitos

- Node.js;
- npm;
- Git.

## Instalação e execução

### 1. Clonar o repositório

```bash
git clone https://github.com/henrillysm/Agendamento-Petshop.git
cd Agendamento-Petshop
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Iniciar a API local

Em um terminal:

```bash
npm run server
```

A API estará disponível em `http://localhost:3333`.

Os dados dos agendamentos serão armazenados no arquivo `server.json`.

### 4. Iniciar a aplicação

Em outro terminal:

```bash
npm run dev
```

A aplicação será aberta em `http://localhost:3000`.

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia a aplicação em modo de desenvolvimento |
| `npm run server` | Inicia o JSON Server na porta 3333 |
| `npm run build` | Gera os arquivos da aplicação na pasta `dist` |

## Como usar

### Consultar agendamentos

Selecione uma data no campo disponível no topo da página. Os agendamentos serão exibidos nas seções de manhã, tarde e noite.

### Criar um agendamento

1. Clique em **Novo agendamento**;
2. Informe o nome do tutor;
3. Informe o nome do pet;
4. Informe o telefone;
5. Informe a descrição do serviço;
6. Selecione a data;
7. Selecione um horário disponível;
8. Clique em **AGENDAR**.

### Cancelar um agendamento

Clique em **Remover agendamento** no card correspondente e confirme a operação.

## Estrutura do projeto

```text
Agendamento-Petshop/
├── src/
│   ├── assets/
│   ├── libs/
│   │   └── dayjs.js
│   ├── modules/
│   │   ├── form/
│   │   └── schedule/
│   │       └── page-load.js
│   ├── services/
│   ├── styles/
│   └── utils/
│       └── opening-hours.js
├── index.html
├── package.json
├── server.json
└── webpack.config.js
```

## Dados dos agendamentos

Exemplo de objeto armazenado pelo JSON Server:

```json
{
  "id": 1770000000000,
  "name": "Nome do tutor",
  "pet": "Nome do pet",
  "descriptionService": "Descrição do serviço",
  "when": "2026-11-20T09:00:00.000Z"
}
```

## API local

| Método | Recurso | Descrição |
| --- | --- | --- |
| `GET` | `/schedules` | Lista os agendamentos |
| `POST` | `/schedules` | Cria um agendamento |
| `DELETE` | `/schedules/:id` | Remove um agendamento |

## Autor

Henrilly de Sousa Maciel
