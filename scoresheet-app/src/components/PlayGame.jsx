import React, { Component } from 'react';

const testGame = {
  name: "Test Game",
  pieces: [
    "yellow card",
    "red card",
    "orange card",
    "blue coin",
    "green coin",
    "purple coin"
  ]
};

const players = ["mary", "max", "rebecca", "felix"];

export default class PlayGame extends Component {
  
    constructor(props) {
      super(props);
      this.state= {
        currentPlayer: ''
      }
    }
  
  render() {

    return (
      <div>

      <h3>New Player:</h3>
      <input placeholder="Enter new player name:"
        value={this.state.currentPlayer}
        onChange={e => {
          this.setState({ currentPlayer: e.target.value });
          console.log(this.state.currentPlayer);
        }}
        onKeyDown={e => {
          if (e.keyCode === 13) {  
            this.props.addPlayer(this.state.currentPlayer);
            this.setState({currentPlayer:''});
          }
        }} 
      >
      </input>
      <button onClick={e => {
        this.props.addPlayer(this.state.currentPlayer);
        this.setState({currentPlayer: ''});
      }}>
      Add Player
      </button>

        <table>
          <thead>
            <tr>
              <td>Players</td>
              {testGame.pieces.map(i => {
                return <td>{i}</td>;
              })}
              <td>Total Score</td>
            </tr>
          </thead>
          <tbody>
            {players.map(i => {
              return (
                <tr>
                  <td>{i}</td>
                  {testGame.pieces.map(i => {
                    return <td contentEditable="true" />;
                  })}
                  <td>0</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button>Compute Winner</button>

      </div>
    )
  }
}
