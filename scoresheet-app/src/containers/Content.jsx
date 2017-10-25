import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { changePage, changeGameID, changeTemplateName } from "../redux/actions/pages";

import { changePage, changeGameID} from "../redux/actions/pages";
import {changeTemplateName, updateCurrentColumn, addColumn} from "../redux/actions/create-templates";
import {addPlayer} from "../redux/actions/game-page";

import TemplateRender from '../components/TemplateRender.jsx';
import HomePage from "../components/HomePage.jsx";
import PlayGamePage from "../containers/PlayGamePage.jsx";

// import TemplateList from '../components/TemplateList.jsx';

const mapStateToProps = state => {
  return {
    page: state.pages.page,
    gameid: state.pages.gameid,
    templateName: state.createTemplates.templateName
  };
};

const mapDispatchToProps = {
  changePage,
  changeGameID,
  changeTemplateName
};

function Content(props) {
  if (props.page === 'home') {
    return (
      <div>
        {/* {props.page}<br></br>
        {props.gameid} */}
        <HomePage
          changePage={props.changePage}
          onKeyDown={props.changeGameID}
        />
      </div>
    );
  } else if (props.page === 'newScoresheet') {
    return (
      <TemplateRender 
        changePage={props.changePage}
        renameTemplate={props.changeTemplateName}
        templateName={props.templateName}
      />
    );
  } else if (props.page === "game") {
    return (
      <PlayGamePage 
        addPlayer={props.addPlayer}
      />
    );
  } else {
    return <div />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
