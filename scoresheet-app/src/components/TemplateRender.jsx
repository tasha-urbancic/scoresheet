// this is what creates the table for the scoresheet
// to be exported to the view template page, and
// the gameplay page

import React, { Component } from 'react';
import AddRelationship from './AddRelationship.jsx';
import ScoresheetStructure from '../containers/ScoresheetStructure.jsx';
import RelationshipDefinitions from '../containers/RelationshipDefinitions.jsx';
import NavBar from '../components/NavBar.jsx';

export default class TemplateRender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      templateName: ''
    };
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="container-fluid" id="create-template">
          <div className="row well">
            <div className="col-md-8 col-md-offset-2">
              <div className="form-group">
                <label
                  htmlhtmlFor="templateName"
                  className="col-sm-3 control-label"
                >
                  Name your template:
                </label>
                <div className="col-sm-5">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter template name"
                    id="templateName"
                    value={this.state.templateName}
                    onChange={e => {
                      this.setState({ templateName: e.target.value });
                    }}
                    onKeyDown={e => {
                      if (e.keyCode === 13) {
                        this.props.renameTemplate(this.state.templateName);
                        this.setState({ templateName: '' });
                      }
                    }}
                  />
                </div>
                <div className="col-sm-4">
                  <button
                    type="button"
                    className="btn btn-default"
                    onClick={e => {
                      this.props.renameTemplate(this.state.templateName);
                      this.setState({ templateName: '' });
                    }}
                  >
                    Add
                  </button>
                </div>
              </div>
              {this.props.templateName !== '' && (
                <div htmlFor="templateName" className="col-sm-12 control-label">
                  <h4>
                    The name of your template is {this.props.templateName}.
                  </h4>
                </div>
              )}
            </div>
          </div>
          <div className="row well">
            <div className="col-md-8 col-md-offset-2">
              <div className="form-horizontal">
                <ScoresheetStructure />
              </div>
              <div className="col-sm-12">
                <button className="btn btn-default">Submit Structure</button>
              </div>
            </div>
          </div>
          <div className="row well">
            <div className="col-md-8 col-md-offset-2">
              <div className="form-horizontal">
                <RelationshipDefinitions />
              </div>
            </div>
          </div>
          <div className="row well">
            <div className="col-md-8 col-md-offset-2">
              <div className="form-horizontal">
                <button className="btn btn-default">Submit Template</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
