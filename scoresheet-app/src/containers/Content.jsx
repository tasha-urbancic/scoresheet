import React, { Component } from "react";

import { connect } from "react-redux";

import { changePage, changeGameID } from "../redux/actions/pages";

import HomePage from "../components/HomePage.jsx";
// import TemplateList from '../components/TemplateList.jsx';

const mapStateToProps = state => {
  return {
    page: state.page,
    gameid: state.gameid
  };
};

const mapDispatchToProps = {
  changePage,
  changeGameID
};

function Content(props) {
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
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
