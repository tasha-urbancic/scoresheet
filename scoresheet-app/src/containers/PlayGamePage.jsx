import React, { Component } from "react";
import { connect } from "react-redux";
import {addPlayer} from "../redux/actions/game-page";
import PlayGame from "../components/PlayGame.jsx";

const mapStateToProps = state => {
  return {

    allPlayers: state.gamePage.allPlayers
    // templateColumns: state.createTemplates.templateColumns,
    // templateNote: state.createTemplates.templateNote
  };
};

const mapDispatchToProps = {
    addPlayer
  // updateCurrentColumn,
  // addColumn,
  // addNoteToTemplate
};

export default function ScoreSheet(props) {
  return (
    <PlayGame 
    {...props}
    />
  );
}
