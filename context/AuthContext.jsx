/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
import { users } from "../data/credentials";

const AuthContext = createContext();

const INITIAL_STATE = {
  email: "",
  password: "",
  isAuthenticated: false,
  loading: false,
};

function reducer(state, action) {
  console.log(action, "called");
  switch (action.type) {
    case "user/login":
      console.log(action);
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
        isAuthenticated: true,
        loading: false,
      };

    case "user/logout":
      return INITIAL_STATE;

    case "LOADING":
      return {
        ...state,
        loading: true,
      };

    default:
      return INITIAL_STATE;
  }
}

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  console.log(state, "rendered");

  const signIn = (email, password) => {
    dispatch({ type: "LOADING" });
    setTimeout(() => {
      const user = users.find(
        (u) => u.email === email && u.password === password
      );
      if (user) {
        dispatch({ type: "user/login", payload: user });
      } else {
        window.alert("There is mismatch between email and password");
        return;
      }
    }, 1000); // Simulate network delay
  };
  const signOut = () => {
    dispatch({ type: "LOADING" });
    setTimeout(() => {
      dispatch({ type: "user/logout" });
    });
  };
  return (
    <AuthContext.Provider value={{ state, dispatch, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
