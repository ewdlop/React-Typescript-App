import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  // Add other relevant fields as needed
}

const initialState: AuthState = {
  token: null,
  isAuthenticated: false,
  // initialize other fields as needed
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
    setAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    // define other actions as needed
  },
});

export const { setToken, setAuthenticated } = authSlice.actions;

export default authSlice.reducer;