export const TOGGLE_NIGHT_MODE = "TOGGLE_NIGHT_MODE";

const initialState = {
  isNightMode: localStorage.getItem("isNightMode") === "true" || false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_NIGHT_MODE:
      const newIsNightMode = !state.isNightMode;
      localStorage.setItem("isNightMode", newIsNightMode);
      return {
        ...state,
        isNightMode: newIsNightMode,
      };
    default:
      return state;
  }
};

export default appReducer;
