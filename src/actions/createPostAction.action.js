const CREATE_POST  = 'CREATE_POST',
		URL_BASE	= 'http://reduxblog.herokuapp.com/api/posts';

const createPostActionCreator = function (info) {
	console.log('info', info);

	return fetch(`${URL_BASE}?key=bla_chema`, 
			{
				method: 'POST', 
				body: JSON.stringify(info),
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				}
			})
		    .then((response) => {
		    	// console.log('googleapis res', response);
		    	return response.json()
		    })
		    .then((responseJson) => {
		    	console.log('responseJson', responseJson);
				return {
					type: CREATE_POST,
					payload: true
				};
		    })
		    .catch((error) => {
		      console.error('error', error);
		      	return {
					type: CREATE_POST,
					payload: false
				};
		    });
}

export { createPostActionCreator, CREATE_POST };