import React, { Component } from "react";
import openSocket from "socket.io-client";
const io = openSocket("http://localhost:8080");

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

  render() {
    return (
      <div className="container" id="game">
        {!this.state.namesCompleted && (
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
                      values: createZeroArray(this.state.fields.length)
                    });

                    this.props.updatePlayers(this.state.allPlayers);
                    this.setState({ currentPlayer: "" });
                  }
                }}
              />
              <button
                type="submit"
                className="btn btn-default"
                onClick={e => {
                  this.state.allPlayers.push({
                    name: this.state.currentPlayer,
                    values: createZeroArray(this.state.fields.length)
                  });

                  this.props.updatePlayers(this.state.allPlayers);
                  this.setState({ currentPlayer: "" });
                }}
              >
                Add
              </button>
            </div>

            <ul>
              {this.state.allPlayers.map(function(playerObj, i) {
                return <li key={i}>{playerObj.name}</li>;
              })}
            </ul>

            <button
              onClick={e => {
                this.setState({ namesCompleted: true });
              }}
            >
              Start Game
            </button>
          </div>
        )}

        {this.state.namesCompleted && (
          <div className="container">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <td>Players</td>

                  {this.state.fields.map(piece => {
                    return <td>{piece}</td>;
                  })}

                  <td>Total Score</td>
                </tr>
              </thead>

              <tbody>
                {this.props.allPlayers.map((playerObj, i) => {
                  return (
                    <tr>
                      <td>{playerObj.name}</td>
                      {this.state.fields.map((piece, j) => {
                        return (
                          <td>
                            <input
                              className="table-input"
                              value={this.state.allPlayers[i].values[j]}
                              onChange={e => {
                                let allPlayers = [...this.state.allPlayers];
                                allPlayers[i].values[j] = e.target.value;
                                this.setState({ allPlayers });
                                this.props.updatePlayers(allPlayers);
                              }}
                            />
                          </td>
                        );
                      })}
                      <td>0</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <button className="btn btn-default">Compute Winner</button>
          </div>
        )}
      </div>
    );
  }
}

{
  /* <h3>Template ID: {match.params.templateId}</h3>
<h3>Game ID: {match.params.id}</h3> */
}
