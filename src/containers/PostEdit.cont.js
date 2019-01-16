import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class PostEdit extends Component {
	constructor(props) {
		super(props);

		this.state = {
		};
	}

	componentDidUpdate(){
		// console.log('cmpDidUpdate', this.props.possiblePlaces, this.state);
	}

	render() {
		return (
			<div className="col">
				one post to edit
			</div>
		)
	}
}

function mapStateToProps ( state ) {
	return {
	};
}


function mapDispatchToProps ( dispatch ) {
	return bindActionCreators( {
	}, dispatch );
}

export default connect(mapStateToProps, mapDispatchToProps)(PostEdit);

