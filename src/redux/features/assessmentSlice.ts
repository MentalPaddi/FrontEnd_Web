import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface AuthState {
  assessments: any;
}

// Define initial state
const initialState: AuthState = {
    assessments: {
        gender: '',
        age: 0,
        weight: 0,
        mood: '',
        is_professional_help: false,
        is_physical_distress: false,
        sleep_quality: '',
        medications: '',
        other_mental_symptom: '',
        stress_level: 0,
        health_goal: ''
    }
};

// Create a slice
const assessmentsSlice = createSlice({
  name: 'assessments',
  initialState,
  reducers: {
    setAssessments: (state, action: PayloadAction<any>) => {
      state.assessments = action.payload
    },
  }
});

// Export actions and reducer
export const selectAssessments = (state: RootState) => state.assessments;
export const { setAssessments } = assessmentsSlice.actions;
export default assessmentsSlice.reducer;
