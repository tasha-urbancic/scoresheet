
import React, { Component } from "react";
import { connect } from "react-redux";
// import { changePage, changeGameID, changeTemplateName } from "../redux/actions/pages";
import { changePage, changeGameID} from "../redux/actions/pages";
import {changeTemplateName } from "../redux/actions/create-templates";

import TemplateRender from '../components/TemplateRender.jsx';
import HomePage from "../components/HomePage.jsx";

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

  console.log(props.page);

  if (props.page === 'home') {
    return (
      <div>
        {/* {props.page}<br></br>
        {props.gameid} */}
        <HomePage
          onButtonClick={props.changePage}
          onKeyDown={props.changeGameID}
        />
      </div>
    );
  } else if (props.page === 'newScoresheet') {
    return (
      <TemplateRender 
        onButtonClick={props.changePage}
        onKeyDown={props.changeTemplateName}
      />
    );
  } else {
    return (
      <div></div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
