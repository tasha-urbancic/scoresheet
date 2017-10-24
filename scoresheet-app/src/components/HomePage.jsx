import React from 'react';

import TemplateList from '../containers/TemplateList.jsx';

export default function HomePage(props) {
  return (
    <div>
      <p>SOME AWESOME TAGLINE!!!</p>
      <button onClick={e => props.changePage('newScoresheet')}>Make New ScoreSheet</button>
      <button onClick={e => props.changePage('game')}>Start Game</button>
      <div className="template-list">
        <TemplateList />
      </div>
    </div>
  );
}

// {

//   /* <div>
//       WELCOME TO THE HOMEPAGE
//       <button onClick={e => props.onButtonClick('game')}>GO TO GAME</button>
//       <input onKeyUp={e => {
//         props.onKeyDown(e.target.value)
//         }}></input>
// </div> */
// }
