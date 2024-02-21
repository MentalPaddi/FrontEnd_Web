// api.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const baseUrl = 'https://donbot.pythonanywhere.com';

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
  baseQuery: fetchBaseQuery({ baseUrl }),
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
  }),
});

export const { 
  useSignInUserMutation, 
  useSignUpUserMutation,
} = authApi;
