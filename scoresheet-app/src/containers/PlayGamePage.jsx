import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePlayers } from '../redux/actions/game-page';
import { getGame } from '../redux/actions/grab-data';
import PlayGame from '../components/PlayGame.jsx';

const mapStateToProps = state => {
  return {
    allPlayers: state.gamePage.allPlayers,
    fields: state.gamePage.gameInfo.fields,
    templateInfo: state.gamePage.gameInfo.templateInfo
  };
};

const mapDispatchToProps = {
  updatePlayers,
  getGame
};

function PlayGamePage(props) {
  return <PlayGame {...props} />;
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayGamePage);
