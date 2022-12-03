import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operation';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
//   authErrorRegister: null,
//   authErrorLogIn: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
//   reducers: {
//     updateErrorLogIn(state, action) {
//         state.authErrorLogIn = action.payload;
//     },
//     updateErrorRegister(state, action) {
//         state.authErrorRegister = action.payload;
//     },
//   },
  extraReducers: {
    // [register.pending](state) {
    //     state.authErrorRegister = null;
    //   },
    [register.fulfilled](state, action) {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      state.isLoggedIn = true;
      state.error = null;
    //   state.authErrorRegister = null;
    },
    [register.rejected](state, action) {
    //   state.isLoggedIn = false;
    //   state.authErrorRegister = action.payload;
      state.error = action.payload;
    },
    // [logIn.pending](state) {
    //     state.authErrorLogIn = null;
    //   },
    [logIn.fulfilled](state, action) {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      state.isLoggedIn = true;
      state.error = null;
    //   state.authErrorLogIn = null;
    },
    [logIn.rejected](state, action) {
        // state.isLoggedIn = false;
        // state.authErrorLogIn = action.payload;
        state.error = action.payload;
      },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.error = null;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.error = null;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

// export const { updateErrorLogIn, updateErrorRegister } = authSlice.actions;

export const authReducer = authSlice.reducer;