import React, {Component} from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Link } from 'react-router-dom';

import { fetchAllPostsActionCreator } from '../actions';

class PostsIndex extends Component{
	constructor(props){
		super(props);

		this.renderPosts = this.renderPosts.bind(this);
	}

	componentWillMount() {
		this.props.fetchPosts();
	}

	componentDidUpdate() {
		// console.log('cmpDidUpdate', this.props.allPosts);

		this.renderPosts();
	}

	renderPosts() {
		
		if(this.props.allPosts){

			const keys = Object.keys(this.props.allPosts);
			console.log('renderPosts', this.props.allPosts, 'keys', keys);

			return keys.map(theKey => {
				const obj = this.props.allPosts[theKey];
				return (<li key={obj.id} className="list-group-item">
							<h3>{obj.title}</h3>
							<p>{obj.content}</p>
							<a href={`/posts/${obj.id}/edit`}>Editar</a>
						</li>);
			});

		}
		else {
			return null;
		}
			
	}

	render(){
		return (
			<div className="col">
				<div className="text-xs-right">
					<Link className="btn btn-primary" to="/new">
						New Post
					</Link>
				</div>
				<h1>Posts</h1>
				<ul className="list-group">
					{this.renderPosts()}
				</ul>
			</div>
		);
	}
}//

function mapStateToProps(state) {
	return {
		allPosts: state.allPostsInfo
	};
}

function mapDispatchToProps ( dispatch ) {
	return bindActionCreators( { 
		fetchPosts: fetchAllPostsActionCreator
	}, dispatch );
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);