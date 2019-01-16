import { combineReducers } from 'redux';

import allPostsInfoReducer from './allPostsReducer.reducer';
import createPostReducer from './createPostReducer.reducer';

const rootReducer = combineReducers({
  allPostsInfo: allPostsInfoReducer,
  postCreatedNotifier: createPostReducer
});

export default rootReducer;
