const templateId = 1;
import React, { Component } from "react";
import openSocket from "socket.io-client";
const io = openSocket("http://localhost:8080");
import NavBar from "../components/NavBar.jsx";

const defaultPieces = [
  "yellow card",
  "red card",
  "orange card",
  "blue coin",
  "green coin",
  "purple coin"
];

function createZeroArray(num) {
  let arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(0);
  }
  return arr;
}

export default class PlayGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayer: "",
      allPlayers: [],
      fields: defaultPieces,
      namesCompleted: false
    };

    io.on("sending new state", newState => {
      console.log("new state received");
      console.log(newState);
      this.setState({ allPlayers: newState.newState });
      this.props.updatePlayers(newState.newState);
    });
  }

  componentDidMount() {
    // trigger join room
    console.log("PROPS: ", this.props);
    let urlArray = this.props.location.pathname.split("/");
    let gameID = urlArray[urlArray.length - 1];
    console.log("GAME ID: ", gameID);
    io.emit("room", { room: gameID });
  }

  componentWillUnmount() {
    // trigger leave room
    console.log("PROPS ON LEAVE: ", this.props);
    let urlArray = this.props.location.pathname.split("/");
    let gameID = urlArray[urlArray.length - 1];
    console.log("GAME ID ON LEAVE: ", gameID);
    io.emit("leave", { room: gameID });
  }

  updateAllPlayersWithNewInput(tableState) {
    console.log("table state has changed");
    let urlArray = this.props.location.pathname.split("/");
    let gameID = urlArray[urlArray.length - 1];
    io.emit("new input added", { room: gameID, newState: tableState });
  }

  calculateScore(playerToUpdate) {
    console.log(playerToUpdate);
    let totalScore = 0;
    playerToUpdate.forEach(i => {
      totalScore += i;
    });
    console.log(totalScore);
    return totalScore;
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="container" id="game">
          <div>
            <div className="form-inline">
              <label className="sr-only" htmlFor="inlineFormInput">
                New Player
              </label>
              <input
                type="text"
                className="form-control mb-2 mr-sm-2 mb-sm-0"
                placeholder="enter new player"
                value={this.state.currentPlayer}
                onChange={e => {
                  this.setState({ currentPlayer: e.target.value });
                }}
                onKeyDown={e => {
                  if (e.keyCode === 13) {
                    this.state.allPlayers.push({
                      name: this.state.currentPlayer,
                      values: createZeroArray(this.state.fields.length),
                      score: 0
                    });
                    this.props.updatePlayers(this.state.allPlayers);
                    this.setState({ currentPlayer: "" });
                    this.updateAllPlayersWithNewInput(this.state.allPlayers);
                  }
                }}
              />
              <button
                type="submit"
                className="btn btn-default"
                onClick={e => {
                  this.state.allPlayers.push({
                    name: this.state.currentPlayer,
                    values: createZeroArray(this.state.fields.length),
                    score: 0
                  });
                  this.props.updatePlayers(this.state.allPlayers);
                  this.setState({ currentPlayer: "" });
                  this.updateAllPlayersWithNewInput(this.state.allPlayers);
                }}
              >
                Add
              </button>
            </div>
          </div>

          <div className="container">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <td>Players</td>

                  {this.state.fields.map(piece => {
                    return <td key={piece}>{piece}</td>;
                  })}

                  <td>Total Score</td>
                </tr>
              </thead>

              <tbody>
                {this.props.allPlayers.map((playerObj, i) => {
                  return (
                    <tr key={playerObj.name}>
                      <td>{playerObj.name}</td>
                      {this.state.fields.map((piece, j) => {
                        return (
                          <td key={piece}>
                            <input
                              className="table-input"
                              value={this.state.allPlayers[i].values[j]}
                              onChange={e => {
                                let allPlayers = [...this.state.allPlayers];
                                allPlayers[i].values[j] =
                                  Number(e.target.value) || 0;
                                console.log(
                                  "this player updated: ",
                                  allPlayers[i]
                                );
                                allPlayers[i].score = this.calculateScore(
                                  allPlayers[i].values
                                );

                                this.setState({ allPlayers });
                                this.props.updatePlayers(allPlayers);
                                this.updateAllPlayersWithNewInput(allPlayers);
                              }}
                            />
                          </td>
                        );
                      })}
                      <td>{playerObj.score}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
