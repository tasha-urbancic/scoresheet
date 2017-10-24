import React, { Component } from "react";
import { connect } from "react-redux";
// import {} from "../redux/actions/game-page";
import PlayGame from "../components/PlayGame.jsx";

const mapStateToProps = state => {
  return {
    // templateCurrentColumn: state.createTemplates.templateCurrentColumn,
    // templateColumns: state.createTemplates.templateColumns,
    // templateNote: state.createTemplates.templateNote
  };
};

const mapDispatchToProps = {
  // updateCurrentColumn,
  // addColumn,
  // addNoteToTemplate
};

export default function ScoreSheet(props) {
  return (
    <PlayGame />
  );
}
