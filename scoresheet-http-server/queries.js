require('dotenv').config();
const knexConfig = require('./knexfile');
const ENV = process.env.ENV || 'development';
const knex = require('knex')(knexConfig[ENV]);
const knexLogger = require('knex-logger');

module.exports = {
	createNewTemplateInstance: function(templateName, templateNote) {
		return knex('templates').insert({ name: templateName, footer: templateNote }).returning([ 'id' ]);
	},
	createTemplateField: function(field, templateId) {
		return knex('fields').insert({ name: field, template_id: templateId }).returning([ 'name', 'id' ]);
	},
	createNewRelationshipInstance: function(templateId) {
		return knex('relationships').insert({ template_id: templateId }).returning([ 'id' ]);
	},
	createNewPieceRelationshipInstance: function(relationshipId, value) {
		return knex('individual_piece_relationships')
			.insert({ relationship_id: relationshipId, value: value })
			.returning([ 'id' ]);
	},
	createNewPieceInstance: function(IPRId, fieldId, equality, number) {
		return knex('pieces')
			.insert({
				individual_piece_relationship_id: IPRId,
				field_id: fieldId,
				equality: equality,
				number: number
			})
			.returning([ 'id' ]);
	},
	createNewOperationInstance: function(IPRId, fieldId, operation, number) {
		return knex('operations')
			.insert({
				individual_piece_relationship_id: IPRId,
				field_id: fieldId,
				operator: operation,
				number: number
			})
			.returning([ 'id' ]);
	},
	createNewGameInstance: function(templateId) {
		return knex('games').insert({ template_id: templateId }).returning([ 'id', 'template_id' ]);
	},
	getFields: function(templateId) {
		return knex('templates')
			.join('fields', 'templates.id', 'fields.template_id')
			.where('templates.id', templateId)
			.select('fields.name');
	},
	getTemplateInfo: function(templateId) {
		return knex('templates').select('name', 'footer').where('templates.id', templateId);
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
			.join('pieces', 'individual_piece_relationships.id', 'pieces.individual_piece_relationship_id')
			.join('fields', 'pieces.field_id', 'fields.id')
			.select(
				'individual_piece_relationships.relationship_id',
				'individual_piece_relationships.value',
				'pieces.equality',
				'pieces.number',
				'pieces.field_id',
				'fields.name'
			);
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
			.join('operations', 'individual_piece_relationships.id', 'operations.individual_piece_relationship_id')
			.join('fields', 'operations.field_id', 'fields.id')
			.select(
				'individual_piece_relationships.relationship_id',
				'operations.field_id',
				'fields.name',
				'operations.operator',
				'operations.number'
			);
	},
	allTemplateOperations: function(templateId) {
		return knex('relationships')
			.join('templates', 'relationships.template_id', 'templates.id')
			.where('templates.id', templateId)
			.join(
				'individual_piece_relationships',
				'relationships.id',
				'individual_piece_relationships.relationship_id'
			)
			.join('operations', 'individual_piece_relationships.id', 'operations.individual_piece_relationship_id')
			.join('fields', 'operations.field_id', 'fields.id');
	},
	getTemplates: function() {
		return knex.from('templates');
	},
	getGameTemplate: function(gameId) {
		return knex('games').select('template_id').where('games.id', gameId);
	}
};
