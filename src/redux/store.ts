/*import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import {reducer} from './root-reducer'
import {handler as screamSaga} from './sagas'
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(screamSaga)

export {store};
//const action = (type: any) => store.dispatch({type})

*/

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';

import userReducer from './reducers/userReducer';
import dataReducer from './reducers/screamReducer';
import uiReducer from './reducers/uiReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { AppState } from 'react-native';
import {AppActions}  from './actions/index';

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
  user: userReducer,
  data: dataReducer,
  UI: uiReducer
});


const store = createStore(
  reducers,
  __DEV__
    ? composeWithDevTools(
        applyMiddleware(
          thunk as ThunkMiddleware<AppState, AppActions>,
          //logger
          // sagaMiddleware
        )
      )
    : compose(applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>))
);

export default store;
