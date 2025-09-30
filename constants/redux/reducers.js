const initialState = {
    session: {}, //Identify user loggedIn/loggedOut...details
    colors : {}
  };
  
  const mainReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'session':
        return { ...state, session: action.payload };
      default:
        return state;
    }
  };

  // export const callJohn = () => {
  //   return 'Hello Doe'
  // }
  
  export default mainReducer;