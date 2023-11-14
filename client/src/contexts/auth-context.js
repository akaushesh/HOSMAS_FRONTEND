import { createContext, useContext, useEffect, useReducer, useRef } from "react";
import { URL } from "config";
import PropTypes from "prop-types";
import axios from "axios";

const HANDLERS = {
  INITIALIZE: "INITIALIZE",
  SIGN_IN: "SIGN_IN",
  SIGN_OUT: "SIGN_OUT",
};

const initialState = {
  isAuthenticated: false,
  isLoading: true,
  user: null,
};

const handlers = {
  [HANDLERS.INITIALIZE]: (state, action) => {
    const user = action.payload;

    return {
      ...state,
      ...// if payload (user) is provided, then is authenticated
      (user
        ? {
            isAuthenticated: true,
            isLoading: false,
            user,
          }
        : {
            isLoading: false,
          }),
    };
  },
  [HANDLERS.SIGN_IN]: (state, action) => {
    const user = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
  [HANDLERS.SIGN_OUT]: (state) => {
    return {
      ...state,
      isAuthenticated: false,
      user: null,
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

    let isAuthenticated = false;

    try {
      isAuthenticated = window.sessionStorage.getItem("authenticated") === "true";
    } catch (err) {
      console.error(err);
    }

    if (isAuthenticated) {
      const user = {
        id: "5e86809283e28b96d2d38537",
        avatar: "/assets/avatars/avatar-anika-visser.png",
        name: "Anika Visser",
        email: "anika.visser@devias.io",
      };

      dispatch({
        type: HANDLERS.INITIALIZE,
        payload: user,
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

  const skip = () => {
    try {
      window.sessionStorage.setItem("authenticated", "true");
    } catch (err) {
      console.error(err);
    }

    const user = {
      id: "5e86809283e28b96d2d38537",
      avatar: "/assets/avatars/avatar-anika-visser.png",
      name: "Anika Visser",
      email: "anika.visser@devias.io",
    };

    dispatch({
      type: HANDLERS.SIGN_IN,
      payload: user,
    });
  };

  const signIn = async (email, password) => {
    const loginURL = URL + "auth/token/";
    const data = { email, password };

    var loginConfig = {
      method: "post",
      maxBodyLength: Infinity,
      headers: {},
      data: data,
    };

    let loginResponse;

    try {
      loginResponse = await axios.post(loginURL, data, { loginConfig });
      window.sessionStorage.setItem("authenticated", "true");
      window.sessionStorage.setItem("jwt", loginResponse?.data?.access);
      window.sessionStorage.setItem("refresh", loginResponse?.data?.refresh);
    } catch (err) {
      console.error(err);
      if (err?.response?.status === 401) {
        throw new Error(err?.response?.data?.detail);
      }
    }

    const getProfileConfig = {
      method: "get",
      maxBodyLength: Infinity,
      headers: {
        Authorization: "Bearer " + loginResponse?.data?.access,
      },
    };

    const newURL = URL + "student/profile/";

    const getProfileResponse = await axios.get(newURL, getProfileConfig);

    const user = {
      batch: getProfileResponse?.data?.batch,
      cg: getProfileResponse?.data?.cg,
      gender: getProfileResponse?.gender,
      name: getProfileResponse?.data?.name,
      role: getProfileResponse?.data?.role,
      rollno: getProfileResponse?.data?.rollno,
    };
    console.log(user);

    dispatch({
      type: HANDLERS.SIGN_IN,
      payload: user,
    });
  };

  const signUp = async (email, name, password) => {
    throw new Error("Sign up is not implemented");
  };

  const signOut = () => {
    console.log("signout");
    try {
      window.sessionStorage.setItem("authenticated", "false");
      window.sessionStorage.removeItem("jwt");
      window.sessionStorage.removeItem("refresh");
    } catch (err) {
      console.error(err);
    }

    dispatch({
      type: HANDLERS.SIGN_OUT,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        skip,
        signIn,
        signUp,
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
