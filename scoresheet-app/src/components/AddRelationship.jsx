import React, { Component } from 'react';

const defaultPiece = { equality: null, number: null, piece: null };
const defaultOperation = { piece: null, operation: null, number: null };

// const defaultRule = {
//   pieces: [{ ...defaultPiece }],
//   value: null,
//   additional_operations: []
// };

// let initialRule = { ...defaultRule };
// initialRule.pieces.push({ ...defaultPiece });

export default class AddRelationship extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rules: [
        {
          pieces: [{ ...defaultPiece }],
          value: null,
          additional_operations: []
        }
      ],
      hasError: false,
      rulesFull: true,
      rulesSubmitted: false
    };
  }

  checkAllEntriesNotEmpty(templateRules) {

		for (var i = 0; i < templateRules.length; i++) {
			var templateRule = templateRules[i];
			var pieces = templateRules[i].pieces,
				operations = templateRules[i].additional_operations,
        value = templateRules[i].value;
      if(value == null){
        return false;
      }
			for (var j = 0; j < pieces.length; j++) {
				var piece = pieces[j];
				if (piece.equality == null || piece.number == null || piece.piece == null) {
					console.log('piece check');
          
          return false;
				}
			}
			if (operations) {
				for (var j = 0; j < operations.length; j++) {
					var operation = operations[j];
					if (operation.piece == null || operation.operation == null || operation.number == null) {
            console.log('operation check');
            return false;
					}
				}
			}
		}
  }

  
  

	render() {
		return (
			<div>
				<h3>Add rules:</h3>
				<br />
				{this.state.rules.map((rule, i) => {
					return (
						<div>
							{rule.pieces.map((piece, j) => {
								return (
									<div className="form-group">
										<div className="col-sm-11 col-md-offset-1">
											<div className="col-sm-1">{j !== 0 ? 'and' : null}</div>

                      <div className="col-sm-2">
                        <select
                          className="form-control"
                          name="equality"
                          id="equality-dropdown"
                          placeholder=""
                          onChange={e => {
                            const rules = [...this.state.rules];
                            rules[i].pieces[j].equality = e.target.value;
                            this.setState({
                              rules
                            });
                          }}
                        >
                          <option value="" selected disabled hidden>
                            equality
                          </option>
                          <option value="=">=</option>
                          <option value="&gt;">&gt;</option>
                          <option value="&lt;">&lt;</option>
                        </select>
                      </div>

                      <div className="col-sm-2">
                        <input
                          className="form-control"
                          type="number"
                          placeholder="#"
                          onChange={e => {
                            const rules = [...this.state.rules];
                            rules[i].pieces[j].number = Number(e.target.value);
                            this.setState({
                              rules
                            });
                          }}
                        />
                      </div>

                      <div className="col-sm-3">
                        <select
                          className="form-control"
                          name="column-list"
                          id="column-list-dropdown"
                          placeholder="piece"
                          onChange={e => {
                            const rules = [...this.state.rules];
                            rules[i].pieces[j].piece = e.target.value;
                            this.setState({
                              rules
                            });
                          }}
                        >
                          <option value="" selected disabled hidden>
                            select piece
                          </option>
                          {this.props.templateColumns.map(function(
                            columnName,
                            i
                          ) {
                            return <option>{columnName}</option>;
                          })}
                        </select>
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="form-group">
                <div className="col-sm-8 col-md-offset-1 text-center">
                  {this.state.rules[i].pieces.length === 0 && (
                    <button
                      type="button"
                      className="btn btn-default"
                      onClick={e => {
                        const rules = [...this.state.rules];
                        rules[i].pieces = [
                          ...rules[i].pieces,
                          { ...defaultPiece }
                        ];
                        this.setState({
                          rules
                        });
                      }}
                    >
                      Add New Piece Value
                    </button>
                  )}
                  {this.state.rules[i].pieces.length > 0 && (
                    <button
                      type="button"
                      className="btn btn-default"
                      onClick={e => {
                        const rules = [...this.state.rules];
                        rules[i].pieces = [
                          ...rules[i].pieces,
                          { ...defaultPiece }
                        ];
                        this.setState({
                          rules
                        });
                      }}
                    >
                      Add New Piece
                    </button>
                  )}
                </div>
              </div>

              {this.state.rules[i].pieces.length > 0 && (
                <div className="form-group">
                  <div className="col-sm-12 col-md-offset-3">
                    <div className="col-sm-2 text-center">
                      <label htmlFor="templateName" className="control-label ">
                        is worth
                      </label>
                    </div>

                    <div className="col-sm-2">
                      <input
                        className="form-control"
                        type="number"
                        placeholder="#"
                        onChange={e => {
                          const rules = [...this.state.rules];
                          rules[i].value = Number(e.target.value);
                          this.setState({
                            rules
                          });
                        }}
                      />
                    </div>
                    <div className="col-sm-1">
                      <label htmlFor="templateName" className="control-label ">
                        points
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {rule.additional_operations.map((operation, k) => {
                return (
                  <div className="form-group">
                    <div className="col-sm-12 col-md-offset-1">
                      <div className="col-sm-1">{k !== 0 ? '+' : '+'}</div>

                      <div className="col-sm-3">
                        <select
                          className="form-control"
                          name="column-list"
                          id="column-list-dropdown"
                          placeholder=""
                          onChange={e => {
                            const rules = [...this.state.rules];
                            rules[i].additional_operations[k].piece =
                              e.target.value;
                            this.setState({
                              rules
                            });
                          }}
                        >
                          <option value="" selected disabled hidden>
                            select piece
                          </option>
                          {this.props.templateColumns.map(function(
                            columnName,
                            i
                          ) {
                            return <option>{columnName}</option>;
                          })}
                        </select>
                      </div>

                      <div className="col-sm-2">
                        <select
                          className="form-control"
                          placeholder=""
                          onChange={e => {
                            const rules = [...this.state.rules];
                            rules[i].additional_operations[k].operation =
                              e.target.value;
                            this.setState({
                              rules
                            });
                          }}
                        >
                          <option value="" selected disabled hidden>
                            operation
                          </option>
                          <option value="+">+</option>
                          <option value="-">-</option>
                          <option value="*">*</option>
                          <option value="/">/</option>
                          <option value="^">^</option>
                        </select>
                      </div>

                      <div className="col-sm-2">
                        <input
                          className="form-control"
                          type="number"
                          placeholder="#"
                          onChange={e => {
                            const rules = [...this.state.rules];
                            rules[i].additional_operations[k].number = Number(
                              e.target.value
                            );
                            this.setState({
                              rules
                            });
                          }}
                        />
                      </div>
                      <div className="col-sm-1">
                        <label
                          htmlFor="templateName"
                          className="control-label "
                        >
                          points
                        </label>
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="form-group">
                <div className="col-sm-8 col-md-offset-1 text-center">
                  <button
                    type="button"
                    className="btn btn-default"
                    onClick={e => {
                      const rules = [...this.state.rules];
                      rules[i].additional_operations = [
                        ...rules[i].additional_operations,
                        { ...defaultOperation }
                      ];
                      this.setState({
                        rules
                      });
                    }}
                  >
                    Add New Operation
                  </button>
                </div>
              </div>
              <hr className="col-sm-10" />
            </div>
          );
        })}
        <div className="form-group">
          <div className="col-sm-6 col-md-offset-2 text-center">
            <button
              type="button"
              className="btn btn-default"
              onClick={e => {
                const rules = [...this.state.rules];
                this.setState({
                  rules: [
                    ...rules,
                    {
                      pieces: [{ ...defaultPiece }],
                      value: null,
                      additional_operations: []
                    }
                  ]
                });
              }}
            >
              Add Rule
            </button>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-6 col-md-offset-2 text-center">
            <button
              type="button"
              className="btn btn-primary"
              onClick={e => {
                this.setState({rulesFull: true}); 
                this.setState({ rulesSubmitted: false }); 
                let templateRules = [...this.state.rules];
                let check = this.checkAllEntriesNotEmpty(templateRules);
                if (check===false) {
                  this.setState({rulesFull: false}); 
                  
                } else {
                  this.props.writeRulesIntoTemplate(this.state.rules);
                  this.setState({ rulesSubmitted: true });        
                }
              }}
            >
              Submit Rules
            </button>
          </div>
        </div>
        {this.state.rulesSubmitted && (
					<div className="col-sm-11">
						<div className="alert alert-success" aria-hidden="true" role="alert">
							Rules added! Please submit your template to start playing.
						</div>
					</div>
				)}

        { !this.state.rulesFull && (
          <div className="col-sm-11">
            <div className="alert alert-danger" aria-hidden="true" role="alert">
            Please fill out the rule form completely.
            </div>
          </div>
        )}
      </div>
    );
  }
}
