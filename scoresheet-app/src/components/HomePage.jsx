import React from 'react';

export default function HomePage(props) {
  return (
    <div>
      WELCOME TO THE HOMEPAGE
      <button onClick={e => props.onButtonClick('game')}>GO TO GAME</button>
      <input onKeyUp={e => {
        props.onKeyDown(e.target.value)
        }}></input>
    </div>
  );
}
