const INITIAL_STATE = { mood: "┐(´～｀)┌" };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "HAPPY":
      return { ...state, mood: action.payload };
    case "SAD":
      return { ...state, mood: action.payload };
    case "ANGRY":
      return { ...state, mood: action.payload };
    case "CONFUSED":
      return { ...state, mood: action.payload };
    case "RESET":
      return { ...state, mood: "┐(´～｀)┌" };
    default:
      return state;
  }
}

const state = Redux.createStore(rootReducer);
