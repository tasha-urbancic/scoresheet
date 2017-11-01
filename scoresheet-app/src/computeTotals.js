function findPlayerValueForPiece(fieldName, playerValues, fields) {
	for (var i = 0; i < fields.length; i++) {
		if (fields[i].name === fieldName) {
			return playerValues[i];
		}
	}
}

function sum(arr) {
	let tot = 0;
	arr.forEach((thing) => {
		tot += thing;
	});
	return tot;
}

function isTrue(element, index, array) {
	return element === true;
}

function groupByRelationship(allFields) {
	let relationshipIds = [];
	allFields.forEach((field) => {
		relationshipIds.push(field.relationship_id);
	});

	var uniqueRelationshipIds = Array.from(new Set(relationshipIds));

	let relationships = {};
	for (var i = 0; i < uniqueRelationshipIds.length; i++) {
		relationships[`${uniqueRelationshipIds[i]}`] = [];
	}

	allFields.forEach((field) => {
		for (var key in relationships) {
			if (Number(key) === field.relationship_id) {
				relationships[key].push(field);
			}
		}
	});

	return relationships;
}

module.exports = {
	piecesTotal: function(playerValues, fields, pieces) {
		let relationshipTotals = [];
		const relationships = groupByRelationship(pieces);

		for (let key in relationships) {
			if (relationships[key].length === 1) {
				let piece = relationships[key][0];
				let playerValue = findPlayerValueForPiece(piece.name, playerValues, fields);

				switch (piece.equality) {
					case '=':
						if (piece.number === 0) {
							relationshipTotals.push(0);
						} else {
							relationshipTotals.push(parseInt(playerValue / piece.number) * piece.value);
						}
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
				relationships[key].forEach((piece) => {
					let playerValue = findPlayerValueForPiece(piece.name, playerValues, fields);
					switch (piece.equality) {
						case '=':
							if (piece.number === 0) {
								history.push(0);
								toggles.push(true);
							} else {
								const val = parseInt(playerValue / piece.number) * piece.value;
								history.push(val);
								if (val) {
									toggles.push(true);
								}
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

				if (toggles.every(isTrue)) {
					if (history.length > 0) {
						if (relationshipTotals.length > 24) {
						}
						relationshipTotals.push(Math.min.apply(null, history));
					} else {
						relationshipTotals.push(piece.value);
					}
				}
			}
		}

		return sum(relationshipTotals);
	},
	operationsTotal: function(playerValues, fields, operations) {
		let relationshipTotals = [];
		const relationships = groupByRelationship(operations);

		for (let key in relationships) {
			if (relationships[key].length === 1) {
				let operation = relationships[key][0];
				let playerValue = findPlayerValueForPiece(operation.name, playerValues, fields);

				switch (operation.operator) {
					case '-':
						relationshipTotals.push(playerValue - operation.number);
						break;
					case '+':
						relationshipTotals.push(playerValue + operation.number);
						break;
					case '*':
						relationshipTotals.push(playerValue * operation.number);
						break;
					case '/':
						relationshipTotals.push(playerValue / operation.number);
						break;
					case '^':
						relationshipTotals.push(Math.pow(playerValue, operation.number));
						break;
					default:
						break;
				}
			} else {
				let history = [];
				relationships[key].forEach((operation) => {
					let playerValue = findPlayerValueForPiece(operation.name, playerValues, fields);
					switch (operation.operator) {
						case '-':
							history.push(playerValue - operation.number);
							break;
						case '+':
							history.push(playerValue + operation.number);
							break;
						case '*':
							history.push(playerValue * operation.number);
							break;
						case '/':
							history.push(playerValue / operation.number);
							break;
						case '^':
							history.push(Math.pow(playerValue, operation.number));
							break;
						default:
							break;
					}
				});

				relationshipTotals.push(sum(history));
			}
		}

		return sum(relationshipTotals);
	}
};
