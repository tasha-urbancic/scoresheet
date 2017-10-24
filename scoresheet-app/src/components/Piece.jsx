import React, { Component } from 'react';

const defaultPiece = { equality: '=', number: 1, piece: ''};

export default class Piece extends Component {

  constructor(props) {
    super(props);
    this.state= {
      piece: defaultPiece
    }
  }
  
  render() {
    return (
      <div>
        {j !== 1 &&
          and
        }
        <select name="equality" id="equality-dropdown" onChange={ e =>
          setState({this.state.piece.equality: e.target.value});
          this.props.updateCurrentPiece(e.target.value);

        }>
            <option>=</option>
            <option>&gt;</option>
            <option>&lt;</option>
        </select>

        <input type="number" placeholder="Number of pieces" onChange={ e =>
          setState({this.state.rules[i].pieces[j].number: e.target.value});
        }/>

        <select name="column-list" id="column-list-dropdown" onChange={ e =>
          setState({this.state.rules[i].pieces[j].piece: e.target.value});
        }>
          {this.props.templateColumns.map(function(columnName, i){
            return <option>{columnName}</option>;
          })}
        </select>
      </div>
    );
  }

}