import {createReducer} from '@reduxjs/toolkit';
const initialState = {};

console.log(initialState.isAuthenticated);

const clearError = 'clearError';
const clearMessage = 'clearMessage';
const loginSuccess = 'loginSuccess';
const loginRequest = 'loginRequest';
const loginFailure = 'loginFailure';
const logoutFailure = 'logoutFailure';
const logoutSuccess = 'logoutSuccess';
const logoutRequest = 'logoutRequest';
const addTaskRequest = 'addTaskRequest';
const addTaskFailure = 'addTaskFailure';
const addTaskSuccess = 'addTaskSuccess';
const loadUserRequest = 'loadUserRequest';
const loadUserSuccess = 'loadUserSuccess';
const loadUserFailure = 'loadUserFailure';
const registerRequest = 'registerRequest';
const registerSuccess = 'registerSuccess';
const registerFailure = 'registerFailure';
const updateTaskFailure = 'updateTaskFailure';
const updateTaskRequest = 'updateTaskRequest';
const updateTaskSuccess = 'updateTaskSuccess';
const deleteTaskFailure = 'deleteTaskFailure';
const deleteTaskRequest = 'deleteTaskRequest';
const deleteTaskSuccess = 'deleteTaskSuccess';
const UpdateProfileRequest = 'UpdateProfileRequest';
const UpdateProfileFailure = 'UpdateProfileFailure';
const UpdateProfileSuccess = 'UpdateProfileSuccess';
const UpdateProfilePasswordSuccess = 'UpdateProfilePasswordSuccess';
const UpdateProfilePasswordRequest = 'UpdateProfilePasswordRequest';
const UpdateProfilePasswordFailure = 'UpdateProfilePasswordFailure';
const UserVerifyRequest = 'UserVerifyRequest';
const UserVerifyFailure = 'UserVerifyFailure';
const UserVerifySuccess = 'UserVerifySuccess';
const forgotPasswordFailure = 'forgotPasswordFailure';
const forgotPasswordRequest = 'forgotPasswordRequest';
const forgotPasswordSuccess = 'forgotPasswordSuccess';
const ResetPasswordFailure = 'ResetPasswordFailure';
const ResetPasswordRequest = 'ResetPasswordRequest';
const ResetPasswordSuccess = 'ResetPasswordSuccess';

export const authReducer = createReducer(initialState, builder => {
  builder
    .addCase(loginRequest, state => {
      state.loading = true;
    })
    .addCase(loginSuccess, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
      state.error = null; // Clear any previous error on success
    })
    .addCase(loginFailure, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    })
    .addCase(loadUserRequest, state => {
      state.loading = true;
    })
    .addCase(loadUserSuccess, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.error = null; // Clear any previous error on success
    })
    .addCase(loadUserFailure, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    })
    .addCase(UserVerifyRequest, state => {
      state.loading = true;
    })
    .addCase(UserVerifySuccess, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(UserVerifyFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(clearError, state => {
      state.error = null;
    })
    .addCase(clearMessage, state => {
      state.message = null;
    });
});

export const taskReducer = createReducer({}, builder => {
  builder
    .addCase(addTaskRequest, state => {
      state.loading = true;
    })
    .addCase(addTaskSuccess, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(addTaskFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(updateTaskRequest, state => {
      state.loading = true;
    })
    .addCase(updateTaskSuccess, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(updateTaskFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(deleteTaskRequest, state => {
      state.loading = true;
    })
    .addCase(deleteTaskSuccess, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(deleteTaskFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(UpdateProfileRequest, state => {
      state.loading = true;
    })
    .addCase(UpdateProfileSuccess, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(UpdateProfileFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(forgotPasswordRequest, state => {
      state.loading = true;
    })
    .addCase(forgotPasswordSuccess, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(forgotPasswordFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(ResetPasswordRequest, state => {
      state.loading = true;
    })
    .addCase(ResetPasswordSuccess, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(ResetPasswordFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    .addCase(UpdateProfilePasswordRequest, state => {
      state.loading = true;
    })
    .addCase(UpdateProfilePasswordSuccess, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
      state.error = null; // Clear any previous error on success
    })
    .addCase(UpdateProfilePasswordFailure, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    })
    .addCase(registerRequest, state => {
      state.loading = true;
    })
    .addCase(registerSuccess, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
      state.error = null; // Clear any previous error on success
    })
    .addCase(registerFailure, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    })

    .addCase(logoutRequest, state => {
      state.loading = true;
    })
    .addCase(logoutSuccess, state => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
    })
    .addCase(logoutFailure, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.error = action.payload;
    })

    .addCase(clearError, state => {
      state.error = null;
    })
    .addCase(clearMessage, state => {
      state.message = null;
    });
});

export {
  loginRequest,
  loginSuccess,
  loginFailure,
  logoutRequest,
  logoutSuccess,
  logoutFailure,
  loadUserRequest,
  loadUserSuccess,
  loadUserFailure,
  clearError,
  clearMessage,
  addTaskFailure,
  addTaskSuccess,
  addTaskRequest,
  updateTaskFailure,
  updateTaskSuccess,
  updateTaskRequest,
  deleteTaskFailure,
  deleteTaskRequest,
  deleteTaskSuccess,
  UpdateProfilePasswordRequest,
  UpdateProfilePasswordSuccess,
  UpdateProfilePasswordFailure,
  UpdateProfileRequest,
  UpdateProfileFailure,
  UpdateProfileSuccess,
  registerFailure,
  registerSuccess,
  registerRequest,
  UserVerifyFailure,
  UserVerifyRequest,
  UserVerifySuccess,
  forgotPasswordFailure,
  forgotPasswordSuccess,
  forgotPasswordRequest,
  ResetPasswordRequest,
  ResetPasswordFailure,
  ResetPasswordSuccess,
};
