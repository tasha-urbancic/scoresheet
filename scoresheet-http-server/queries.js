require('dotenv').config();
const knexConfig = require('./knexfile');
const ENV = process.env.ENV || 'development';
const knex = require('knex')(knexConfig[ENV]);
const knexLogger = require('knex-logger');

module.exports = {
  getFields: function(templateId) {
    return knex('templates')
      .join('fields', 'templates.id', 'fields.template_id')
      .where('templates.id', templateId);
  },
  getTemplateInfo: function(templateId) {
    return knex('templates')
      .select()
      .where('templates.id', templateId);
  },
  // getTemplateRules: function(templateId) {
  //   return knex('templates').where('templates.id', templateId);
  // },
  getTemplates: function() {
    return knex('templates').select('name');
  }
};
