import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postNewGame } from '../redux/actions/grab-data';
import { Link, Redirect } from 'react-router-dom';

const mapStateToProps = state => {
  return {
    templates: state.templates,
    gameId: state.gamePage.gameInfo.id,
    templateId: state.gamePage.gameInfo.template_id
  };
};

const mapDispatchToProps = dispatch => ({
  postNewGame: id => {
    const newGameThunk = postNewGame(id);
    console.log('New Game Thunk', newGameThunk);
    dispatch(newGameThunk);
  }
});

const TemplateList = props => {
  if (props.gameId) return <Redirect to={`games/${props.gameId}`} />;
  return (
    <div className="container">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Games: </th>
            <th />
          </tr>
        </thead>
        <tbody>
          {props.templates.map(template => {
            return (
              <tr>
                <td className="col-xs-10">{template.name}</td>
                <td className="col-xs-2">
                  <button
                    className="btn btn-default"
                    onClick={e => {
                      props.postNewGame(template.id);
                    }}
                  >
                    Start Game
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TemplateList);
