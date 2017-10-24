
import React, { Component } from "react";
import { connect } from "react-redux";
// import { changePage, changeGameID, changeTemplateName } from "../redux/actions/pages";
import { changePage, changeGameID} from "../redux/actions/pages";
import {changeTemplateName, updateCurrentColumn, addColumn} from "../redux/actions/create-templates";

import TemplateRender from '../components/TemplateRender.jsx';
import HomePage from "../components/HomePage.jsx";

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
      />
    );
  } else {
    return (
      <div></div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
