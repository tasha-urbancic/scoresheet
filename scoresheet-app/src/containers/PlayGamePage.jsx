import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePlayers } from '../redux/actions/game-page';
import PlayGame from '../components/PlayGame.jsx';

const mapStateToProps = state => {
  return {
    allPlayers: state.gamePage.allPlayers,
    fields: state.gamePage.gameInfo.fields,
    gameInfo: state.gamePage.gameInfo
  };
};

const mapDispatchToProps = {
  updatePlayers
};

function PlayGamePage(props) {
  return <PlayGame {...props} />;
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayGamePage);
