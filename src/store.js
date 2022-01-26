// import data from './data';
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { buildingDataReducer, filterDataReducer } from "./reducers/Reducer";



const reducer = combineReducers({
  filterData: filterDataReducer,
  buildingData:buildingDataReducer
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
