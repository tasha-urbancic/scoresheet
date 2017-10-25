import React, { Component } from 'react';

const defaultPieces = [
  "yellow card",
  "red card",
  "orange card",
  "blue coin",
  "green coin",
  "purple coin"
];

// let temp = [];
// this.state.allPlayers.map(i => {
//   let temp2 = [];
//   this.state.fields.map(j => {
//     temp2.push(0);
//   });
//   temp.push(temp);
// })

// const players = ["mary", "max", "rebecca", "felix"];

export default class PlayGame extends Component {
  
  constructor(props) {
    super(props);
    this.state= {
      currentPlayer: '',
      allPlayers: [],
      fields: defaultPieces,
      gameValues: []
    }
  }
  
  render() {
    return (
      <div>

      <h3>New Player:</h3>

        <div class="input-group">
          <input placeholder="Enter new player name:"
            value={this.state.currentPlayer}
            onChange={e => {
              this.setState({ currentPlayer: e.target.value });
            }}
            onKeyDown={e => {
              if (e.keyCode === 13) {
                this.state.allPlayers.push(this.state.currentPlayer);
                this.props.updatePlayers(this.state.allPlayers);
                this.setState({currentPlayer:''});
              }
            }} 
          >
          </input>

          <button onClick={e => {
            this.state.allPlayers.push(this.state.currentPlayer);
            this.props.updatePlayers(this.state.allPlayers);
            this.setState({currentPlayer:''});
          }}>
          Add Player
          </button>
        </div>

        <table>

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
            {this.props.allPlayers.map((player, i) => {
              return (
                <tr>
                  <td>{player}</td>
                  {this.state.fields.map((piece, j) => {
                    return (
                      <td contentEditable="true">
                      </td>
                    )
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

// table: {
//   piece: {
//     name: 
//   }
// }

/* onChange={ e => {
  const gameValues = [...this.state.gameValues];
  gameValues[i][j] = e.target.value;
  this.setState({
      gameValues
  });
  console.log('this.state.gameValues: ', this.state.gameValues);
}} */