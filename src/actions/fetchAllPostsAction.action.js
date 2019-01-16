const FETCH_ALL_POSTS  = 'FETCH_ALL_POSTS',
		URL_BASE	= 'http://reduxblog.herokuapp.com/api/posts';

const fetchAllPostsActionCreator = function () {

	return fetch(`${URL_BASE}?key=bla_chema`, {method: "GET"})
		    .then(response => {
		    	// console.log('response', response);
		    	return response.json()
		    })
		    .then(responseJson => {
		    	const posts = responseJson;
		    	let postsAsObjectCollection = {};
		    	posts.map(post => postsAsObjectCollection[post.id] = post);

				return {
					type: FETCH_ALL_POSTS,
					payload: postsAsObjectCollection
				};
		    })
		    .catch((error) => {
		      console.error('error', error);
		      	return {
					type: FETCH_ALL_POSTS,
					payload: {}
				};
		    });
}

export { fetchAllPostsActionCreator, FETCH_ALL_POSTS };