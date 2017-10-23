import React from "react";

export default function HomePage(props) {
  return (
    <div>
      <p>SOME AWESOME TAGLINE!!!</p>
      <button onClick={e => props.onButtonClick('newScoresheet')}>Make New ScoreSheet</button>
      <div className="template-list">
        <table>
          <thead>
            <tr>
              <th>Games:</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Settlers of Catan</td>
              <td>
                <button>Start Game</button>
              </td>
            </tr>
            <tr>
              <td>Seven Wonders</td>
              <td>
                <button>Start Game</button>
              </td>
            </tr>
            <tr>
              <td>Unearth</td>
              <td>
                <button>Start Game</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

{

  /* <div>
      WELCOME TO THE HOMEPAGE
      <button onClick={e => props.onButtonClick('game')}>GO TO GAME</button>
      <input onKeyUp={e => {
        props.onKeyDown(e.target.value)
        }}></input>
</div> */
}
