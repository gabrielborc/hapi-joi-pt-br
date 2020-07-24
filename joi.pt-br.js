const Joi = require('@hapi/joi');
const messages = require('./messages');

const CustomJoi = Joi.defaults((schema) => {
    return schema.options({ messages })
 });

module.exports = CustomJoi;
