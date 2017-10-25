import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dataFetch } from '../redux/actions/grab-data';
import { Link } from 'react-router-dom';

const mapStateToProps = state => {
  return {
    templates: state.templates
  };
};

const mapDispatchToProps = {
  dataFetch
};

// const templates = ['Settlers of Catan', 'Seven Wonders', 'Unearth'];

const TemplateList = props => {
  // props.dataFetch();
  console.log(props.templates);
  return (
    <table>
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
              <td>{template.name}</td>
              <td>
                <button>
                  <Link to='/templates/:templateId/games/:id'>
                    Start Game
                  </Link>
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TemplateList);
