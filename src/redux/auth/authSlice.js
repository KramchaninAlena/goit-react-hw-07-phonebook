import { createSlice } from '@reduxjs/toolkit';
import { refreshUser, registerUser } from './operation';

const initialState = {
  user: null,
  token: '',
  isRefreshing: false,
  isLoggedIn: false
};

export const authtsSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
        state.isLoggedIn = true
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      // .addCase(refreshUser.pending, state => {
      //   state.isLoggedIn = false;
      //   state.isRefreshing = true;
      // })
    //     .addCase()
    //     .addCase()
    // .addMatcher(action => action.type.endsWith('pending'), handlePending)
    // .addMatcher(action => action.type.endsWith('rejected'), handleRejected)
    // .addMatcher(action => action.type.endsWith('fulfilled'), handleFulfilled);
  },
});

export const authReducer = authtsSlice.reducer;
