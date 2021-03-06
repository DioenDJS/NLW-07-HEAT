<h1 align="center">NLW 07º HEAT</h1>
<!-- <h1 align="center"><img src="" height="60" width="65" alt="" /> NLW 07º HEAT</h1> -->

<p align="center">
    <img src="https://img.shields.io/static/v1?label=DioenD&message=JS&color=d2cca1&labelColor=757780" alt="DioenD">
    <img src="https://img.shields.io/static/v1?label=NLW&message=07&color=202024&labelColor=41356b" alt="NLW">
    <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/DioenDJS/NLW-07-HEAT" >
</p>

<img src="project.png" alt="image project" />

## Tecnologias Utilizadas no projeto :construction:

- [Node.js](https://nodejs.org/en/) <img align="center" alt="img nodejs" height="20" width="25" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" style="max-width:100%;" />
- [Typescript](https://www.typescriptlang.org/) <img align="center" alt="img typescript" height="20" width="25" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" style="max-width:100%;" />
- [Express](https://expressjs.com/pt-br/) 
- [Ts-node-dev](https://www.npmjs.com/package/ts-node-dev)
- [Axios](https://www.npmjs.com/package/axios)
- [Cors](https://www.npmjs.com/package/cors)
- [Socket.IO](https://socket.io/) <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" height="20" width="23" alt="Nest Logo" />
- [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [Prisma](https://www.prisma.io/) <img src="https://images2.prisma.io/footer-logo.png" height="20" width="65" alt="prisma Logo" /> 
- [DotEnv](https://www.npmjs.com/package/dotenv) <img src="https://raw.githubusercontent.com/motdotla/dotenv/master/dotenv.png" height="20" width="23" alt="Nest Logo" />

## Projeto :computer:
Projeto cria uma autenticação com o github e desenvolve rotas para buscar informações do usuário logado através de middleware gera um filtro de verificação nas rotas on forem necessárias de verificação do token foi utilizado o socket.io para manter uma comunicação aberta entre a API e o front via web socket utiliza o prisma para cria as models do banco e também gerado as migrate. 

### Insomnia:

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Heat&uri=https%3A%2F%2Fraw.githubusercontent.com%2FDioenDJS%2FNLW-07-HEAT%2Fmain%2Fassets%2FInsomnia_2022-01-29.json)
### chamando a rota http://localhost:4000/github 
<img src="assets/rotaauth.png" alt="rota auth" />

### Cria Authenticate User
<img src="assets/authenticateUser.png" alt="rota authenticate User" />

### Cria Create Message
<img src="assets/createMessage.png" alt="rota Create Message" />

### Lista Get 3 last messages
<img src="assets/get3LastMessages.png" alt="rota Get 3 last messages" />

### Lista Profile User.png
<img src="assets/profileUser.png" alt="rota Profile User" />

## Como executar :gear:

- Clone o repositório `https://github.com/DioenDJS/NLW-07-HEAT.git`.
- Install as dependências com o comando `npm install`.
<!-- - Rode o docker  `docker-compose up` para subir a imagem do postgres. -->
- Rode o projeto `npm run dev` para iniciar a aplicação.
- Ao final a aplicação estará disponível em `http://localhost:4000`.

## Dependências do Projetos :card_index_dividers:

> - express
>
> ```npm i express```
>
> ```npm i @types/express -D```

> - typescriot
>
> ```npm i typescript -D```
>
>``` npx tsc --init```

> - ts-node-dev
>
> ```npm i ts-node-dev -D```

> - prisma
>
> ```npm i prisma -D```
>
> ```npx prisma init```

> - dotenv
>
> ```npm i dotenv```

> - axios
>
>```npm i axios```
>
>```npm i @types/axios -D```

> - jsonwebtoken
>
> ```npm i jsonwebtoken```
>
> ```npm i @types/jsonwebtoken -D```

> - socket.io
>
> ```npm i socket.io```
>
> ```npm i @types/socket.io -D```

> - cors
>
> ```npm i cors```
>
> ```npm i @types/cors -D```