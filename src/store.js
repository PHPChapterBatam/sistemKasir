import { createStore, applyMiddleware, compose } from 'redux'; //CONFIGURE STORE REDUX
import thunk from 'redux-thunk';
import rootReducer from './redux/reducer/'; // CATCH BIG COMPONENT REDUCER

const initialState = {};

//MIDDLEWARE THUNK
const middleware = [thunk];

//CREATE STORE 
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
