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
        // rules: [{ ...defaultRule }, { ...defaultRule }]
      }
    }
  
  render() {

    return (
      <div>
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

{/* <h3>Template ID: {match.params.templateId}</h3>
<h3>Game ID: {match.params.id}</h3> */}
