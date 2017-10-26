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
  getTemplateRelationshipsPieces: function(templateId) {
    return knex('relationships')
      .join('templates', 'relationships.template_id', 'templates.id')
      .where('templates.id', templateId)
      .join(
        'individual_piece_relationships',
        'relationships.id',
        'individual_piece_relationships.relationship_id'
      )
      .join(
        'pieces',
        'individual_piece_relationships.id',
        'pieces.individual_piece_relationship_id'
      )
      .join('fields', 'pieces.field_id', 'fields.id');
  },
  getTemplateRelationshipsOperations: function(templateId) {
    return knex('relationships')
      .join('templates', 'relationships.template_id', 'templates.id')
      .where('templates.id', templateId)
      .join(
        'individual_piece_relationships',
        'relationships.id',
        'individual_piece_relationships.relationship_id'
      )
      .join(
        'operations',
        'individual_piece_relationships.id',
        'operations.individual_piece_relationship_id'
      )
      .join('fields', 'operations.field_id', 'fields.id');
  },
  getTemplates: function() {
    return knex('name').from('templates');
  }
};
