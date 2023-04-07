# C214 - T5

Implementação de CRUD em `Javascript` usando a biblioteca `Mongoose` para interagir com um banco de dados `MongoDB`.

## **Requisitos**

É necessario o `Node.js` instalado em seu sistema.

Instale as dependências do projeto com o seguinte comando:

```bash
npm install
```

Em seguida inicie o projeto:

```bash
npm start
```

## **Endpoints**
#### Há um arquivo de exemplo para o Postman (`postman_collection.json`) na raiz do projeto


GET - /movie/list

Body: N/A

GET - /movie/listProducer

Body: 

```json
{
   "produtora": nomeDaProdutora
}
```

GET - /movie/listName

Body:

```json
{
  "nome": nomeDoFilme
}
```

POST - /movie/create

Body:

```json
{
  "nome": nomeDoFilme,
  "produtora": nomeDaProdutora,
  "atores": arrayDeAtores,
  "ano": anoDeEstreia
}
```

PUT - /movie/updateByProducer

Body:

```json
{
  "nome": nomeDoFilme,
  "produtora": nomeDaProdutora
}
```

DELETE - /movie/delete/${nomeDoFilme}

Body: N/A

---

**Eduardo Borges Araujo - GES - 42**