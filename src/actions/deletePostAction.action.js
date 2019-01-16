const DELETE_POSTS  = 'DELETE_POSTS',
		URL_BASE	= 'http://reduxblog.herokuapp.com/api/posts';

const deletePostActionCreator = function ( postID ) {

	return fetch(`${URL_BASE}/${postID}?key=bla_chema`, {method: 'DELETE'})
		    .then((response) => {
		    	// console.log('googleapis res', response);
		    	return response.json()
		    })
		    .then((responseJson) => {
		    	// console.log('responseJson', responseJson);
				return {
					type: DELETE_POSTS,
					payload: true
				};
		    })
		    .catch((error) => {
		      console.error('error', error);
		      	return {
					type: DELETE_POSTS,
					payload: false
				};
		    });
}

export { deletePostActionCreator, DELETE_POSTS };