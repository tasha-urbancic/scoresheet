import React from 'react';

import TemplateList from '../containers/TemplateList.jsx';

export default function HomePage() {
  return (
    <div>
      <p>SOME AWESOME TAGLINE!!!</p>
      <button onClick={e => props.onButtonClick('newScoresheet')}>Make New ScoreSheet</button>
      <div className="template-list">
        <TemplateList />
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
