import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  signin: false,
  signup: false,
  search: false,
  catalog: false,
  more: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CHANGE_SIGNIN_STATE":
      return {
        ...state,
        signin: action.payload,
      };
    case "CHANGE_SIGNUP_STATE":
      return {
        ...state,
        signup: action.payload,
      };
    case "CHANGE_SEARCH_STATE":
      return {
        ...state,
        search: action.payload,
      };
    case "CHANGE_CATALOG_STATE":
      return {
        ...state,
        catalog: action.payload,
      };
    case "CHANGE_MORE_STATE":
      return {
        ...state,
        more: action.payload,
      };
    default:
      return state;
  }
};
export const modalContext = createContext();

export const ModalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const changeSigninState = () => {
    dispatch({
      type: "CHANGE_SIGNIN_STATE",
      payload: !state.signin,
    });
  };
  const changeSignupState = () => {
    dispatch({
      type: "CHANGE_SIGNUP_STATE",
      payload: !state.signup,
    });
  };
  const changeSearchState = () => {
    dispatch({
      type: "CHANGE_SEARCH_STATE",
      payload: !state.search,
    });
  };
  const changeCatalogState = () => {
    dispatch({
      type: "CHANGE_CATALOG_STATE",
      payload: !state.catalog,
    });
  };
  const changeMoreState = () => {
    dispatch({
      type: "CHANGE_MORE_STATE",
      payload: !state.more,
    });
  };

  return (
    <modalContext.Provider
      value={{
        signin: state.signin,
        signup: state.signup,
        search: state.search,
        catalog: state.catalog,
        more: state.more,
        changeSigninState,
        changeSignupState,
        changeSearchState,
        changeCatalogState,
        changeMoreState,
      }}>
      {children}
    </modalContext.Provider>
  );
};
