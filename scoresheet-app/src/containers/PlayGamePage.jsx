// gameplay page html goes here

// include navbar component

// include template_render component
import React from "react";

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

export default function ScoreSheet(props) {
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
    </div>
  );
}
