import { create } from "zustand";
import apiClient from "../services/api.js";

// Helper function to extract error data
const getErrorData = (error) => {
  if (error.response && error.response.data) {
    return {
      // If the error object has a response and response.data, it is probably an API error
      message: error.response.data.message || "An error occurred",
      statusCode: error.response.status,
    };
  }
  return {
    // If the error object does not have a response, it is probably a network error or something else
    message: error.message || "An unexpected error occurred",
    statusCode: null,
  };
};

const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,

  signin: async (userData) => {
    set({ isLoading: true, error: null });
    try {
      const response = await apiClient.post("/auth/signin", userData);
      set({
        user: response.data.user,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      console.log("API error:", error.response?.data);
      console.error("Sign in error:", error);
      const errorData = getErrorData(error);
      set({
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: errorData,
      });
      throw new Error(errorData.message);
    }
  },

  signup: async (userData) => {
    set({ isLoading: true, error: null });
    try {
      const response = await apiClient.post("/auth/signup", userData);
      set({
        user: response.data.user,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      console.error("Sign up error:", error);
      const errorData = getErrorData(error);
      set({
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: errorData,
      });
      throw new Error(errorData.message);
    }
  },

  signout: async () => {
    set({ isLoading: true, error: null });
    try {
      await apiClient.post("/auth/signout");
      set({
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      console.error("Sign out error:", error);
      const errorData = getErrorData(error);
      set({
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: errorData,
      });
    }
  },

  checkAuthStatus: async () => {
    set({ isLoading: true });
    try {
      const response = await apiClient.get("/users/me");
      set({
        user: response.data.user,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      console.log("Check auth status failed:", error.message);
      set({
        user: null,
        isAuthenticated: false,
        isLoading: false,
      });
    }
  },

  updateUser: (newUser) => {
    set({ user: newUser });
  },
}));

export default useAuthStore;
