const messages = {
    'any.custom': '{{#label}} failed custom validation because {{#error.message}}',
    'any.default': '{{#label}} gerou um erro ao executar o método padrão',
    'any.failover': '{{#label}} gerou um erro ao executar o método de failover',
    'any.invalid': '{{#label}} possui um valor inválido',
    'any.only': `{{#label}} deve ser {if(#valids.length == 1, "", "um dos ")}{{#valids}}`,
    'any.ref': '{{#label}} {{#arg}} referências "{{#ref}}" qual {{#reason}}',
    'any.required': `{{#label}} é obrigatório`,
    'any.unknown': '{{#label}} não é permitido',

    'array.base': `{{#label}} deve ser um array`,
    'array.excludes': '{{#label}} contém um valor excluído',
    'array.hasKnown': '{{#label}} não tem pelo menos uma correspondência necessária para o tipo "{#patternLabel}"',
    'array.hasUnknown': '{{#label}} não tem pelo menos uma correspondência necessária',
    'array.includes': '{{#label}} não corresponde a nenhum dos tipos permitidos',
    'array.includesRequiredBoth': '{{#label}} não tem {{#knownMisses}} e {{#unknownMisses}} outros valores necessários',
    'array.includesRequiredKnowns': '{{#label}} não tem {{#knownMisses}}',
    'array.includesRequiredUnknowns': '{{#label}} não tem {{#unknownMisses}} valores necessários',
    'array.length': `{{#label}} deve conter {{#limit}} itens`,
    'array.min': `{{#label}} deve conter pelo menos {{#limit}} itens`,       
    'array.max': `{{#label}} deve conter no máximo {{#limit}} itens`,  
    'array.orderedLength': '{{#label}} deve ter no máximo {{#limit}} itens',
    'array.sort': '{{#label}} deve ser ordenado em {#order} ordenar por {{#by}}',
    'array.sort.mismatching': '{{#label}} não pode ser ordenado devido a tipos incompatíveis',
    'array.sort.unsupported': '{{#label}} não pode ser ordenado devido ao tipo não suportado {#type}',
    'array.sparse': '{{#label}} não deve ser um item de matriz esparsa',
    'array.unique': `{{#label}} tem o valor duplicado`,

    'binary.base': `{{#label}} deve ser um buffer ou uma string`,
    'binary.max': `{{#label}} deve ter no mínimo {{limit}} bytes`,
    'binary.min': `{{#label}} deve ter no máximo {{limit}} bytes`,
    'binary.length': `{{#label}} deve ter exatamente {{limit}} bytes`,

    'boolean.base': `{{#label}} deve ser um boolean`,

    'date.base': '{{#label}} deve ser uma data valida',
    'date.format': '{{#label}} deve estar nesse formato {msg("date.format." + #format) || #format}',
    'date.greater': '{{#label}}deve ser maior que "{{#limit}}"',
    'date.less': '{{#label}} deve ser menor que "{{#limit}}"',
    'date.max': '{{#label}} deve ser no máximo "{{#limit}}"',
    'date.min': '{{#label}} deve ser no mínimo "{{#limit}}"',
    // Messages used in date.format
    'date.format.iso': 'ISO 8601 data',
    'date.format.javascript': 'timestamp ou número em milliseconds',
    'date.format.unix': 'timestamp ou número em seconds',

    'function.arity': '{{#label}} deve ter {{#n}} {if(#n == 1, "argumento", "argumentos")}',
    'function.class': '{{#label}} deve ser uma classe',
    'function.maxArity': '{{#label}} deve ter no máximo {{#n}} {if(#n == 1, "argumento", "argumentos")}',
    'function.minArity': '{{#label}} deve ter no mínimo {{#n}} {if(#n == 1, "argumento", "argumentos")}',

    'object.and': '{{#label}} contém {{#presentWithLabels}} sem seus pares necessários {{#missingWithLabels}}',
    'object.assert': '{{#label}} é inválido porque {if(#subject.key, `"` + #subject.key + `" falhou em ` + (#message || "passar no teste assert"), #message || "o assertion falhou")}',
    'object.base': `{{#label}} deve ser do tipo objeto`,
    'object.instance': '{{#label}} de ser uma instância de "{{#type}}"',
    'object.length': '{{#label}} deve ter {{#limit}} chave{if(#limit == 1, "", "s")}',
    'object.max': '{{#label}} deve ter no máximo {{#limit}} chave{if(#limit == 1, "", "s")}',
    'object.min': '{{#label}} deve ter no mínimo {{#limit}} chave{if(#limit == 1, "", "s")}',
    'object.missing': '{{#label}} deve conter pelo menos um dos {{#peersWithLabels}}',
    'object.nand': '"{{#mainWithLabel}}" não deve existir simultaneamente com {{#peersWithLabels}}',
    'object.oxor': '{{#label}} contém um conflito entre pares exclusivos opcionais {{#peersWithLabels}}',
    'object.pattern.match': '{{#label}} chaves falharam em atender aos requisitos do padrão',
    'object.refType': '{{#label}} deve ser uma referência Joi',
    'object.regex': '{{#label}} deve ser um objeto RegExp',
    'object.rename.multiple': '{{#label}} não pode renomear "{{#from}}" porque várias renomeações estão desabilitadas e outra chave já foi renomeada para "{{#to}}"',
    'object.rename.override': '{{#label}} não pode renomear "{{#from}}" porque a substituição está desativada e o destino "{{#to}}" existe',
    'object.schema': '{{#label}} deve ser um esquema Joi de tipo {{#type}}',
    'object.unknown': '{{#label}} não é permitido',
    'object.with': '"{{#mainWithLabel}}" falta do par necessário "{{#peerWithLabel}}"',
    'object.without': '"{{#mainWithLabel}}" conflito com pares proibidos "{{#peerWithLabel}}"',
    'object.xor': '{{#label}} contém um conflito entre pares exclusivos {{#peersWithLabels}}',

    'number.base': `{{#label}} deve ser um número`,
    'number.greater': '{{#label}} deve ser maior que {{#limit}}',
    'number.infinity': '{{#label}} não pode ser infinito',
    'number.integer': `{{#label}} deve ser um inteiro`,
    'number.less': '{{#label}} deve ser menor que {{#limit}}',
    'number.max': '{{#label}} deve ser no máximo {{#limit}}',
    'number.min': `{{#label}} deve ser no mínimo {{#limit}}`,
    'number.multiple': '{{#label}} deve ser um múltiplo de {{#multiple}}',
    'number.negative': '{{#label}} deve ser um número negativo',
    'number.port': '{{#label}} deve ser uma porta válida',
    'number.positive': '{{#label}} deve ser um número positivo',
    'number.precision': '{{#label}} não deve ter mais do que {{#limit}} casas decimais',
    'number.unsafe': '{{#label}} deve ser um número seguro',            
    
    'string.alphanum': '{{#label}} deve conter apenas caracteres alfanuméricos',
    'string.base': `{{#label}} deve ser uma string`,
    'string.base64': '{{#label}} deve ser uma sequência base64 válida',
    'string.creditCard': '{{#label}} deve ser um cartão de crédito',
    'string.dataUri': '{{#label}} deve ser uma sequência dataUri válida',
    'string.domain': '{{#label}} ter ter um nome de dóminio valido',
    'string.email': '{{#label}} deve ser um email valido',
    'string.empty': `{{#label}} não pode estar em branco`,
    'string.guid': '{{#label}} deve ser um GUID válido',
    'string.hex': '{{#label}} deve conter apenas caracteres hexadecimais',
    'string.hexAlign': '{{#label}} representação decodificada hexadecimal deve ser alinhada por bytes',
    'string.hostname': '{{#label}} deve ser um hostname válido',
    'string.ip': '{{#label}} deve ser um endereço de ip válido com um {{#cidr}} CIDR',
    'string.ipVersion': '{{#label}} deve ser um endereço de ip válido de uma das seguintes versões {{#version}} com um {{#cidr}} CIDR',
    'string.isoDate': '{{#label}} deve esta no formato iso',
    'string.isoDuration': '{{#label}} deve ter uma duração ISO 8601 válida',
    'string.length': '{{#label}} deve ter o tamanho de {{#limit}} caracteres',
    'string.lowercase': '{{#label}} deve conter apenas caracteres minúsculos',
    'string.max': '{{#label}} deve ter no máximo {{#limit}} caracteres',
    'string.min': `{{#label}} deve ter no mínmo {{#limit}} caracteres`,
    'string.normalize': '{{#label}} deve ser unicode normalizado no {{#form}} formulário',
    'string.token': '{{#label}} deve conter apenas caracteres alfanuméricos e underline',
    'string.pattern.base': '{{#label}} com valor "{[.]}" falha ao corresponder ao padrão necessário: {{#regex}}',
    'string.pattern.name': '{{#label}} com valor "{[.]}" falha em corresponder ao {{#name}} padrão',
    'string.pattern.invert.base': '{{#label}} com valor "{[.]}" corresponde ao padrão invertido: {{#regex}}',
    'string.pattern.invert.name': '{{#label}} com valor "{[.]}" corresponde ao invertido {{#name}} padrão',
    'string.trim': '{{#label}} não deve ter espaços em branco à esquerda ou à direita',
    'string.uri': '{{#label}} deve ser uma uri válida',
    'string.uriCustomScheme': '{{#label}} deve ser um uri válido com um esquema que corresponda ao {{#scheme}} padrão',
    'string.uriRelativeOnly': '{{#label}} deve ser um uri relativo válido',
    'string.uppercase': '{{#label}} deve conter apenas caracteres maiúsculos',
    
    'symbol.base': '{{#label}} deve ser um símbolo',
    'symbol.map': '{{#label}} deve ser um dos {{#map}}'
};

module.exports = messages;