import { createContext, useContext, useEffect, useReducer, useRef } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { signIn as signInApi } from "src/services/auth";
// import { addAccessTokenToRequests } from "src/services/api";

const HANDLERS = {
  INITIALIZE: "INITIALIZE",
  SIGN_IN: "SIGN_IN",
  SIGN_OUT: "SIGN_OUT",
};

const initialState = {
  isAuthenticated: false,
  isLoading: true,
  accessToken: null,
};

const handlers = {
  [HANDLERS.INITIALIZE]: (state, action) => {
    const accessToken = action.payload;

    return {
      ...state,
      ...// if payload (user) is provided, then is authenticated
      (accessToken
        ? {
            isAuthenticated: true,
            isLoading: false,
            accessToken,
          }
        : {
            isLoading: false,
          }),
    };
  },
  [HANDLERS.SIGN_IN]: (state, action) => {
    const accessToken = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      accessToken,
    };
  },
  [HANDLERS.SIGN_OUT]: (state) => {
    return {
      ...state,
      isAuthenticated: false,
      accessToken: null,
    };
  },
};

const reducer = (state, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

// The role of this context is to propagate authentication state through the App tree.

export const AuthContext = createContext({ undefined });

export const AuthProvider = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  const initialized = useRef(false);

  const initialize = async () => {
    // Prevent from calling twice in development mode with React.StrictMode enabled
    if (initialized.current) {
      return;
    }

    initialized.current = true;

    let accessToken = null;

    try {
      accessToken = window.sessionStorage.getItem("accessToken");
      // addAccessTokenToRequests(accessToken);
    } catch (err) {
      console.error(err);
    }

    if (accessToken) {
      dispatch({
        type: HANDLERS.INITIALIZE,
        payload: accessToken,
      });
    } else {
      dispatch({
        type: HANDLERS.INITIALIZE,
      });
    }
  };

  useEffect(
    () => {
      initialize();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const signIn = async (email, password) => {
    const res = await signInApi(email, password);
    // console.log(res);

    let accessToken;

    if (res.status == 200) {
      accessToken = res?.data?.access;
      // addAccessTokenToRequests(accessToken);
      window.sessionStorage.setItem("accessToken", accessToken);
    } else {
      // throw new Error("An error occurred");
    }

    dispatch({
      type: HANDLERS.SIGN_IN,
      payload: accessToken,
    });

    return { status: res?.status };
  };

  const signOut = () => {
    dispatch({
      type: HANDLERS.SIGN_OUT,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export const AuthConsumer = AuthContext.Consumer;

export const useAuthContext = () => useContext(AuthContext);
