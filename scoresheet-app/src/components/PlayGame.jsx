import React, { Component } from 'react';
import openSocket from 'socket.io-client';

import computeTotals from '../computeTotals';

const ipAddress = document.location.origin.split('/')[2].split(':')[0];

const io = openSocket(`http://${ipAddress}:8080`);
import NavBar from '../components/NavBar.jsx';

function createZeroArray(num) {
  let arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(0);
  }
  return arr;
}

function toTitleCase(str) {
  str = `${str}`;
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

function toUpper(str) {
	str = `${str}`;
	return str.toUpperCase();
}

export default class PlayGame extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentPlayer: '',
			namesCompleted: false
		};

		io.on('sending new state', (newState) => {
			console.log('new state received');
			console.log(newState);
			this.props.updatePlayers(newState.newState);
		});
	}

	componentDidMount() {
		// trigger join room
		console.log('PROPS: ', this.props);
		let urlArray = this.props.location.pathname.split('/');
		let gameID = urlArray[urlArray.length - 1];
		this.props.getGame(gameID);
		console.log('GAME ID: ', gameID);
		io.emit('room', { room: gameID });
	}

	componentWillUnmount() {
		// trigger leave room
		console.log('PROPS ON LEAVE: ', this.props);
		let urlArray = this.props.location.pathname.split('/');
		let gameID = urlArray[urlArray.length - 1];
		console.log('GAME ID ON LEAVE: ', gameID);
		io.emit('leave', { room: gameID });
	}

	updateAllPlayersWithNewInput(tableState) {
		console.log('table state has changed');
		let urlArray = this.props.location.pathname.split('/');
		let gameID = urlArray[urlArray.length - 1];
		io.emit('new input added', { room: gameID, newState: tableState });
	}

	calculateScore(playerValues, gameInfo) {
		let totalScore = 0;
		totalScore += computeTotals.piecesTotal(playerValues, gameInfo.fields, gameInfo.pieces);
		totalScore += computeTotals.operationsTotal(playerValues, gameInfo.fields, gameInfo.operations);
		console.log('pieces total:', computeTotals.piecesTotal(playerValues, gameInfo.fields, gameInfo.pieces));
		console.log(
			'operations total:',
			computeTotals.operationsTotal(playerValues, gameInfo.fields, gameInfo.operations)
		);
		console.log('totalScore', totalScore);
		return totalScore;
	}

	render() {
		return (
			<div id="gamepage">
				<NavBar />
				<div className="container" id="game">
					<div className="row">
						<h2>{toUpper(this.props.templateInfo.name)}</h2>
					</div>
					<div className="form-inline">
						<label className="sr-only" htmlFor="inlineFormInput">
							New Player
						</label>
            <div className="form-inline">
						<input
							type="text"
							className="form-control 
                         enter-name"
							placeholder="Enter new player"
							value={this.state.currentPlayer}
							onChange={(e) => {
								this.setState({ currentPlayer: e.target.value });
							}}
							onKeyDown={(e) => {
								if (e.keyCode === 13) {
									const newPlayer = {
										name: this.state.currentPlayer,
										values: createZeroArray(this.props.fields.length),
										score: 0
									};
									const allPlayers = [ ...this.props.allPlayers, newPlayer ];
									this.props.updatePlayers(allPlayers);
									this.setState({ currentPlayer: '' });
									this.updateAllPlayersWithNewInput(allPlayers);
								}
							}}
						/>
						<button
							type="submit"
							className="btn btn-default"
							onClick={(e) => {
								const newPlayer = {
									name: this.state.currentPlayer,
									values: createZeroArray(this.props.fields.length),
									score: 0
								};
								const allPlayers = [ ...this.props.allPlayers, newPlayer ];
								this.props.updatePlayers(allPlayers);
								this.setState({ currentPlayer: '' });
								this.updateAllPlayersWithNewInput(allPlayers);
							}}
						>
							Add
						</button>
          </div>
					</div>

					<div className="container game-container">
						<table className="table table-hover table-responsive">
							<thead>
								<tr>
									<th className="rotate">
										<div id="player-names">
											<span>Players</span>
										</div>
									</th>
									{this.props.fields.map((piece) => {
										return (
											<th className="rotate" key={piece.name}>
												<div>
													<span>{piece.name}</span>
												</div>
											</th>
										);
									})}

									{
										<th className="rotate">
											<div id="total-score">
												<span>Total</span>
											</div>
										</th>
									}
								</tr>
							</thead>

							<tbody>
								{this.props.allPlayers.map((playerObj, i) => {
									return (
										<tr key={playerObj.name}>
											<th className="bordered-rows player-name">{playerObj.name}</th>
											{this.props.fields.map((piece, j) => {
												return (
													<td key={piece.name} className="bordered-rows">
														<input
															className="table-input form-control score-input"
															value={this.props.allPlayers[i].values[j]}
															onChange={(e) => {
																let allPlayers = [ ...this.props.allPlayers ];
																allPlayers[i].values[j] = Number(e.target.value) || 0;
																console.log('this player updated: ', allPlayers[i]);
																allPlayers[i].score = this.calculateScore(
																	allPlayers[i].values,
																	this.props.gameInfo
																);
																this.props.updatePlayers(allPlayers);
																this.updateAllPlayersWithNewInput(allPlayers);
															}}
														/>
													</td>
												);
											})}
											<td className="bordered-rows player-score">{parseInt(playerObj.score)}</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
					<div className="row footer-note">
						<div className="form-inline">
							{this.props.gameInfo.templateInfo.footer !== '' && (
								<div className="panel panel-default">
									<div className="panel-body">{this.props.templateInfo.footer}</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
