# Processo Seletivo - Cashforce

Projeto End-to-End desenvolvido para o processo seletivo da Cashforce.

## :heavy_check_mark: Tecnologias Utilizadas

---

- **Frontend:** VueJS.
- **Backend:** NodeJS, express, Sequelize e TypeScript.
- **Banco de Dados:** SQL, MySQL.
- **Containerização:** Docker.
- **IDE:** Visual Studio Code.

## :hammer: Configurações Iniciais

---

<details>
  <summary><strong>Com Docker</strong></summary>

  > Rode o serviço `node` com o comando `docker-compose up -d`.

  - Esse serviço irá inicializar três containers chamados `cashforce_backend`, `cashforce_frontend` e `cashforce_db`.
  - A partir daqui você pode rodar os containers  via CLI ou abri-lo no VS Code.
  
  > Use o comando `docker exec -it cashforce_backend bash` para rodar o backend.

  > Use o comando `docker exec -it cashforce_frontend bash` para rodar o frontend.

  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > Instale as dependências **[Caso existam]** com `yarn install`

  :warning: **Atenção:** :warning: Caso opte por utilizar o Docker, TODOS os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados DENTRO do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima.
</details>
<details>
  <summary><strong>Localmente</strong></summary>

  > Instale as dependências **[Caso existam]** com `yarn install`

  :warning: **Atenção:** :warning: Para rodar o projeto dessa forma, obrigatoriamente você deve ter o `node` com o `yarn` instalado em seu computador, além de ter o MySQL instalado também.
</details>

## :keyboard: Rodando o projeto

---

- **Backend**: para subir o servidor, rode `yarn dev`.
- **Frontend**: para subir a aplicação, rode `yarn serve`.