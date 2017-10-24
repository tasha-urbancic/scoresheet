
import React, { Component } from "react";
import { connect } from "react-redux";
// import { changePage, changeGameID, changeTemplateName } from "../redux/actions/pages";
import { changePage, changeGameID} from "../redux/actions/pages";
import {changeTemplateName, updateCurrentColumn, addColumn} from "../redux/actions/create-templates";

import TemplateRender from '../components/TemplateRender.jsx';
import HomePage from "../components/HomePage.jsx";
<<<<<<< HEAD

=======
import PlayGamePage from "../containers/PlayGamePage.jsx";
>>>>>>> features/template-display
// import TemplateList from '../components/TemplateList.jsx';

const mapStateToProps = state => {
  return {
    page: state.pages.page,
    gameid: state.pages.gameid,
    templateName: state.createTemplates.templateName,
    templateCurrentColumn: state.createTemplates.templateCurrentColumn,
    templateColumns: state.createTemplates.templateColumns
  };
};

const mapDispatchToProps = {
  changePage,
  changeGameID,
  changeTemplateName,
  updateCurrentColumn,
  addColumn
};

function Content(props) {
<<<<<<< HEAD

  if (props.page === 'home') {
    return (
      <div>
        {/* {props.page}<br></br>
        {props.gameid} */}
=======
  return (
    <div>
      {/* {props.page}
      <br />
      {props.gameid} */}
      {props.page === "home" ? (
>>>>>>> features/template-display
        <HomePage
          changePage={props.changePage}
          onKeyDown={props.changeGameID}
        />
<<<<<<< HEAD
      </div>
    );
  } else if (props.page === 'newScoresheet') {
    return (
      <TemplateRender 
        changePage={props.changePage}
        renameTemplate={props.changeTemplateName}
      />
    );
  } else {
    return (
      <div></div>
    )
  }

=======
      ) : (
        ""
      )}
      {props.page === "game" ? <PlayGamePage /> : ""}
    </div>
  );
>>>>>>> features/template-display
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
