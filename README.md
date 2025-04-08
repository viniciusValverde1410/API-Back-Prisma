# API-Back-Prisma

Este projeto é uma API desenvolvida com Node.js, Express e Prisma para gerenciar tarefas e notas. A API permite criar, listar, atualizar e excluir tarefas e notas.

## Índice
- [Instalação](#instalação)
- [Uso](#uso)
- [Documentação da API](#documentação-da-api)
    - [Endpoints de Notas](#endpoints-de-notas)
        - [GET /notas](#get-notas)
        - [GET /notas/:id](#get-notasid)
        - [POST /notas](#post-notas)
        - [PUT /notas/:id](#put-notasid)
        - [DELETE /notas/:id](#delete-notasid)

---

## Instalação

1. Clone o repositório:
     ```bash
     git clone https://github.com/seu-usuario/API-Back-Prisma.git
     cd API-Back-Prisma
     ```

2. Instale as dependências:
     ```bash
     npm install
     ```

3. Configure o Prisma:
     - Certifique-se de que o arquivo `prisma/schema.prisma` está configurado corretamente com o banco de dados.
     - Execute as migrações:
         ```bash
         npx prisma migrate dev
         ```
        3. Configure o arquivo `.env`:
            - Crie um arquivo `.env` na raiz do projeto.
            - Adicione as seguintes variáveis de ambiente:
                ```properties
                PORT=4000
                DATABASE_URL="file:./dev.db"
                ```
            - Certifique-se de ajustar as variáveis conforme necessário para o seu ambiente.
4. Inicie o servidor:
     ```bash
     npm run dev
     ```

---

## Uso

Após iniciar o servidor, a API estará disponível em `http://localhost:3000` (ou a porta que você definiu no .env). Utilize ferramentas como o Postman para interagir com os endpoints.

---

## Documentação da API

### Endpoints de Notas

#### **GET /notas**

- **Descrição:** Retorna todas as notas.
- **Exemplo de Requisição:**
    ```bash
    GET http://localhost:3000/notas
    ```
- **Exemplo de Resposta:**
    ```json
    [
        {
            "id": 1,
            "titulo": "Nota 1",
            "conteudo": "Conteúdo da nota 1",
            "cor": "azul"
        },
        {
            "id": 2,
            "titulo": "Nota 2",
            "conteudo": "Conteúdo da nota 2",
            "cor": "verde"
        }
    ]
    ```

---

#### **GET /notas/:id**

- **Descrição:** Retorna uma nota específica pelo ID.
- **Parâmetros:**
    - `id` (path): ID da nota.
- **Exemplo de Requisição:**
    ```bash
    GET http://localhost:3000/notas/1
    ```
- **Exemplo de Resposta:**
    ```json
    {
        "id": 1,
        "titulo": "Nota 1",
        "conteudo": "Conteúdo da nota 1",
        "cor": "azul"
    }
    ```

---

#### **POST /notas**

- **Descrição:** Cria uma nova nota.
- **Corpo da Requisição:**
    ```json
    {
        "titulo": "Nova Nota",
        "conteudo": "Conteúdo da nova nota",
        "cor": "amarelo"
    }
    ```
- **Exemplo de Requisição:**
    ```bash
    POST http://localhost:3000/notas \

    '{
    "titulo": "Nova Nota",
     "conteudo": "Conteúdo da nova nota",
     "cor": "amarelo"
     }'
    ```
- **Exemplo de Resposta:**
    ```json
    {
        "id": 3,
        "titulo": "Nova Nota",
        "conteudo": "Conteúdo da nova nota",
        "cor": "amarelo"
    }
    ```

---

#### **PUT /notas/:id**

- **Descrição:** Atualiza uma nota existente.
- **Parâmetros:**
    - `id` (path): ID da nota.
- **Corpo da Requisição:**
    ```json
    {
        "titulo": "Nota Atualizada",
        "conteudo": "Conteúdo atualizado",
        "cor": "vermelho"
    }
    ```
- **Exemplo de Requisição:**
    ```bash
    PUT http://localhost:3000/notas/1 \
    '{
    "titulo": "Nota Atualizada",
    "conteudo": "Conteúdo atualizado",
    "cor": "vermelho"
    }'
    ```
- **Exemplo de Resposta:**
    ```json
    {
        "id": 1,
        "titulo": "Nota Atualizada",
        "conteudo": "Conteúdo atualizado",
        "cor": "vermelho"
    }
    ```

---

#### **DELETE /notas/:id**

- **Descrição:** Exclui uma nota pelo ID.
- **Parâmetros:**
    - `id` (path): ID da nota.
- **Exemplo de Requisição:**
    ```bash
    DELETE http://localhost:3000/notas/1
    ```
- **Exemplo de Resposta:**
    ```json
    {
        "message": "Nota deletada com sucesso"
    }
    ```

---

Sinta-se à vontade para expandir a API com novos recursos e endpoints!  