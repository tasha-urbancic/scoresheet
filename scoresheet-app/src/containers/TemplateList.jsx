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

const TemplateList = props => {
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
                  <button className='btn btn-default'>
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
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TemplateList);
