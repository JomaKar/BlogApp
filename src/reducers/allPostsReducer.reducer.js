import { FETCH_ALL_POSTS } from '../actions';


export default function ( state = {} , action ) {
	// console.log('from reducer', 'state', state, action);
	switch( action.type ) {
		case FETCH_ALL_POSTS:
			// console.log('on good type', action);
			return action.payload;
			break;

		default:
			return state;
	}

}