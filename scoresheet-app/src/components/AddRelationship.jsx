import React, { Component } from 'react';

const defaultPiece = { equality: '=', number: 1, piece: '' };
const defaultValue = 1;
const defaultOperation = { piece: '', operation: '*', number: 1 };

const defaultRule = {
  pieces: [{ ...defaultPiece }],
  value: defaultValue,
  additional_operations: [{ ...defaultOperation }]
};

export default class AddRelationship extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rules: [{ ...defaultRule }]
    };
  }

  render() {
    return (
      <div>
        <label for="templateName" className="col-sm-12 control-label">
        Add rules:
        </label>

          {this.state.rules.map((rule, i) => {

            return (
            
              <div>
                
                  {rule.pieces.map((piece, j) => {
                    return (
                      <div className="form-group">
                          
                          
                        <div className="col-sm-2">
                          <p for="templateName" className="control-label">
                            {j !== 0 ? 'and' : null}
                          </p>
                        </div>
                          
                          
                          <div className="col-sm-2">
                            <select  className="form-control" name="equality" id="equality-dropdown" onChange={ e => {
                                const rules = [...this.state.rules];
                                rules[i].pieces[j].equality = e.target.value;
                                this.setState({
                                    rules
                                });
                              }
                            }>
                                <option value="=">=</option>
                                <option value="&gt;">&gt;</option>
                                <option value="&lt;">&lt;</option>
                            </select>
                          </div>

                          <div className="col-sm-4">
                            <input className="form-control" placeholder="Number of pieces" onChange={ e => {
                                const rules = [...this.state.rules];
                                rules[i].pieces[j].number = e.target.value;
                                this.setState({
                                    rules
                                });
                              }
                            }/>
                          </div>

                          <div className="col-sm-3">
                            <select className="form-control" name="column-list" id="column-list-dropdown" placeholder="Select a piece" onChange={ e => {
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

                        <div className="col-sm-1">
                            <div>
                            </div>
                        </div>

                      </div>
                    )
                  })}
                  <div className = "form-group">
                    <div className="col-sm-12">
                      <button type="button" className="btn btn-success" onClick={e => {
                          const rules = [...this.state.rules];
                          rules[i].pieces = [...rules[i].pieces, defaultPiece];
                          this.setState({
                            rules
                          });
                        }
                      }>
                      Add New Piece
                      </button>
                  </div>
                </div>

              <div className="form-group">
                
                <div className="col-sm-2 text-center">
                  <p for="templateName" className="control-label">
                    is worth
                  </p>
                </div>

                <div className="col-sm-10">
                  <input className="form-control" type="number" placeholder="How many points?" onChange={ e => {
                      const rules = [...this.state.rules];
                      rules[i].value = e.target.value;
                      this.setState({
                        rules
                      });
                    }
                  }/>
                </div>

              </div>

                {rule.additional_operations.map((operation, k) => {
                  return (

                      <div className="form-group">
                        <div className="col-sm-1">{k !== 0 ? 'and' : null}</div>

                        <div className="col-sm-3">
                          <select className="form-control" name="column-list" id="column-list-dropdown" onChange={ e => {
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
                        </div>

                        <div className="col-sm-4">
                          <select className="form-control" onChange={ e => {
                              const rules = [...this.state.rules];
                              rules[i].additional_opperations[k].operation = e.target.value;
                              this.setState({
                                rules
                              });
                            }
                          }>
                              <option value="+">+</option>
                              <option value="-">-</option>
                              <option value="*">*</option>
                              <option value="/">/</option>
                              <option value="*">^</option>
                          </select>
                        </div>

                        <div className="col-sm-4">
                          <input className="form-control" type="number" placeholder="Number of pieces" onChange={ e => {
                              const rules = [...this.state.rules];
                              rules[i].additional_opperations[k].number = e.target.value;
                              this.setState({
                                rules
                              });
                            }
                          }/>
                        </div>
                      
                      </div>
                  )
                })}
                <div className="form-group">
                  <div className="col-sm-12">
                    <button type="button" className="btn btn-success" onClick={ e => {
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
                </div>
            </div>
          );
        })}
        <div className="form-group">
          <div className="col-sm-12">
            <button type="button" className="btn btn-success" onClick={e => {
                const rules = [...this.state.rules];
                this.setState({rules: [...rules, defaultRule]});
              }
            }>Add Rule
            </button>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12">
            <button type="button" className="btn btn-success" onClick={ e => {
                this.props.writeRulesIntoTemplate(this.state.rules);
              }
            }>Submit Relationships
            </button>
          </div>
        </div>
      </div>
    );
  }
}
