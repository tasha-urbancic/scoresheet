// this is what creates the table for the scoresheet
// to be exported to the view template page, and
// the gameplay page

import React, { Component } from 'react';
import AddRelationship from './AddRelationship.jsx';
import ScoresheetStructure from '../containers/ScoresheetStructure.jsx';
import RelationshipDefinitions from '../containers/RelationshipDefinitions.jsx';
import NavBar from '../components/NavBar.jsx';

export default class TemplateRender extends Component {
	constructor(props) {
		super(props);
		this.state = {
			templateName: '',
			hasError: false,
			templateNameFull: true
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
						<div className="col-md-8 col-md-offset-3">
							<h3>Add name:</h3>
							<br />
							<div className="form-group">
								<label htmlFor="templateName" className="col-sm-3 control-label">
									Name your template:
								</label>
								<div className="col-sm-5">
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
								<div className="col-sm-1">
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
								{!this.state.templateNameFull && (
									<div className="col-sm-11">
										<div className="alert alert-danger" aria-hidden="true" role="alert">
											Template name can not be empty. Please enter a name!
										</div>
									</div>
								)}
							</div>
							{this.props.templateName !== '' && (
								<div htmlFor="templateName" className="col-sm-12 control-label">
									<h4>The name of your template is {this.props.templateName}.</h4>
								</div>
							)}
						</div>
					</div>

					<div className="row well">
						<div className="col-md-8 col-md-offset-3">
							<div className="form-horizontal">
								<ScoresheetStructure />
							</div>
						</div>
					</div>

					<div className="row well">
						<div className="col-md-8 col-md-offset-3">
							<div className="form-horizontal">
								<RelationshipDefinitions />
							</div>
						</div>
					</div>

					<div className="row well">
						<div className="col-md-8 col-md-offset-3">
							<div className="form-horizontal">
								<div className="form-group">
									<div className="col-sm-6 col-md-offset-2 text-center">
										<button
											className="btn btn-primary"
											onClick={(e) => {
												this.props.postNewTemplate(this.props.newTemplate);
											}}
										>
											Submit Template
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
