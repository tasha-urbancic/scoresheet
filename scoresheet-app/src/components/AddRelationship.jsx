import React, { Component } from 'react';

const defaultPiece = { equality: null, number: null, piece: null };
const defaultOperation = { piece: null, operation: null, number: null };

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
      if (value == null) {
        return false;
      }
      for (var j = 0; j < pieces.length; j++) {
        var piece = pieces[j];
        if (
          piece.equality == null ||
          piece.number == null ||
          piece.piece == null
        ) {
          return false;
        }
      }
      if (operations) {
        for (var j = 0; j < operations.length; j++) {
          var operation = operations[j];
          if (
            operation.piece == null ||
            operation.operation == null ||
            operation.number == null
          ) {
            return false;
          }
        }
      }
    }
  }

  render() {
    return (
      <div>
        {this.state.rules.map((rule, i) => {
          return (
            <div>
              {rule.pieces.map((piece, j) => {
                return (
                  <div className="form-group">
                    <div>
                      <div>{j !== 0 ? 'and' : null}</div>

                      <div className="col-sm-4">
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

                      <div className="col-sm-4">
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

                      <div className="col-sm-4">
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
                <div className="col-md-4 col-md-offset-4 text-center">
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
                  <div>
                    <div className="col-sm-4 text-right">
                      <label htmlFor="templateName" className="control-label ">
                        is worth
                      </label>
                    </div>

                    <div className="col-sm-4">
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
                    <div className="col-sm-4">
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
                    <div>
                      <div className="col-sm-1 text-right">
                        {k !== 0 ? '+' : '+'}
                      </div>

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

                      <div className="col-sm-3">
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

                      <div className="col-sm-3">
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
                      <div className="col-sm-2">
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
                <div className="col-md-4 col-md-offset-4 text-center">
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
              <hr className="divider-line" />
            </div>
          );
        })}
        <div className="form-group">
          <div className="col-md-4 col-md-offset-4 text-center">
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
        {!this.state.rulesSubmitted && (
          <div className="form-group">
            <div className="col-md-4 col-md-offset-4 text-center">
              <button
                type="button"
                className="btn btn-primary"
                onClick={e => {
                  this.setState({ rulesFull: true });
                  this.setState({ rulesSubmitted: false });
                  let templateRules = [...this.state.rules];
                  let check = this.checkAllEntriesNotEmpty(templateRules);
                  if (check === false) {
                    this.setState({ rulesFull: false });
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
        )}
        {this.state.rulesSubmitted && (
          <div>
            <div
              className="alert alert-success"
              aria-hidden="true"
              role="alert"
            >
              Rules added! Please submit your template to start playing.
            </div>
          </div>
        )}

        {!this.state.rulesFull && (
          <div>
            <div className="alert alert-danger" aria-hidden="true" role="alert">
              Please fill out the rule form completely.
            </div>
          </div>
        )}
      </div>
    );
  }
}
