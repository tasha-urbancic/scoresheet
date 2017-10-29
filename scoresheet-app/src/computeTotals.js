function findPlayerValueForPiece(fieldName, playerValues, fields) {
  for (var i = 0; i < fields.length; i++) {
    if (fields[i].name === fieldName) {
      return playerValues[i];
    }
  }
}

function sum(arr) {
  let tot = 0;
  arr.forEach(thing => {
    tot += thing;
  });
  return tot;
}

function groupByRelationship(pieces) {
  let relationshipIds = [];
  pieces.forEach(piece => {
    relationshipIds.push(piece.relationship_id);
  });

  var uniqueRelationshipIds = Array.from(new Set(relationshipIds));

  let relationships = {};
  for (var i = 0; i < uniqueRelationshipIds.length; i++) {
    relationships[`${uniqueRelationshipIds[i]}`] = [];
  }

  pieces.forEach(piece => {
    for (var key in relationships) {
      if (Number(key) === piece.relationship_id) {
        relationships[key].push(piece);
      }
    }
  });

  console.log('realtionships', relationships);

  return relationships;
}

module.exports = {
  piecesTotal: function(playerValues, fields, pieces) {
    let relationshipTotals = [];

    const relationships = groupByRelationship(pieces);

    for (let key in relationships) {
      if (relationships[key].length === 1) {
        let piece = relationships[key][0];
        let playerValue = findPlayerValueForPiece(
          piece.name,
          playerValues,
          fields
        );

        switch (piece.equality) {
          case '=':
            relationshipTotals.push(
              parseInt(playerValue / piece.number) * piece.value
            );
            break;
          case '>':
            if (playerValue > piece.number) {
              relationshipTotals.push(piece.value);
            }
            break;
          case '<':
            if (playerValue < piece.number) {
              relationshipTotals.push(piece.value);
            }
            break;
          default:
            break;
        }
      }
    }

    console.log('relationshipTotals', relationshipTotals);

    return sum(relationshipTotals);
  }
  // ,
  // operationsTotal: function(playerValues, fields, operations) {
  //   return total;
  // }
};
