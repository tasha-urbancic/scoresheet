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

function isTrue(element, index, array) {
  return element === true;
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

  console.log('relationships', relationships);

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
      } else {
        let toggles = [];
        let history = [];
        relationships[key].forEach(piece => {
          let playerValue = findPlayerValueForPiece(
            piece.name,
            playerValues,
            fields
          );
          switch (piece.equality) {
            case '=':
              const val = parseInt(playerValue / piece.number) * piece.value;
              history.push(val);
              if (val) {
                toggles.push(true);
              }
              break;
            case '>':
              if (playerValue > piece.number) {
                toggles.push(true);
              } else {
                toggles.push(false);
              }
              break;
            case '<':
              if (playerValue < piece.number) {
                toggles.push(true);
              } else {
                toggles.push(false);
              }
              break;
            default:
              break;
          }
        });

        // only add on min amount of matching = sign ones
        // because > and < will not add to total value,
        // just prevent toggles true check from going through

        // case:
        // = 1 blue, = 1 red, > 3 green is worth 5
        // have 3 blue, 2 red and 4 green
        // history = [15, 10]
        // toggles = [true, true, true]
        // relationshipTotals = [...relationshipTotals, 10]
        // if length history is 0 assign value 

        if (toggles.every(isTrue)) {
          if (history.length > 0) {
            if (relationshipTotals.length > 24) {
              console.log('history', history);
              console.log('min', Math.min.apply(null, history));
            }
            relationshipTotals.push(Math.min.apply(null, history));
          } else {
            relationshipTotals.push(piece.value);
          }
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
