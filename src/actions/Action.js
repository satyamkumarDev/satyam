import Axios from "axios";
import { BUILDING_DATA_FAIL, BUILDING_DATA_REQUEST, BUILDING_DATA_SUCCESS, FILTER_DATA_FAIL, FILTER_DATA_REQUEST, FILTER_DATA_SUCCESS } from "../constants/Constant";


export const filter = (data) => async (dispatch) => {
  dispatch({ type:FILTER_DATA_REQUEST, payload: { data } });
  try {
    dispatch({ type: FILTER_DATA_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type:FILTER_DATA_FAIL,
      payload:'something is wrong'
    });
  }
};

export const buildings = (data) => async (dispatch) => {
  dispatch({ type: BUILDING_DATA_REQUEST, payload: { data } });
  try {
    dispatch({ type: BUILDING_DATA_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: BUILDING_DATA_FAIL,
      payload: "something is wrong",
    });
  }
};
