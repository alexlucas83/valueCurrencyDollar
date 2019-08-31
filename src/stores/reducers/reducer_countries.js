import { FETCH_COUNTRIES} from '../types/country';
import { supportedCurrencyCode } from '../../supportedCurrencies'

const initialState = {
  countries: []
};

export default (state = initialState, action) => {
  switch (action.type) {

    case FETCH_COUNTRIES:
      return { 
        ...state,
        countries: getCountriesInfo(action.payload) };


    default:
      return state;
  }
};

function getCountriesInfo(data){
  return data.map(c =>{
    return {
      name : c.name,
      currencyCode: c.currencies[0].code,
      flag : c.flag,
      code : c.alpha3Code
    };
  }).filter(c => {
    // return c.currencyCode !== "USD"
    return supportedCurrencyCode.indexOf(c.currencyCode) > -1
  });
}

