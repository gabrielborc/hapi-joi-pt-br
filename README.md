# Hapi Joi / PT-BR

Traduzir mensagens de validação do "@hapi/joi" para Portugues Brasil

## Conteúdo

- [Instalação](#instalação)
- [Modo de uso](#modo-de-uso)


## Instalação

Antes de instalar, faça o download e instale o Node.js. 

Se este for um projeto totalmente novo, crie um package.json primeiro com o comando npm init

```
$ npm install joiptbr
```

## Modo de uso

### Modo simples

Aqui você vai usar a versão do joi que este pacote tem como depedência, assim não precisa configurar a tradução.

Exemplo: 

```js
const Joi = require('joiptbr');

const schema = Joi.object({
    id: Joi.number()
        .integer()
        .min(1)
        .required(),
        
    child_id: Joi.number()
        .integer()
        .min(1)
        .required()
});

const result = schema.validate({ id: 1 });

console.log(result);
```

### Modo customizado

Neste modo você pode usar a versão do Joi que desejar, porem vai ser necessário configurar a tradução.

Exemplo: 

```js
const Joi = require('@hapi/joi');
const { message } = require('joiptbr');

const CustomJoi = Joi.defaults((schema) => {
    return schema.options({ messages })
});

const schema = CustomJoi.object({
    id: Joi.number()
        .integer()
        .min(1)
        .required(),
        
    child_id: Joi.number()
        .integer()
        .min(1)
        .required()
});

const result = schema.validate({ id: 1 });

console.log(result);
```