import React, { Component } from 'react';


export default class AddRelationship extends Component {

  const defaultPiece = { equality: '=', number: 1, piece: ''};
  const defaultValue = 1;
  const defaultOperation = { piece: '', operation: '*', number: 1};

  const defaultRule = {
    pieces: [
      defaultPiece
    ],
    value: defaultValue,
    additional_operations: [
      defaultOperation
    ]
  }

  constructor(props) {
    super(props);
    this.state= {
      rules: [defaultRule, defaultRule]
    }
  }
  
  render() {
    return (
      <div>

        <h3>2.) Add rules:</h3>

        {this.state.rules.map(function(rule, i){

          return (
          
            <div>

              {this.state.rules[i].pieces.map(function(piece, j){
                return (
                  <div>
                    {j !== 1 &&
                      and
                    }
                    <select name="equality" id="equality-dropdown" onChange={ e =>
                      setState({this.state.rules[i].pieces[j].equality: e.target.value});
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
                )
              })}

              <button onClick={e =>
                setState({this.state.rules[i].pieces: ...this.state.rules[i].pieces, defaultPiece});
              }>
              Add New Piece
              </button>

              <p>is worth</p>
              <input type="number" placeholder="How many points?" onChange={ e =>
                setState({this.state.rules[i].value: e.target.value});
              }/>

              {this.state.rules[i].additional_operations.map(function(operation, k){
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
                )
              })}

            <button onClick={ e =>
              setState({this.state.rules[i].additional_opperations: ...additional_opperations, defaultOperation });
            }>
            Add New Operation
            </button>

            </div>

          )
              
        })}

        <button onClick={e =>
          setState({this.state.rules: ...this.state.rules, defaultRule});
        }>Add Rule</button>

      {/* render the rule as a list item, so you know it has been added */}

      {/* <button onClick={
        // this.props.writeRulesIntoTemplate(this.state.rules)
        // write a writeRulesIntoTemplate action in redux state
        // then change page state to home, to redirect home?
        this.props.onButtonClick('home')
      }>Submit Relationships</button> */}

        </div>
      )
    );
  }
}

// const rule = {
//   pieces: [
//     { equality: '=', number: '', piece: ''},
//     { equality: ..., number: ..., piece: ...},
//     { equality: ..., number: ..., piece: ...}
//   ],
//   value: 'abc',
//   additional_operations = [operation, operation ...]
// }