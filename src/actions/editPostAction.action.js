const EDIT_POST  = 'EDIT_POST',
		URL_BASE	= 'http://reduxblog.herokuapp.com/api/posts';

const editPostActionCreator = function ( postID ) {

	return fetch(`${URL_BASE}/${postID}?key=bla_chema`, {method: 'POST'})
		    .then((response) => {
		    	// console.log('googleapis res', response);
		    	return response.json()
		    })
		    .then((responseJson) => {
		    	// console.log('responseJson', responseJson);
				return {
					type: EDIT_POST,
					payload: true
				};
		    })
		    .catch((error) => {
		      console.error('error', error);
		      	return {
					type: EDIT_POST,
					payload: false
				};
		    });
}

export { editPostActionCreator, EDIT_POST };