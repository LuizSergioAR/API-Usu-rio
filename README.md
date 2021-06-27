# API Usuário
----

## Descrição

**Objetivo**: Desenvolver uma API para gerenciar um CRUD de usuário, o banco escolhido para a integração foi o MongoDB.

Obs.: o banco foi hospedado online, com 3 usuários cadastrados.

----

### Rotas Read

- Retorna todos os usuários cadastrados

> Método: GET
>
> Endpoint: http://localhost:3000/Usuario/get

- Retorna o usuário a partir do ID correspondente

> Método: GET
>
> Endpoint: http://localhost:3000/Usuario/get/<id\> 

- Retorna um Array de usuário filtrados pelos campos ``nome`` e/ou ``sobrenome``

> Método: GET
> 
> Endpoint: http://localhost:3000/Usuario/lista 

__Exemplo de corpo__:

```json
{
    "name": "Lucas",
    "lastName": "Vitor"
}
```
 
- Retorna nome, sobrenome e apelido do usuário
 
> Método: GET
> 
> Endpoint: http://localhost:3000/Usuario/get/nick/<nickname\>
 
----
 
### Rotas Create

- Criar um usuário
 
> Método: POST
> 
> Endpoint: http://localhost:3000/Usuario/post
 
__Exemplo de corpo__:

```json
{
    "name": "Teste",
    "lastName": "Teste",
    "nickname": "Teste",
    "email": "Teste@gmail.com",
    "bio": "gosta de Teste"
}
```

----

### Rotas Update
 
- Atualizar todos os dados do usuário
 
> Método: PUT
> 
> Endpoint: http://localhost:3000/Usuario/put/<id\> 
 
__Exemplo de corpo__:

```json
{
    "name": "Teste2",
    "lastName": "Teste2",
    "nickname": "Teste2",
    "email": "Teste2@gmail.com",
    "bio": "gosta de Teste2"
}
```
- Atualizar o sobrenome e o e-mail do usuário
 
> Método: PUT
> 
> Endpoint: http://localhost:3000/Usuario/put/userUpdate/<id\>
 
__Exemplo de corpo__:

```json
{
    "lastName": "Algusto",
    "email": "jucagol1022@gmail.com"
}
```
 
- Atualizar o apelido do usuário
 
> Método: PUT
> 
> Endpoint: http://localhost:3000/Usuario/put/nickChange/<id\>
 
__Exemplo de corpo__:

```json
{
    "nickname": "agustinho"
}
```
 
----
 
### Rotas Delete
 
- Remover o usuário
 
> Método : DELETE
> 
> Endpoint: http://localhost:3000/Usuario/delete/<id\>
 
 
 
 
 

 

