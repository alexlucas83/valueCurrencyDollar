import { combineReducers } from 'redux';
import ReducerCountries from './reducer_countries';
import reducerRateList from './reducer_rate';

export default combineReducers({
  countryReducer: ReducerCountries,
  rateListReducer: reducerRateList,
});