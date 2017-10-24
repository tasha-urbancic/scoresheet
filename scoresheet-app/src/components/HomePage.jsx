import React from "react";

import TemplateList from "../containers/TemplateList.jsx";

import FilterLink from "../containers/FilterLink.jsx";

export default function HomePage(props) {
  return (
    <div>
      <p>Making board games fun again!</p>
      <button onClick={e => props.changePage("newScoresheet")}>
        <FilterLink filter="createtemplate">Make a new ScoreSheet</FilterLink>
      </button>
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
