import React, { Component } from 'react';

const defaultPiece = { equality: '=', number: 1, piece: ''};
const defaultValue = 1;
const defaultOperation = { piece: '', operation: '*', number: 1};

const defaultRule = {
  pieces: [
    {...defaultPiece}
  ],
  value: defaultValue,
  additional_operations: [
    {...defaultOperation}
  ]
}

export default class AddRelationship extends Component {

  constructor(props) {
    super(props);
    this.state= {
      rules: [{ ...defaultRule }, { ...defaultRule }]
    }
  }

  render() {
    return (
      <div>

        <h3>2.) Add rules:</h3>

        {this.state.rules.map((rule, i) => {

          return (
          
            <div>

              {rule.pieces.map((piece, j) => {
                return (
                  <div>
                    {j !== 0 &&
                      <p>and</p>
                    }
                    <select name="equality" id="equality-dropdown" onChange={ e => {
                        const rules = [...this.state.rules];
                        rules[i].pieces[j].equality = e.target.value;
                        this.setState({
                            rules
                        });
                      }
                    }>
                        <option>=</option>
                        <option>&gt;</option>
                        <option>&lt;</option>
                    </select>

                    <input type="number" placeholder="Number of pieces" onChange={ e => {
                        const rules = [...this.state.rules];
                        rules[i].pieces[j].number = e.target.value;
                        this.setState({
                            rules
                        });
                      }
                    }/>

                    <select name="column-list" id="column-list-dropdown" onChange={ e => {
                        const rules = [...this.state.rules];
                        rules[i].pieces[j].piece = e.target.value;
                        this.setState({
                            rules
                        });
                      }
                    }>
                      {this.props.templateColumns.map(function(columnName, i){
                        return <option>{columnName}</option>;
                      })}
                    </select>
                  </div>
                )
              })}

              <button onClick={e => {
                  const rules = [...this.state.rules];
                  rules[i].pieces = [...rules[i].pieces, defaultPiece];
                  this.setState({
                    rules
                  });
                }
              }>
              Add New Piece
              </button>

              <p>is worth</p>
              <input type="number" placeholder="How many points?" onChange={ e => {
                  const rules = [...this.state.rules];
                  rules[i].value = e.target.value;
                  this.setState({
                    rules
                  });
                }
              }/>

              {rule.additional_operations.map((operation, k) => {
                return (
                  
                  <div>

                    {k !== 0 &&
                      <p>and</p>
                    }

                    <select name="column-list" id="column-list-dropdown" onChange={ e => {
                        const rules = [...this.state.rules];
                        rules[i].additional_opperations[k].piece = e.target.value;
                        this.setState({
                          rules
                        });
                      }
                    }>
                      {this.props.templateColumns.map(function(columnName, i){
                        return <option>{columnName}</option>;
                      })}
                    </select>

                    <select onChange={ e => {
                        const rules = [...this.state.rules];
                        rules[i].additional_opperations[k].operation = e.target.value;
                        this.setState({
                          rules
                        });
                      }
                    }>
                        <option>+</option>
                        <option>-</option>
                        <option>*</option>
                        <option>/</option>
                        <option>^</option>
                    </select>

                    <input type="number" placeholder="Number of pieces" onChange={ e => {
                        const rules = [...this.state.rules];
                        rules[i].additional_opperations[k].number = e.target.value;
                        this.setState({
                          rules
                        });
                      }
                    }/>
                  
                  </div>
                )
              })}

            <button onClick={ e => {
                const rules = [...this.state.rules];
                rules[i].additional_operations = [...rules[i].additional_operations, defaultOperation];
                this.setState({
                  rules
                });
              }
            }>
            Add New Operation
            </button>

            </div>

          )
              
        })}

        <button onClick={e => {
          const rules = [...this.state.rules];
            setState({rules: [...rules, defaultRule]});
          }
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
  }
}