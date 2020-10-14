import axios from 'axios';
import { FETCH_USER } from './types';

// redux-thunk will inspect the value we return from the action creator, if we return a function,
// redux-thunk will automatically call this function and pass in the dispatch function as an argument
export const fetchUser = () => async (dispatch) => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = (token) => async (dispatch) => {
  const res = await axios.post('/api/stripe', token);

  dispatch({ type: FETCH_USER, payload: res.data });
};
