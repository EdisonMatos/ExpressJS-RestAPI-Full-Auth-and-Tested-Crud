# 🚀 ExpressJS RestAPI - CRUD com Autenticação e Testes

## 📜 Descrição

Este repositório contém uma API Restful desenvolvida com Express.js, incluindo funcionalidades de CRUD (Create, Read, Update, Delete), autenticação de usuários e testes automatizados utilizando o framework Jest.

<br>

## 🛠️ Tecnologias Utilizadas

- **Node.js e npm:** Ambiente de execução e gerenciador de pacotes para JavaScript.
- **Express:** Framework para construção de aplicativos web em Node.js.
- **JWT Token:** Json Web Tokens para autenticações.
- **Jest:** Framework de testes em JavaScript.

## Soon

- **MongoDB Database**
- **CRUD authentication**
- **CRUD tests**

<br>

## 📋 Pré-requisitos  

- **Node.js e npm:** Baixe em [https://nodejs.org/](https://nodejs.org/).
- **Git:** Baixe em [https://git-scm.com/](https://git-scm.com/).

<br>

## ⚙️ Configuração do Projeto

1. **Clonar o Repositório:**

    ```bash
    git clone https://github.com/EdisonMatos/ExpressJS-RestAPI-Full-Auth-and-Tested-Crud.git
    cd ExpressJS-RestAPI-Full-Auth-and-Tested-Crud
    ```

2. **Instalar Dependências:**

    ```bash
    npm install
    ```

3. **Configuração do Ambiente**

   Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

   ```env
   SECRET_KEY=chave_secreta_para_jwt
   ```

4. **Iniciar o Projeto**

    ```bash
    npm start
    ```

5. Acesse [http://localhost:3000](http://localhost:3000).

<br>

## 🧪 Testes com Jest

O projeto utiliza o framework de testes Jest para garantir a robustez do código. Para executar os testes, utilize o seguinte comando:

```bash
npm test
```

Este comando irá rodar todos os testes automatizados presentes no diretório `tests`.

<br>

## 📄 Endpoints

A API oferece os seguintes endpoints:

### 1. Criação de Usuário

Endpoint para criar um novo usuário.

```typescript
POST /users

// Exemplo de Payload
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "securepassword"
}
```

### 2. Autenticação de Usuário

Endpoint para autenticar um usuário.

```typescript
POST /auth

// Exemplo de Payload
{
  "email": "john.doe@example.com",
  "password": "securepassword"
}
```

### 3. Listagem de Usuários

Endpoint para listar todos os usuários.

```typescript
GET /users
```

### 4. Detalhes de um Usuário

Endpoint para obter detalhes de um usuário específico.

```typescript
GET /users/:id
```

### 5. Atualização de Usuário

Endpoint para atualizar os detalhes de um usuário.

```typescript
PUT /users/:id

// Exemplo de Payload
{
  "name": "John Smith"
}
```

### 6. Exclusão de Usuário

Endpoint para excluir um usuário.

```typescript
DELETE /users/:id
```

### 7. Status do Servidor

Endpoint para verificar o status do servidor.

```typescript
GET /

// Resposta esperada
{
  "status": "Servidor rodando."
}
```

<br>

## 🧑‍💻 Autor

Este projeto foi desenvolvido por Edison Matos.

![Edison Matos](https://avatars.githubusercontent.com/u/17342047?s=200)

Edison Matos é um entusiasta da tecnologia, desenvolvedor backend de software e apaixonado por criar soluções inovadoras.<br>
Saiba mais sobre no [GitHub](https://github.com/EdisonMatos) para descobrir mais projetos e colaborações.

<br>

## 📄 Licença

Este projeto é licenciado sob a Licença MIT.
