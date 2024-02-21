import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface AuthState {
  componentLoading: string;
}

// Define initial state
const initialState: AuthState = {
    componentLoading: ''
};

// Create a slice
const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    setLoader: (state, action: PayloadAction<any>) => {
      state.componentLoading = action.payload
    },
  }
});

// Export actions and reducer
export const selectLoader = (state: RootState) => state.loader;
export const { setLoader } = loaderSlice.actions;
export default loaderSlice.reducer;
