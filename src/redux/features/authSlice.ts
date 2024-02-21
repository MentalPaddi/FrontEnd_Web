import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface AuthState {
  signedUpUser: any;
  signedInUser: any;
}

// Define initial state
const initialState: AuthState = {
    signedUpUser: null,
    signedInUser: null
};

// Create a slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setSignUpUser: (state, action: PayloadAction<any>) => {
      state.signedUpUser = action.payload
    },
    setSignInUser: (state, action: PayloadAction<any>) => {
      state.signedInUser = action.payload
    },
    signOut: (state, action: PayloadAction<any>) => {
      state = initialState;
    }
  }
});

// Export actions and reducer
export const selectAuth = (state: RootState) => state.auth;
export const { setSignUpUser, setSignInUser, signOut } = authSlice.actions;
export default authSlice.reducer;
