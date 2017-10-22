exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('templates')
      .returning('id')
      .insert([
        {
          name: 'unearth',
          footer: 'extra rules for unearth!'
        }
      ])
  ]).then(([templateIds]) => {
    return Promise.all([
      knex('games')
        .returning('id')
        .insert([
          {
            template_id: templateIds[0]
          }
        ]),
      knex('fields')
        .returning('id')
        .insert([
          {
            template_id: templateIds[0],
            name: 'Red Ruins'
          },
          {
            template_id: templateIds[0],
            name: 'Green Ruins'
          },
          {
            template_id: templateIds[0],
            name: 'Blue Ruins'
          },
          {
            template_id: templateIds[0],
            name: 'Purple Ruins'
          },
          {
            template_id: templateIds[0],
            name: 'Lavender Ruins'
          },
          {
            template_id: templateIds[0],
            name: 'Wonders Count'
          },
          {
            template_id: templateIds[0],
            name: 'Wonders Raw Points'
          },
          {
            template_id: templateIds[0],
            name: 'Total'
          }
        ]),
      knex('relationships')
        .returning('id')
        .insert([
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
    ]).then(([gamesIds, fieldIds, relationshipIds]) => {
      return Promise.all([
        knex('players')
          .returning('id')
          .insert([
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
        knex('individual_piece_relationships')
          .returning('id')
          .insert([
            {
              relationship_id: relationshipIds[0],
              value: 2
            },
            {
              relationship_id: relationshipIds[1],
              value: 2
            },
            {
              relationship_id: relationshipIds[2],
              value: 2
            },
            {
              relationship_id: relationshipIds[3],
              value: 2
            },
            {
              relationship_id: relationshipIds[4],
              value: 2
            },
            {
              relationship_id: relationshipIds[5],
              value: 4
            },
            {
              relationship_id: relationshipIds[6],
              value: 4
            },
            {
              relationship_id: relationshipIds[7],
              value: 4
            },
            {
              relationship_id: relationshipIds[8],
              value: 4
            },
            {
              relationship_id: relationshipIds[9],
              value: 4
            },
            {
              relationship_id: relationshipIds[10],
              value: 6
            },
            {
              relationship_id: relationshipIds[11],
              value: 6
            },
            {
              relationship_id: relationshipIds[12],
              value: 6
            },
            {
              relationship_id: relationshipIds[13],
              value: 6
            },
            {
              relationship_id: relationshipIds[14],
              value: 6
            },
            {
              relationship_id: relationshipIds[15],
              value: 8
            },
            {
              relationship_id: relationshipIds[16],
              value: 8
            },
            {
              relationship_id: relationshipIds[17],
              value: 8
            },
            {
              relationship_id: relationshipIds[18],
              value: 8
            },
            {
              relationship_id: relationshipIds[19],
              value: 8
            },
            {
              relationship_id: relationshipIds[20],
              value: 10
            },
            {
              relationship_id: relationshipIds[21],
              value: 10
            },
            {
              relationship_id: relationshipIds[22],
              value: 10
            },
            {
              relationship_id: relationshipIds[23],
              value: 10
            },
            {
              relationship_id: relationshipIds[24],
              value: 10
            },
            {
              relationship_id: relationshipIds[25],
              value: 5
            },
            {
              relationship_id: relationshipIds[26],
              value: 3
            },
            {
              relationship_id: relationshipIds[27],
              value: 1
            }
          ])
      ]).then(([playerIds, individualPieceRelationshipIds]) => {
        return Promise.all([
          knex('fields_players').insert([
            {
              field_id: fieldIds[0],
              player_id: playerIds[0],
              value: 2
            },
            {
              field_id: fieldIds[1],
              player_id: playerIds[0],
              value: 2
            },
            {
              field_id: fieldIds[2],
              player_id: playerIds[0],
              value: 1
            },
            {
              field_id: fieldIds[3],
              player_id: playerIds[0],
              value: 0
            },
            {
              field_id: fieldIds[4],
              player_id: playerIds[0],
              value: 0
            },
            {
              field_id: fieldIds[5],
              player_id: playerIds[0],
              value: 4
            },
            {
              field_id: fieldIds[6],
              player_id: playerIds[0],
              value: 16
            },
            {
              field_id: fieldIds[0],
              player_id: playerIds[1],
              value: 1
            },
            {
              field_id: fieldIds[1],
              player_id: playerIds[1],
              value: 1
            },
            {
              field_id: fieldIds[2],
              player_id: playerIds[1],
              value: 1
            },
            {
              field_id: fieldIds[3],
              player_id: playerIds[1],
              value: 1
            },
            {
              field_id: fieldIds[4],
              player_id: playerIds[1],
              value: 1
            },
            {
              field_id: fieldIds[5],
              player_id: playerIds[1],
              value: 1
            },
            {
              field_id: fieldIds[6],
              player_id: playerIds[1],
              value: 3
            },
            {
              field_id: fieldIds[0],
              player_id: playerIds[2],
              value: 2
            },
            {
              field_id: fieldIds[1],
              player_id: playerIds[2],
              value: 3
            },
            {
              field_id: fieldIds[2],
              player_id: playerIds[2],
              value: 0
            },
            {
              field_id: fieldIds[3],
              player_id: playerIds[2],
              value: 0
            },
            {
              field_id: fieldIds[4],
              player_id: playerIds[2],
              value: 0
            },
            {
              field_id: fieldIds[5],
              player_id: playerIds[2],
              value: 2
            },
            {
              field_id: fieldIds[6],
              player_id: playerIds[2],
              value: 10
            },
            {
              field_id: fieldIds[0],
              player_id: playerIds[3],
              value: 0
            },
            {
              field_id: fieldIds[1],
              player_id: playerIds[3],
              value: 1
            },
            {
              field_id: fieldIds[2],
              player_id: playerIds[3],
              value: 0
            },
            {
              field_id: fieldIds[3],
              player_id: playerIds[3],
              value: 5
            },
            {
              field_id: fieldIds[4],
              player_id: playerIds[3],
              value: 0
            },
            {
              field_id: fieldIds[5],
              player_id: playerIds[3],
              value: 1
            },
            {
              field_id: fieldIds[6],
              player_id: playerIds[3],
              value: 6
            },
            {
              field_id: fieldIds[7],
              player_id: playerIds[0],
              value: 35
            },
            {
              field_id: fieldIds[7],
              player_id: playerIds[1],
              value: 18
            },
            {
              field_id: fieldIds[7],
              player_id: playerIds[2],
              value: 28
            },
            {
              field_id: fieldIds[7],
              player_id: playerIds[3],
              value: 38
            }
          ]),
          knex('pieces').insert([
            {
              individual_piece_relationship_id:
                individualPieceRelationshipIds[0],
              field_id: fieldIds[0],
              equality: 'equal',
              number: 1
            },
            {
              individual_piece_relationship_id:
                individualPieceRelationshipIds[1],
              field_id: fieldIds[1],
              equality: 'equal',
              number: 1
            },
            {
              individual_piece_relationship_id:
                individualPieceRelationshipIds[2],
              field_id: fieldIds[2],
              equality: 'equal',
              number: 1
            },
            {
              individual_piece_relationship_id:
                individualPieceRelationshipIds[3],
              field_id: fieldIds[3],
              equality: 'equal',
              number: 1
            },
            {
              individual_piece_relationship_id:
                individualPieceRelationshipIds[4],
              field_id: fieldIds[4],
              equality: 'equal',
              number: 1
            },
            {
              individual_piece_relationship_id:
                individualPieceRelationshipIds[5],
              field_id: fieldIds[0],
              equality: 'equal',
              number: 2
            },
            {
              individual_piece_relationship_id:
                individualPieceRelationshipIds[6],
              field_id: fieldIds[1],
              equality: 'equal',
              number: 2
            },
            {
              individual_piece_relationship_id:
                individualPieceRelationshipIds[7],
              field_id: fieldIds[2],
              equality: 'equal',
              number: 2
            },
            {
              individual_piece_relationship_id:
                individualPieceRelationshipIds[8],
              field_id: fieldIds[3],
              equality: 'equal',
              number: 2
            },
            {
              individual_piece_relationship_id:
                individualPieceRelationshipIds[9],
              field_id: fieldIds[4],
              equality: 'equal',
              number: 2
            },
            {
              individual_piece_relationship_id:
                individualPieceRelationshipIds[10],
              field_id: fieldIds[0],
              equality: 'equal',
              number: 3
            },
            {
              individual_piece_relationship_id:
                individualPieceRelationshipIds[11],
              field_id: fieldIds[1],
              equality: 'equal',
              number: 3
            },
            {
              individual_piece_relationship_id:
                individualPieceRelationshipIds[12],
              field_id: fieldIds[2],
              equality: 'equal',
              number: 3
            },
            {
              individual_piece_relationship_id:
                individualPieceRelationshipIds[13],
              field_id: fieldIds[3],
              equality: 'equal',
              number: 3
            },
            {
              individual_piece_relationship_id:
                individualPieceRelationshipIds[14],
              field_id: fieldIds[4],
              equality: 'equal',
              number: 3
            },
            {
              individual_piece_relationship_id:
                individualPieceRelationshipIds[15],
              field_id: fieldIds[0],
              equality: 'equal',
              number: 4
            },
            {
              individual_piece_relationship_id:
                individualPieceRelationshipIds[16],
              field_id: fieldIds[1],
              equality: 'equal',
              number: 4
            },
            {
              individual_piece_relationship_id:
                individualPieceRelationshipIds[17],
              field_id: fieldIds[2],
              equality: 'equal',
              number: 4
            },
            {
              individual_piece_relationship_id:
                individualPieceRelationshipIds[18],
              field_id: fieldIds[3],
              equality: 'equal',
              number: 4
            },
            {
              individual_piece_relationship_id:
                individualPieceRelationshipIds[19],
              field_id: fieldIds[4],
              equality: 'equal',
              number: 4
            },
            {
              individual_piece_relationship_id:
                individualPieceRelationshipIds[20],
              field_id: fieldIds[0],
              equality: 'equal',
              number: 5
            },
            {
              individual_piece_relationship_id:
                individualPieceRelationshipIds[21],
              field_id: fieldIds[1],
              equality: 'equal',
              number: 5
            },
            {
              individual_piece_relationship_id:
                individualPieceRelationshipIds[22],
              field_id: fieldIds[2],
              equality: 'equal',
              number: 5
            },
            {
              individual_piece_relationship_id:
                individualPieceRelationshipIds[23],
              field_id: fieldIds[3],
              equality: 'equal',
              number: 5
            },
            {
              individual_piece_relationship_id:
                individualPieceRelationshipIds[24],
              field_id: fieldIds[4],
              equality: 'equal',
              number: 5
            },
            {
              individual_piece_relationship_id:
                individualPieceRelationshipIds[25],
              field_id: fieldIds[0],
              equality: 'equal',
              number: 1
            },
            {
              individual_piece_relationship_id:
                individualPieceRelationshipIds[25],
              field_id: fieldIds[1],
              equality: 'equal',
              number: 1
            },
            {
              individual_piece_relationship_id:
                individualPieceRelationshipIds[25],
              field_id: fieldIds[2],
              equality: 'equal',
              number: 1
            },
            {
              individual_piece_relationship_id:
                individualPieceRelationshipIds[25],
              field_id: fieldIds[3],
              equality: 'equal',
              number: 1
            },
            {
              individual_piece_relationship_id:
                individualPieceRelationshipIds[25],
              field_id: fieldIds[4],
              equality: 'equal',
              number: 1
            },
            {
              individual_piece_relationship_id:
                individualPieceRelationshipIds[26],
              field_id: fieldIds[5],
              equality: 'larger-than-equal',
              number: 3
            },
            {
              individual_piece_relationship_id:
                individualPieceRelationshipIds[27],
              field_id: fieldIds[6],
              equality: 'equal',
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
