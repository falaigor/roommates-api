<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/falaigor/roommates-web?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/falaigor/roommates-web">
  
  <a href="https://github.com/tgmarinho/README-ecoleta/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/falaigor/roommates-web">
  </a>
    
  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>
<h1 align="center">
    <img alt="Roommates" title="Roommates" src="https://raw.githubusercontent.com/falaigor/roommates-web/7707d001241c724a9892918d779e8dcddf3a8917/src/images/logo.svg" width="80px" />
</h1>

<h4 align="center"> 
	🏠 Roommates 🚧
</h4>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-autor">Autor</a> • 
 <a href="#user-content--licença">Licença</a>
</p>

## 💻 Sobre o projeto

🏠 Roommates - é uma plataforma que conecta pessoas á quartos de aluguel.

Projeto desenvolvido para fins de estudo.

---

## 🚀 Como executar o projeto

Este projeto é divido em duas partes:

1. Backend
2. [Frontend](https://github.com/falaigor/roommates-web/)

💡Frontend precisa que o Backend esteja sendo executado para funcionar.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) versão 14.x.
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 🎲 Rodando o Backend (servidor)

```bash

# Clone este repositório
$ git clone git@github.com:falaigor/roommates-api.git

# Acesse a pasta do projeto no terminal/cmd
$ cd roommates-api

# Instale as dependências
$ npm install ou yarn

# Execute a aplicação em modo de desenvolvimento
$ npm run dev ou yarn dev

# O servidor inciará na porta:4000 - acesse http://localhost:4000

```

<p align="center">
  <a href="https://github.com/falaigor/roommates-api/blob/main/Insomnia_API_Roommates.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

### .env

Renomeie o `.env.example` no diretório raiz para `.env` e atualize com suas configurações.

Foi utilizado o [Cloudinary](https://cloudinary.com) para armazenamento das imagens em CDN.

| key                   | description                               | default      |
| --------------------- | ----------------------------------------- | ------------ |
| CLOUDINARY_CLOUD_NAME | Token do MAPBOX                           |              |
| CLOUDINARY_API_KEY    | KEY gerada na sua conta Cloudinary        |              |
| CLOUDINARY_API_SECRET | SECRET KEY gerada na sua conta Cloudinary |              |
| CLOUDINARY_API_ENV    | API Environment variable                  |              |
| STORAGE_TYPE          | Tipo de Storage dos Arquivos              | `cloudinary` |

#### 🧭 Rodando a aplicação web (Frontend)

Seguir as [Instruções](https://github.com/falaigor/roommates-web) para rodar a aplicação Frontend

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Website** ([React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/))

- **[React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)**
- **[React Icons](https://react-icons.github.io/react-icons/)**
- **[Axios](https://github.com/axios/axios)**
- **[Leaflet](https://react-leaflet.js.org/en/)**
- **[React Leaflet](https://react-leaflet.js.org/)**
- **[Styled Components](https://styled-components.com)**

> Veja o arquivo [package.json](https://github.com/falaigor/roommates-web/blob/develop/package.json)

#### [](https://github.com/tgmarinho/Ecoleta#server-nodejs--typescript)**Server** ([NodeJS](https://nodejs.org/en/) + [TypeScript](https://www.typescriptlang.org/))

- **[Express](https://expressjs.com/)**
- **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
- **[Prisma](https://www.prisma.io)**
- **[SQLite](https://github.com/mapbox/node-sqlite3)**
- **[ts-node](https://github.com/TypeStrong/ts-node)**
- **[dotENV](https://github.com/motdotla/dotenv)**
- **[Multer](https://github.com/expressjs/multer)**

> Veja o arquivo [package.json](https://github.com/falaigor/roommates-api/blob/main/package.json)

#### [](https://github.com/tgmarinho/Ecoleta#utilit%C3%A1rios)**Utilitários**

- Protótipo: **[Figma](https://www.figma.com/)**
- Maps: **[Leaflet](https://react-leaflet.js.org/en/)**
- Editor: **[Visual Studio Code](https://code.visualstudio.com/)** → Extensions: **[SQLite](https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite)**
- Markdown: **[StackEdit](https://stackedit.io/)**, **[Markdown Emoji](https://gist.github.com/rxaviers/7360908)**
- Commit Conventional: **[Commitlint](https://github.com/conventional-changelog/commitlint)**
- Teste de API: **[Insomnia](https://insomnia.rest/)**
- Ícones: **[Feather Icons](https://feathericons.com/)**
- Fontes: **[Ubuntu](https://fonts.google.com/specimen/DM+Sans)**, **[Roboto](https://fonts.google.com/specimen/Roboto)**

## 💪 Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`

---

## 🦸 Autor

<a href="https://blog.rocketseat.com.br/author/thiago/">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/40046196?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Igor Santos</b></sub></a> <a href="https://instagram.com/falaigors/" title="Instagram Igor Santos">🚀</a>
 <br />

[![Twitter Badge](https://img.shields.io/badge/-@falaigors-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/falaigors)](https://twitter.com/falaigors)
[![Linkedin Badge](https://img.shields.io/badge/-Igor-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/falaigot/)](https://www.linkedin.com/in/falaigor/)
[![Gmail Badge](https://img.shields.io/badge/-falaigors@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:falaigors@gmail.com)](mailto:falaigors@gmail.com)

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito com ❤️ por Igor Santos 👋🏽 [Entre em contato!](https://www.linkedin.com/in/falaigor/)
