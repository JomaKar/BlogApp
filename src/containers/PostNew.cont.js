import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Link } from 'react-router-dom';


import { createPostActionCreator } from '../actions';


class PostNew extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			categories: '',
			content: ''
		};

		this.submitNewPost = this.submitNewPost.bind(this);
		this.cancelPost = this.cancelPost.bind(this);
	}

	cancelPost(ev) {
		if(ev) ev.preventDefault();
		console.log('cancelPost');

		this.setState({
			title: '',
			categories: '',
			content: ''
		});
	}

	componentDidUpdate() {
		console.log('this.props', this.props);
		if(this.props.newPostDone === true && this.state.title.length && this.state.categories.length && this.state.content.length) {
			console.log('this.props', this.props);
			this.setState({
				title: '',
				categories: '',
				content: ''
			});
			alert('Post Creado exitosamente!');
		}
	}

	submitNewPost(ev) {
		ev.preventDefault();
		this.props.submitPost(this.state);
	}

	render() {
		return (
			<div className="col">
				<div className="text-xs-right">
					<Link className="btn btn-primary" to="/">
						Back
					</Link>
				</div>
				 <form>
				 	<div className="form-group">
				 		<label htmlFor="title">Título</label>
				 		<input className="form-control" value={this.state.title} id="title" name="title" onInput={(e) => this.setState({title: e.target.value})} />
				 	</div>
				 	<div className="form-group">
				 		<label htmlFor="categories">Categorías</label>
				 		<input className="form-control" value={this.state.categories} id="categories" name="categories" onInput={(e) => this.setState({categories: e.target.value})} />
				 	</div>
				 	<div className="form-group">
				 		<label htmlFor="content">Contenido</label>
				 		<textarea className="form-control" value={this.state.content} id="content" name="content" onInput={(e) => this.setState({content: e.target.value})}></textarea>
				 	</div>

				 	<button onClick={(e) => this.submitNewPost(e)}>Publicar</button>
				 	<button onClick={(e) =>  this.cancelPost(e)}>Cancelar</button>
				</form>
			</div>
		)
	}
}


function mapStateToProps(state) {
	return {
		newPostDone: state.postCreatedNotifier
	};
}


function mapDispatchToProps ( dispatch ) {
	return bindActionCreators( {
		submitPost: createPostActionCreator
	}, dispatch );
}

export default connect(mapStateToProps, mapDispatchToProps)(PostNew);