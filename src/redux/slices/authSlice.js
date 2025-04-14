import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: null,
  error: null
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      // Simple admin authentication for demo purposes
      const { username, password } = action.payload;
      if (username === 'admin' && password === 'admin') {
        state.isAuthenticated = true;
        state.user = { username: 'admin', role: 'admin' };
        state.error = null;
      } else {
        state.error = 'Invalid credentials';
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    }
  }
});

export const { login, logout, clearError } = authSlice.actions;

export default authSlice.reducer;
