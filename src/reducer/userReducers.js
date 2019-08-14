export default function reducer(state={
    user: [{
      name: null,
      year: null,
    }],
    error: null,
  }, action) {

    switch (action.type) {
      case "GET_USER_DATA": {
        return {state, user: action.payload}
      }
      case "SET_USER_NAME": {
        return {state, name: action.payload}
      }
      case "SET_USER_AGE": {
        return {state, age: action.payload}
      }    
    }

    return state
}