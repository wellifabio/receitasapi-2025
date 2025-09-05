# API de Receitas
API criada para aulas de React Native com Node.js e Prisma.

Possui as rotas CRUD básicas para gerenciar receitas.

## Rotas

- `GET /receitas`: Retorna todas as receitas.
- `GET /receitas/:id`: Retorna uma receita específica pelo ID.
- `POST /receitas`: Cria uma nova receita.
- `PUT /receitas/:id`: Atualiza uma receita existente pelo ID.
- `DELETE /receitas/:id`: Remove uma receita pelo ID.

## Tecnologias
- Node.js
- VsCode
- Prisma
- Vercel

## Passos para executar localmente
1. Clone este repositório e abra com o VsCode.
2. Crie o arquivo .env com o Conteúdo a seguir
```js
DATABASE_URL="mysql://root@localhost:3306/receitasapi?schema=public&timezone=UTC
3. Abra o XAMPP e inicie o MySQL
4. Abra o terminal `CMD` ou `bash` do vscode, instale as dependências e faça a migração do banco de dados e inicie a API.
```bash
npm install
npx prisma migrate dev --name init
npm run dev
```
