import { reducer as reduxFormReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

const reducer = combineReducers({
  form: reduxFormReducer,
  router: routerReducer,
});

export default reducer;
