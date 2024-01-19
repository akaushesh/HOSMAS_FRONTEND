import { createContext, useContext, useEffect, useReducer, useRef } from "react";
import { URL } from "config";
import PropTypes from "prop-types";
import axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useProfile } from "src/hooks/use-profile";

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
  const queryClient = useQueryClient();
  const [state, dispatch] = useReducer(reducer, initialState);
  const initialized = useRef(false);

  const { user } = useProfile();

  const initialize = async () => {
    if (initialized.current) {
      return;
    }

    initialized.current = true;

    let isAuthenticated = false;

    try {
      isAuthenticated = window.sessionStorage.getItem("authenticated") === "true";
    } catch (err) {
      // console.error(err);
    }

    if (isAuthenticated) {
      dispatch({
        type: HANDLERS.INITIALIZE,
      });
    } else {
      dispatch({
        type: HANDLERS.INITIALIZE,
      });
    }
  };

  useEffect(() => {
    initialize();
  }, []);

  const skip = () => {
    try {
      window.sessionStorage.setItem("authenticated", "true");
    } catch (err) {
      // console.error(err);
    }

    dispatch({
      type: HANDLERS.SIGN_IN,
      payload: user,
    });
  };

  const signIn = async (email, password) => {
    try {
      const loginURL = URL + "auth/token/";
      const data = { email, password };

      var loginConfig = {
        method: "post",
        maxBodyLength: Infinity,
        headers: {},
        data: data,
      };

      const loginResponse = await axios.post(loginURL, data, { loginConfig });
      window.sessionStorage.setItem("authenticated", "true");
      window.sessionStorage.setItem("jwt", loginResponse?.data?.access);
      window.sessionStorage.setItem("refresh", loginResponse?.data?.refresh);

      queryClient.invalidateQueries(["getProfile"]);

      const userProfile = queryClient.getQueriesData(["getProfile"])[0][1];

      const user = {
        batch: userProfile?.batch,
        cg: userProfile?.cg,
        gender: userProfile?.gender,
        name: userProfile?.name,
        role: userProfile?.role,
        rollno: userProfile?.rollno,
        email: userProfile?.email,
        group: userProfile?.group,
        gender: userProfile?.gender,
        batch: userProfile?.batch,
        current_hostel: userProfile?.current_hostel,
        current_room: userProfile?.current_room,
        alloted_hostel: userProfile?.alloted_hostel,
        alloted_room: userProfile?.alloted_room,
        preference_filled: userProfile?.preference_filled,
        group_size: userProfile?.group_size_limit,
      };

      dispatch({
        type: HANDLERS.SIGN_IN,
        payload: user,
      });
    } catch (err) {
      // console.error(err);
      if (err?.response?.status === 401) {
        throw new Error(err?.response?.data?.detail);
      }
      throw new Error("Something went wrong");
    }
  };

  const signUp = async (email, name, password) => {
    throw new Error("Sign up is not implemented");
  };

  const signOut = () => {
    try {
      window.sessionStorage.setItem("authenticated", "false");
      window.sessionStorage.removeItem("jwt");
      window.sessionStorage.removeItem("refresh");
    } catch (err) {
      // console.error(err);
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
