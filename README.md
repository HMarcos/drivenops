# <p align = "center"> DrivenOps </p>

<p align="center">
   <img style="width:300px;height:300px" src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f9f0.svg"/>
</p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-HMarcos-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/HMarcos/drivenops?color=4dae71&style=flat-square" />
</p>


##  :clipboard: Descrição

DrivenOps é um projeto em que se aloca uma aplicação bem simples que faz o sorteio de estudantes. O principal objetivo desse projeto é poder praticar as técnicas de **CI/CD** utilizando o *GitHub Actions*, *Docker* e *AWS*.

***

## :computer: Tecnologias e Conceitos

- REST APIs
- Node.js
- TypeScript
- Prisma ORM
- Postgres SQL
- Jest
- SuperTest
- React
- Docker
- GitHub Actions
- AWS

O objetivo desse repositório é implementar as técnicas de **CI/CD** utilizando a cultura **devops**. Assim, para fazer um merge na branch **main** é necessário que um PR passe nos testes e seja aprovado, assim como, o processo de deploy é automatizado contactando um servidor na AWS.

## :rocket: Rotas

### Estudantes

```yml
POST /students
    - Rota para adicionar um estudante.
    - headers: {}
    - body: {
        "name": "Marcos",
    }
```

```yml
GET /students
    - Rota que retorna todos os estudantes cadastrados.
    - headers: {}
    - body: {}
```

```yml
GET /students/random
    - Rota que retorna um estudante aleatório.
    - headers: {}
    - body: {}
```

***

## 🏁 Rodando a aplicação

### Backend

Este projeto foi desenvolvido utilizando **TypeScript**, então certifique-se que você tem a ultima versão estável do [Node.js](https://nodejs.org/en/download/) e [npm](https://www.npmjs.com/) rodando localmente.

Primeiro, clone o repositório na sua maquina:

```
git clone https://github.com/HMarcos/drivenops
```

Em seguida mude para a pasta `backend`:

```
cd back-end
```

Depois, dentro da pasta, rode o seguinte comando para instalar as dependencias.

```
npm install
```

Em seguida, com o arquivo **.env** configurado, rode o seguinte comando para configurar o **Prisma** e a base de dados.

```
npx prisma migrate dev
```

Finalizado o processo, é só inicializar o servidor

```
npm run dev
```

### Frontend

Este projeto foi desenvolvido utilizando **React**, então certifique-se que você tem a ultima versão estável do [Node.js](https://nodejs.org/en/download/) e [npm](https://www.npmjs.com/) rodando localmente.


Mude para a pasta `front-end`:

```
cd front-end
```

Depois, dentro da pasta, rode o seguinte comando para instalar as dependencias.

```
npm install
```

Em seguida, inicialize a aplicação

```
npm run start

```

Lembre-se de ativar o servidor antes! E consulte o arquivo `.env.example` para configurar as variáveis de ambiente.

####  Páginas

No index `/`, se tem acesso ao sorteio de um estudante, já em `/all` é possível listar todos os estudantes cadastrados.