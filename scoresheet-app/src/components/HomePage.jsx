import React from "react";
import TemplateList from "../containers/TemplateList.jsx";

export default function HomePage(props) {
  return (
    <div>

      <p className="text-center">Making board games fun again!</p>

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
