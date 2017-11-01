// this is what creates the table for the scoresheet
// to be exported to the view template page, and
// the gameplay page

import React, { Component } from 'react';
import AddRelationship from './AddRelationship.jsx';
import ScoresheetStructure from '../containers/ScoresheetStructure.jsx';
import RelationshipDefinitions from '../containers/RelationshipDefinitions.jsx';
import NavBar from '../components/NavBar.jsx';
import { Link } from 'react-router-dom';

export default class TemplateRender extends Component {
	constructor(props) {
		super(props);
		this.state = {
			templateName: '',
			hasError: false,
			templateNameFull: true,
			formSubmitted: false
		};
	}

	componentDidCatch(error, info) {
		this.setState({ hasError: true });
		logErrorToMyService(error, info);
	}

	render() {
		return (
			<div>
				<NavBar />
				<div className="container-fluid" id="create-template">
					<div className="row well">
						<div>
							<h3>Add name:</h3>
							<br />
							<div className="form-group">
								<label htmlFor="templateName" className="col-sm-4 control-label text-right">
									Name your template:
								</label>
								<div className="col-sm-4">
									<input
										type="text"
										className="form-control"
										placeholder="Enter template name"
										id="templateName"
										value={this.state.templateName}
										onChange={(e) => {
											this.setState({ templateName: e.target.value });
										}}
										onKeyDown={(e) => {
											let name = this.state.templateName;
											if (name.length !== 0 && e.keyCode === 13) {
												this.props.renameTemplate(this.state.templateName);
												this.setState({ templateName: '' });
												this.setState({ templateNameFull: true });
											} else if (name.length == 0 && e.keyCode === 13) {
												this.setState({ templateNameFull: false });
											}
										}}
									/>
								</div>
								<div className="col-sm-4">
									<button
										type="button"
										className="btn btn-default"
										onClick={(e) => {
											let name = this.state.templateName;
											if (name.length !== 0) {
												this.props.renameTemplate(this.state.templateName);
												this.setState({ templateName: '' });
												this.setState({ templateNameFull: true });
											} else if (name.length == 0) {
												this.setState({ templateNameFull: false });
											}
										}}
									>
										Add
									</button>
								</div>
							</div>
							{!this.state.templateNameFull && (
								<div
									className="alert alert-danger"
									aria-hidden="true"
									role="alert"
									style={{ marginTop: 60 }}
								>
									Template name can not be empty. Please enter a name!
								</div>
							)}
							{this.props.templateName !== '' && (
								<div htmlFor="templateName" className="col-md-4 col-md-offset-4 text-left">
									<h4>The name of your template is {this.props.templateName}.</h4>
								</div>
							)}
						</div>
					</div>

					<div className="row well">
						<div>
							<div className="form-horizontal">
								<h3>Add fields:</h3>
								<br />
								<ScoresheetStructure />
							</div>
						</div>
					</div>

					<div className="row well">
						<div>
							<div className="form-horizontal">
								<h3>Add rules:</h3>
								<br />
								<RelationshipDefinitions />
							</div>
						</div>
					</div>

					<div className="row well">
						{!this.state.formSubmitted && (
							<div className="col-md-4 col-md-offset-4 text-center">
								<div className="form-horizontal">
									<div className="form-group">
										<div>
											<button
												className="btn btn-primary"
												onClick={(e) => {
													this.props.postNewTemplate(this.props.newTemplate);
													this.setState({ formSubmitted: true });
												}}
											>
												Submit Template
											</button>
										</div>
									</div>
								</div>
							</div>
						)}
						{this.state.formSubmitted && (
							<div>
								<div>
									<div>
										<div className="alert alert-success" aria-hidden="true" role="alert">
											Form Submitted!
										</div>
									</div>
								</div>
								<div>
									<div className="form-horizontal">
										<div className="form-group">
											<div className="col-md-4 col-md-offset-4 text-center">
												<button className="btn btn-primary">
													<Link to="/templates" className="white-text">
														Return to Templates
													</Link>
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		);
	}
}
