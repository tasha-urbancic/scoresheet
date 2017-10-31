exports.seed = function(knex, Promise) {
	return Promise.all([
		knex('templates').returning('id').insert([
			{
				name: 'unearth',
				footer:
					'The game ends at the end of the third Age, after the Conflict tokens have been handed out. Each player totals their civilization points and the player with the highest total is declared the winner. In case of a tie, the player with the most coins in his or her treasury is the winner. A tie on coins is not broken further.'
			}
		])
	]).then(([ templateIds ]) => {
		return Promise.all([
			knex('games').returning('id').insert([
				{
					template_id: templateIds[0]
				}
			]),
			knex('fields').returning('id').insert([
				{
					template_id: templateIds[0],
					name: 'Red Ruins'
				}
			]),
			knex('relationships').returning('id').insert([
				{
					template_id: templateIds[0]
				}
			])
		]).then(([ gamesIds, fieldIds, relationshipIds ]) => {
			return Promise.all([
				knex('players').returning('id').insert([
					{
						name: 'Tasha',
						game_id: gamesIds[0]
					},
					{
						name: 'Mij',
						game_id: gamesIds[0]
					},
					{
						name: 'Jenny',
						game_id: gamesIds[0]
					},
					{
						name: 'Deanna',
						game_id: gamesIds[0]
					}
				]),
				knex('individual_piece_relationships').returning('id').insert([
					{
						relationship_id: relationshipIds[0],
						value: 2
					}
				])
			]).then(([ playerIds, individualPieceRelationshipIds ]) => {
				return Promise.all([
					knex('fields_players').insert([
						{
							field_id: fieldIds[0],
							player_id: playerIds[0],
							value: 2
						}
					]),
					knex('pieces').insert([
						{
							individual_piece_relationship_id: individualPieceRelationshipIds[0],
							field_id: fieldIds[0],
							equality: '=',
							number: 1
						}
					])
					// ,
					// knex('operations').insert([
					//   {
					//     individual_piece_relationship_id: individualPieceRelationshipIds[0],
					//     field_id: fieldIds[0],
					//     operation: 'multiply',
					//     number: 5
					//   }
					// ])
				]);
			});
		});
	});
};
