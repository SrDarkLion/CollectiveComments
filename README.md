# Collective Comments

![BANNER](banner.png)

## Sobre

O CollectiveComments é um sistema desenvolvido para facilitar o gerenciamento de feedbacks de empresas. Ele permite que organizações coletem, organizem e analisem os comentários de clientes, colaboradores ou parceiros de forma eficiente.

### Principais Funcionalidades

✅ Cadastro de Empresas – As empresas podem se registrar no sistema informando nome e senha, e um código único é gerado automaticamente com base no nome e no ID.

✅ Envio de Feedbacks – Usuários podem enviar feedbacks associados a uma empresa, utilizando o código gerado (em vez de um ID tradicional).

✅ Listagem de Feedbacks – Empresas podem visualizar os feedbacks recebidos com base no código único gerado (para segurança, também é requirido a senha cadastrada pela empresa).

✅ Criptografia de Senhas – As senhas das empresas são armazenadas de forma segura usando hashing, garantindo proteção contra vazamento de dados.

✅ API Segura e Validada – Todas as entradas são validadas para evitar erros e vulnerabilidades, garantindo que apenas dados corretos sejam processados.

✅ Banco de Dados Relacional – A estrutura do banco de dados relaciona empresas e feedbacks usando uma chave única composta pelo nome e parte do UUID, garantindo eficiência na busca e organização das informações.

## 💻 Tecnologias

### Backend

- C#
- .Net
- PostgreSQL
- Swagger
- Postman

### Frontend

- TypeScript
- JavaScript
- Node.js
- Next.js
- CSS
