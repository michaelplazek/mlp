import {LOAD_DATA} from './';

export function someAction(data) {
  return (dispatch) => {
    dispatch({
      type: LOAD_DATA,
      data,
    });
  };
}
