// this is what creates the table for the scoresheet
// to be exported to the view template page, and
// the gameplay page

import React, { Component } from 'react';
import AddRelationship from './AddRelationship.jsx';
import ScoresheetStructure from '../containers/ScoresheetStructure.jsx';


export default class TemplateRender extends Component {

  constructor(props) {
    super(props);
    this.state= {
      templateName: ''
    }
  }

  render() {
    return (
      <div>

        <h3>Name your template:</h3>
        <input placeholder="Enter template name"
          value={this.state.templateName}
          onChange={e => {
              this.setState({templateName: e.target.value});
          }}
          onKeyDown={e => {
              if (e.keyCode === 13) {  
                this.props.renameTemplate(this.state.templateName);
                this.setState({templateName: ''});
              }
          }} 
        >
        </input>
        <button onClick={e => {
          this.props.renameTemplate(this.state.templateName);
          this.setState({templateName: ''});
        }}>
        Add
        </button>

        {this.props.templateName !== '' &&
          <p>
            The name of your template is {this.props.templateName}.
          </p>
        }

        <ScoresheetStructure />
        <br />
        <button>Submit Structure</button>
        <AddRelationship />
        <br />
        <button>Submit Relationships</button>
      </div>
    );
  }
}
