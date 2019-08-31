import { FETCH_COUNTRIES } from '../types/country';
import Axios from 'axios';

export const FETCH_RATE = "FETCH_RATE";


export const fetchCountries = () => {
  return async function (dispatch, getState) {
    function onSuccess(response) {
      dispatch({ type: FETCH_COUNTRIES, payload: response.data });
    }
    function onError(error) {
      console.log(error);
    }

    const response = await Axios.get("https://restcountries.eu/rest/v2/all");
    try {
      onSuccess(response);
      console.log("dedededed", response)
    }
    catch (err) {
      onError(err);
    }
  };
};

export function fetchRate(country) {
  return function(dispatch) {
    Axios
      .get(
        `https://api.exchangeratesapi.io/history?start_at=${getLastMonth()}&end_at=${formatedDate(new Date())}&base=USD&symbols=${country.currencyCode}`
      )
      .then(response => {
        dispatch({
          type: FETCH_RATE,
          payload: { rates: response.data.rates, ...country }
        });
      });
  };
}

function formatedDate(date){
  return date.toISOString().split("T")[0];
}

function getLastMonth(){
  let now =new Date();
  now.setMonth(now.getMonth() - 1);
  return formatedDate(now);
}