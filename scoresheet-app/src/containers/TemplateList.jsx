import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dataFetch } from '../redux/actions/grab-data';
import FilterLink from "../containers/FilterLink.jsx";
import { changePage, changeGameID} from "../redux/actions/pages";

const mapStateToProps = state => {
  return {
    templates: state.templates,
    page: state.pages.page,
    gameid: state.pages.gameid,
  };
};

const mapDispatchToProps = {
  dataFetch,
  changePage,
  changeGameID,
};

// const templates = ['Settlers of Catan', 'Seven Wonders', 'Unearth'];

const TemplateList = props => {

  return (
    <div className="container">

      <p className="text-center">Making board games fun again!</p>
      
      <table className="table table-hover">

        <thead>
          <tr>
            <th>All scoresheets: </th>
            <th />
          </tr>
        </thead>

        <tbody>
          {props.templates.map(template => {
            return (
              <tr>
                <td className="col-xs-10">{template.name}</td>
                <td className="col-xs-2">
                  <button className='btn btn-default' onClick={e => props.changePage('game')}>Start Game</button>
                </td>
              </tr>
            );
          })}
        </tbody>

      </table>

      <button className='btn btn-default' onClick={e => props.changePage('newScoresheet')}>
        <FilterLink filter="createtemplate">Make a new ScoreSheet</FilterLink>
      </button>

    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TemplateList);
