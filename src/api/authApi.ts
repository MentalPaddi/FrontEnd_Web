// api.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '@/redux/store';  

const baseUrl = 'https://donbot-6nb4.onrender.com';

interface LoginRequest {
  email: string;
  password: string;
}

interface SignupRequest {
  first_name: string;
  last_name: string;
  password: string;
  password2: string;
  email: string;
}

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl,
    prepareHeaders: (headers, { getState }) => {
        const signupToken = (getState() as RootState).auth?.signedUpUser?.data?.access;
        const signinToken = (getState() as RootState).auth?.signedInUser?.access;
      if (signinToken) {
        console.log('in')
        headers.set('authorization', `Bearer ${signinToken}`);
        return headers;
      } else if (signupToken) {
        console.log('up')
        headers.set('authorization', `Bearer ${signupToken}`);
        return headers;
      } else {
        return
      }
    },
  }),
  endpoints: (builder) => ({
    signInUser: builder.mutation<any, LoginRequest>({
      query: (body) => ({
        url: '/accounts/auth/login/',
        method: 'POST',
        body
      }),
    }),
    signUpUser: builder.mutation<any, SignupRequest>({ 
      query: (body) => ({
        url: '/accounts/auth/signup/',
        method: 'POST',
        body,
        headers: {
          'Content-Type': 'application/json', 
        }
      }),
    }), 
    submitAssessment: builder.mutation<any, any>({ 
      query: (body) => ({
        url: '/assessment/assessment_create/',
        method: 'POST',
        body,
        headers: {
          'Content-Type': 'application/json', 
        }
      }),
    }), 
    updateProfile: builder.mutation<any, any>({ 
      query: (body) => ({
        url: '/accounts/profile_update/',
        method: 'PUT',
        body,
        headers: {
          'Content-Type': 'application/json', 
        }
      }),
    }), 
    createJournal: builder.mutation<any, any>({ 
      query: (body) => ({
        url: '/accounts/profile_update/',
        method: 'POST',
        body,
        headers: {
          'Content-Type': 'application/json', 
        }
      }),
    }), 
  }),
});

export const { 
  useSignInUserMutation, 
  useSignUpUserMutation,
  useSubmitAssessmentMutation,
  useUpdateProfileMutation,
  useCreateJournalMutation,
} = authApi;
