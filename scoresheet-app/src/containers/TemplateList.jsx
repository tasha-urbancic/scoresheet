import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postNewGame } from '../redux/actions/grab-data';
import { clearGame } from '../redux/actions/game-page';
import { Link, Redirect } from 'react-router-dom';

function toTitleCase(str) {
  str = `${str}`;
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

const mapStateToProps = state => {
  return {
    templates: state.templates,
    gameId: state.gamePage.gameInfo.game.id,
    creatingGame: state.gamePage.creatingGame
    // templateId: state.gamePage
  };
};

const mapDispatchToProps = dispatch => ({
  postNewGame: id => {
    const newGameThunk = postNewGame(id);
    console.log('New Game Thunk', newGameThunk);
    dispatch(newGameThunk);
  },
  clearGame: () => {
    dispatch(clearGame());
  }
});

class TemplateList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: ''
    };
  }
  render() {
    const props = this.props;
    if (props.gameId && props.creatingGame) {
      return <Redirect to={`games/${props.gameId}`} />;
    }
    return (
      <div className="container" id="template-list-container">
        <form className="" role="search" method="get" id="searchform" action="">
          <div className="form-group">
            <input
              name="s"
              id="s"
              type="text"
              className="search-query form-control"
              autoComplete="off"
              placeholder="Search..."
              onChange={e => {
                this.setState({ searchString: e.target.value });
              }}
            />
          </div>
        </form>
        <div className="table table-hover">
          <h2>Games: </h2>
          <ul className="list-group">
            {props.templates
              .filter(template => {
                // get string from search bar and apply here
                console.log(template.name);
                if (
                  template.name.includes(this.state.searchString) ||
                  template.name.includes(toTitleCase(this.state.searchString))
                ) {
                  return true;
                }
              })
              .map(template => {
                return (
                  <li className="list-group-item" key={template.id}>
                    <span>{template.name}</span>
                    <div className="start-button">
                      <button
                        className="btn btn-primary"
                        onClick={e => {
                          props.clearGame();
                          props.postNewGame(template.id);
                        }}
                      >
                        Start Game
                      </button>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TemplateList);
