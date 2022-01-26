import {
  BUILDING_DATA_FAIL,
  BUILDING_DATA_REQUEST,
  BUILDING_DATA_SUCCESS,
  FILTER_DATA_FAIL,
  FILTER_DATA_REQUEST,
  FILTER_DATA_SUCCESS,
} from "../constants/Constant";

export const filterDataReducer = (state = {}, action) => {
  switch (action.type) {
    case FILTER_DATA_REQUEST:
      return { loading: true };
    case FILTER_DATA_SUCCESS:
      return { loading: false, filterData: action.payload };
    case FILTER_DATA_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const buildingDataReducer = (state = {}, action) => {
  switch (action.type) {
    case BUILDING_DATA_REQUEST:
      return { loading: true };
    case BUILDING_DATA_SUCCESS:
      return { loading: false, buildingData: action.payload };
    case BUILDING_DATA_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
