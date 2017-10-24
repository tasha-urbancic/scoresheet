import React, { Component } from 'react';

// export default function SetupScoresheetStructure(this.props) {

export default class SetupScoresheetStructure extends Component {
  constructor(props) {
    super(props);
    this.state= {
      columnName: ''
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
        
      
        {/* <input placeholder="Enter column name..." /><br />
        <button>Add</button><br /> */}

        <h4>Add notes:</h4>
        <textarea placeholder="Extra rules go here..."></textarea>
        <button>Add</button>
    
      </div>
    );
  }
}