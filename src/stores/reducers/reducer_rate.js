import { FETCH_RATE} from '../types/rate';

const initialState = {
    rateList: []
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
  
      case FETCH_RATE:
        return { 
          ...state,
          rateList: [action.payload, ...state.rateList] };
  
  
      default:
        return state;
    }
  };
  



