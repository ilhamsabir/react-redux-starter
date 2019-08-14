import axios from 'axios';

const url = 'https://reqres.in/api/unknown';

export function fetchUser() {
  return function(dispatch) {
    axios({
      method:'get',
      url: url,
      responseType:'json'
    })
    .then(response => {
      // console.log('res', response.data.data)
      dispatch({
        type: "GET_USER_DATA",
        payload: response.data.data
      });
    })
    .catch((error) => {
      console.log(error);
    })
  }
}

export function setUserName(name) {
  // return function(dispatch) {
  //   dispatch({
  //     type: 'SET_USER_NAME',
  //     payload: name,
  //   });
  // }
  return function(dispatch) {
    axios({
      method:'get',
      url: url,
      responseType:'json'
    })
    .then(response => {
      dispatch({
        type: "GET_USER_DATA",
        payload: response.data.data
      });
    })
    .catch((error) => {
      console.log(error);
    })
  }
}

export function setUserAge(age) {
  return {
    type: 'SET_USER_AGE',
    payload: age,
  }
}