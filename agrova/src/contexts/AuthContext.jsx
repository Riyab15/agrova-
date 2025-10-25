import React, { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

// Mock user types
export const USER_TYPES = {
  CONSUMER: "consumer",
  FARMER: "farmer",
  ADMIN: "admin",
};

// Auth states
const initialState = {
  user: null,
  isAuthenticated: false,
  userType: null,
  loading: false,
  error: null,
};

// Auth actions
const authReducer = (state, action) => {
  switch (action.type) {
    case "AUTH_START":
      return { ...state, loading: true, error: null };
    case "AUTH_SUCCESS":
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload.user,
        userType: action.payload.userType,
        error: null,
      };
    case "AUTH_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
        isAuthenticated: false,
        user: null,
        userType: null,
      };
    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Mock login function
  const login = async (credentials, userType) => {
    dispatch({ type: "AUTH_START" });

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock successful login
      const mockUser = {
        id: Date.now(),
        email: credentials.email,
        name:
          userType === USER_TYPES.FARMER
            ? "John Farmer"
            : userType === USER_TYPES.ADMIN
            ? "Admin User"
            : "John Consumer",
        avatar: `https://ui-avatars.com/api/?name=${credentials.email}&background=4a9a4a&color=fff`,
        userType,
      };

      dispatch({
        type: "AUTH_SUCCESS",
        payload: { user: mockUser, userType },
      });

      // Store in localStorage (in real app, use secure token storage)
      localStorage.setItem("f2c_user", JSON.stringify(mockUser));
      localStorage.setItem("f2c_token", "mock_jwt_token");

      return { success: true };
    } catch (error) {
      dispatch({ type: "AUTH_ERROR", payload: error.message });
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    localStorage.removeItem("f2c_user");
    localStorage.removeItem("f2c_token");
    dispatch({ type: "LOGOUT" });
  };

  // Check for existing session on mount
  React.useEffect(() => {
    const user = localStorage.getItem("f2c_user");
    const token = localStorage.getItem("f2c_token");

    if (user && token) {
      const userData = JSON.parse(user);
      dispatch({
        type: "AUTH_SUCCESS",
        payload: { user: userData, userType: userData.userType },
      });
    }
  }, []);

  const value = {
    ...state,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
