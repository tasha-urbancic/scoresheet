import React, { Component } from "react";

import { connect } from "react-redux";

import { changePage, changeGameID } from "../redux/actions/pages";

import HomePage from "../components/HomePage.jsx";
import PlayGamePage from "../containers/PlayGamePage.jsx";
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
      {/* {props.page}
      <br />
      {props.gameid} */}
      {props.page === "home" ? (
        <HomePage
          onButtonClick={props.changePage}
          onKeyDown={props.changeGameID}
        />
      ) : (
        ""
      )}
      {props.page === "game" ? <PlayGamePage /> : ""}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
