import React, { Component } from 'react';

export default class Operation extends Component {

  constructor(props) {
    super(props);
    this.state= {

    }
  }
  
  render() {
    return (
      <div>
  
        {k !== 1 &&
          and
        }

        <select name="column-list" id="column-list-dropdown" onChange={ e =>
          setState({this.state.rules[i].additional_opperations[k].piece: e.target.value});
        }>
          {this.props.templateColumns.map(function(columnName, i){
            return <option>{columnName}</option>;
          })}
        </select>

        <select onChange={ e =>
          setState({this.state.rules[i].additional_opperations[k].operation: e.target.value});
        }>
            <option>+</option>
            <option>-</option>
            <option>*</option>
            <option>/</option>
            <option>^</option>
        </select>

        <input type="number" placeholder="Number of pieces" onChange={ e =>
          setState({this.state.rules[i].additional_opperations[k].number: e.target.value});
        }/>
      
      </div>
    );
  }

}