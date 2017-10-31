exports.seed = function(knex, Promise) {
	return Promise.all([
		knex('templates').returning('id').insert([
			{
				name: 'Seven Wonders',
				footer:
					'The game ends at the end of the third Age, after the Conflict tokens have been handed out. Each player totals their civilization points and the player with the highest total is declared the winner. In case of a tie, the player with the most coins in his or her treasury is the winner. A tie on coins is not broken further.'
			}
		])
	]).then(([ templateIds ]) => {
		return Promise.all([
			knex('fields').returning('id').insert([
				{
					template_id: templateIds[0],
					name: 'Total Conflict Tokens'
				},
				{
					template_id: templateIds[0],
					name: 'Total Money'
				},
				{
					template_id: templateIds[0],
					name: 'Wonder VP'
				},
				{
					template_id: templateIds[0],
					name: 'Civilian Structures VP'
				},
				{
					template_id: templateIds[0],
					name: 'Commercial Structures VP'
				},
				{
					template_id: templateIds[0],
					name: 'Guilds VP'
				},
				{
					template_id: templateIds[0],
					name: 'Science: Cog'
				},
				{
					template_id: templateIds[0],
					name: 'Science: Tablet'
				},
				{
					template_id: templateIds[0],
					name: 'Science: Compass'
				}
			]),
			knex('relationships').returning('id').insert([
				{
					template_id: templateIds[0]
				},
				{
					template_id: templateIds[0]
				},
				{
					template_id: templateIds[0]
				},
				{
					template_id: templateIds[0]
				},
				{
					template_id: templateIds[0]
				},
				{
					template_id: templateIds[0]
				},
				{
					template_id: templateIds[0]
				},
				{
					template_id: templateIds[0]
				},
				{
					template_id: templateIds[0]
				},
				{
					template_id: templateIds[0]
				}
			])
		]).then(([ fieldIds, relationshipIds ]) => {
			return Promise.all([
				knex('individual_piece_relationships').returning('id').insert([
					{
						relationship_id: relationshipIds[0],
						value: -1
					},
					{
						relationship_id: relationshipIds[1],
						value: 1
					},
					{
						relationship_id: relationshipIds[2],
						value: 1
					},
					{
						relationship_id: relationshipIds[3],
						value: 1
					},
					{
						relationship_id: relationshipIds[4],
						value: 1
					},
					{
						relationship_id: relationshipIds[5],
						value: 1
					},
					{
						relationship_id: relationshipIds[6],
						value: 7
					},
					{
						relationship_id: relationshipIds[7],
						value: 0
					},
					{
						relationship_id: relationshipIds[8],
						value: 0
					},
					{
						relationship_id: relationshipIds[9],
						value: 0
					}
				])
			]).then(([ individualPieceRelationshipIds ]) => {
				return Promise.all([
					knex('pieces').insert([
						{
							individual_piece_relationship_id: individualPieceRelationshipIds[0],
							field_id: fieldIds[0],
							equality: '=',
							number: 1
						},
						{
							individual_piece_relationship_id: individualPieceRelationshipIds[1],
							field_id: fieldIds[1],
							equality: '=',
							number: 3
						},
						{
							individual_piece_relationship_id: individualPieceRelationshipIds[2],
							field_id: fieldIds[2],
							equality: '=',
							number: 1
						},
						{
							individual_piece_relationship_id: individualPieceRelationshipIds[3],
							field_id: fieldIds[3],
							equality: '=',
							number: 1
						},
						{
							individual_piece_relationship_id: individualPieceRelationshipIds[4],
							field_id: fieldIds[4],
							equality: '=',
							number: 1
						},
						{
							individual_piece_relationship_id: individualPieceRelationshipIds[5],
							field_id: fieldIds[5],
							equality: '=',
							number: 1
						},
						{
							individual_piece_relationship_id: individualPieceRelationshipIds[6],
							field_id: fieldIds[6],
							equality: '=',
							number: 1
						},
						{
							individual_piece_relationship_id: individualPieceRelationshipIds[6],
							field_id: fieldIds[7],
							equality: '=',
							number: 1
						},
						{
							individual_piece_relationship_id: individualPieceRelationshipIds[6],
							field_id: fieldIds[8],
							equality: '=',
							number: 1
						},
						{
							individual_piece_relationship_id: individualPieceRelationshipIds[7],
							field_id: fieldIds[6],
							equality: '=',
							number: 0
						},
						{
							individual_piece_relationship_id: individualPieceRelationshipIds[8],
							field_id: fieldIds[7],
							equality: '=',
							number: 0
						},
						{
							individual_piece_relationship_id: individualPieceRelationshipIds[9],
							field_id: fieldIds[8],
							equality: '=',
							number: 0
						}
					]),
					knex('operations').insert([
						{
							individual_piece_relationship_id: individualPieceRelationshipIds[7],
							field_id: fieldIds[6],
							operator: '^',
							number: 2
						},
						{
							individual_piece_relationship_id: individualPieceRelationshipIds[8],
							field_id: fieldIds[7],
							operator: '^',
							number: 2
						},
						{
							individual_piece_relationship_id: individualPieceRelationshipIds[9],
							field_id: fieldIds[8],
							operator: '^',
							number: 2
						}
					])
				]);
			});
		});
	});
};
