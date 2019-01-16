import { CREATE_POST } from '../actions';


export default function ( state = {} , action ) {
	console.log('from reducer', 'state', state, action);
	switch( action.type ) {
		case CREATE_POST:
			console.log('on good type', action);
			return action.payload;
			break;

		default:
			return state;
	}

}