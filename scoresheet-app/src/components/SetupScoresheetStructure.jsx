import React, { Component } from 'react';

// export default function SetupScoresheetStructure(this.props) {

export default class SetupScoresheetStructure extends Component {

  constructor(props) {
    super(props);
    this.state= {
      columnName: '',
      extraNotes: ''
    }
  }

  render() {
    return (
      <div>

        <h3>1.) Add columns:</h3>

        <h4>Enter column names:</h4>
        <input placeholder="column name" value={this.props.templateCurrentColumn}
          onChange={e => {
            this.props.updateCurrentColumn(e.target.value);
          }} 
          onKeyDown={e => {
            if (e.keyCode === 13) {  
              this.props.addColumn(this.props.templateCurrentColumn)
              this.props.updateCurrentColumn('');
            }
          }}>
        </input>

        <button onClick={e => {
          this.props.addColumn(this.props.templateCurrentColumn);
          this.props.updateCurrentColumn('');
        }} >
        Add
        </button>

        <br />

        <ul>
        {this.props.templateColumns.map(function(columnName, i){
          return <li key={i}>{columnName}</li>;
        })}
        </ul>
        

        <h4>Add notes:</h4>
        <textarea placeholder="Extra rules go here..." value={this.state.extraNotes}
          onChange={e => {
            this.setState({extraNotes: e.target.value});
          }} 
          onKeyDown={e => {
            if (e.keyCode === 13) {
              this.props.addNoteToTemplate(this.state.extraNotes);
              this.setState({extraNotes: ''});
            }
          }}
        ></textarea>
        <button onClick={e => {
          this.props.addNoteToTemplate(this.state.extraNotes);
          this.setState({extraNotes: ''});
        }}>
        Add
        </button>
    
      </div>
    );
  }
}