import React from 'react';
import { Link } from 'react-router-dom';

import TemplateList from '../containers/TemplateList.jsx';

import FilterLink from '../containers/FilterLink.jsx';

export default function HomePage(props) {
  return (
    <div>
      <p>Making board games fun again!</p>
      <button>
        <Link to="/template/new">CLICK HERE, Yo!</Link>
        {/* <FilterLink filter="createtemplate">Make a new ScoreSheet</FilterLink> */}
      </button>
      {/* This should probably be rendered in TemplateList */}
      <button onClick={e => props.changePage('game')}>Start Game</button>
      {/* <Link to="/createtemplate">CREATE!</Link> */}
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
