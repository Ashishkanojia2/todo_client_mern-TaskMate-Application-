import {createReducer} from '@reduxjs/toolkit';
const initialState = {};

console.log(initialState.isAuthenticated);
/*



const initialState = {
loading = '',
isAuthenticated = '',
user:{}       // recived from payload
message:'',
error:'',
};



*/
// export const authReducer = createReducer(initialState, {
//   loginRequest: state => {
//     state.loading = true;
//   },
//   loginSuccess: (state, action) => {
//     //ACTION ME HAME USER KA DATA , MESSAGE OR SUCCESS MILL REHI HAI
//     state.loading = false;
//     state.isAuthenticated = true;
//     state.user = action.payload.user;
//     state.message = action.payload.message;
//   },
//   loginFailure: (state, action) => {
//     state.loading = false;
//     state.isAuthenticated = false;
//     state.error = action.payload;
//   },

//   loadUserRequest: state => {
//     state.loading = true;
//   },
//   loadUserSuccess: (state, action) => {
//     state.loading = false;
//     state.isAuthenticated = true;
//     state.user = action.payload.user;
//   },
//   loadUserFailure: (state, action) => {
//     state.loading = false;
//     state.isAuthenticated = false;
//     state.error = action.payload;
//   },

//   clearError: state => {
//     state.error = null;
//   },
//   clearMessage: state => {
//     state.message = null;
//   },
// });

const clearError = 'clearError';
const clearMessage = 'clearMessage';
const loginSuccess = 'loginSuccess';
const loginRequest = 'loginRequest';
const addTaskRequest = 'addTaskRequest';
const addTaskFailure = 'addTaskFailure';
const addTaskSuccess = 'addTaskSuccess';
const loginFailure = 'loginFailure';
const loadUserRequest = 'loadUserRequest';
const loadUserSuccess = 'loadUserSuccess';
const loadUserFailure = 'loadUserFailure';



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
  loadUserRequest,
  loadUserSuccess,
  loadUserFailure,
  clearError,
  clearMessage,
  addTaskFailure,
  addTaskSuccess,
  addTaskRequest,
};
