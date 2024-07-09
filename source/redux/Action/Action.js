import axios from 'axios';
import {
  UpdateProfileFailure,
  UpdateProfilePasswordRequest,
  UpdateProfilePasswordSuccess,
  UpdateProfilePasswordFailure,
  UpdateProfileRequest,
  UpdateProfileSuccess,
  addTaskFailure,
  addTaskRequest,
  addTaskSuccess,
  deleteTaskFailure,
  deleteTaskRequest,
  deleteTaskSuccess,
  loadUserFailure,
  loadUserRequest,
  loadUserSuccess,
  loginFailure,
  loginRequest,
  loginSuccess,
  logoutFailure,
  logoutRequest,
  logoutSuccess,
  registerFailure,
  registerRequest,
  registerSuccess,
  updateTaskFailure,
  updateTaskRequest,
  updateTaskSuccess,
  UserVerifyRequest,
  UserVerifySuccess,
  UserVerifyFailure,
} from '../reducer/Reducer';
// import {useDispatch} from 'react-redux';

// const dispatch = useDispatch();
const serverURL = 'https://todo-server-mern.onrender.com/api/v1';

export const loadUser = () => async dispatch => {
  // function return another function
  try {
    dispatch({type: loadUserRequest});

    const {data} = await axios.get(`${serverURL}/me`);

    // data--> user, message,success recived ho raha hia

    dispatch({type: loadUserSuccess, payload: data});
  } catch (error) {
    dispatch({type: loadUserFailure, payload: error.response.data.message});
  }
};

export const addTask = (title, description) => async dispatch => {
  // function return anotjer function
  try {
    dispatch({type: addTaskRequest});

    const {data} = await axios.post(
      `${serverURL}/newtask`,
      {
        title,
        description,
      },
      {
        headers: {'Content-Type': 'application/json'},
      },
    );

    // data--> user, message,success recived ho raha hia

    dispatch({type: addTaskSuccess, payload: data.message});
  } catch (error) {
    dispatch({type: addTaskFailure, payload: error.response.data.message});
  }
};

export const login = (email, password) => async dispatch => {
  try {
    dispatch({type: loginRequest}); // Dispatch using imported constant

    const {data} = await axios.post(
      `${serverURL}/login`,
      {email, password},
      {
        headers: {
          'Content-Type': 'application/json', // Fixed typo 'application/json'
        },
      },
    );

    // console.log('Data received from server:', data);
    console.log('user login ka data kya mill raha hai', data);
    dispatch({type: loginSuccess, payload: data}); // Dispatch using imported constant
  } catch (error) {
    dispatch({type: loginFailure, payload: error.response.data.message});
  }
};

export const updateTask = taskId => async dispatch => {
  // function return anotjer function
  try {
    dispatch({type: updateTaskRequest});

    const {data} = await axios.get(`${serverURL}/task/${taskId}`);

    dispatch({type: updateTaskSuccess, payload: data.message});
  } catch (error) {
    dispatch({type: updateTaskFailure, payload: error.response.data.message});
  }
};
export const deleteTask = taskId => async dispatch => {
  // function return anotjer function
  try {
    dispatch({type: deleteTaskRequest});

    const {data} = await axios.delete(`${serverURL}/task/${taskId}`);

    dispatch({type: deleteTaskSuccess, payload: data.message});
  } catch (error) {
    dispatch({type: deleteTaskFailure, payload: error.response.data.message});
  }
};
export const UpdateProfile = formDate => async dispatch => {
  // function return anotjer function
  try {
    dispatch({type: UpdateProfileRequest});

    const {data} = await axios.put(`${serverURL}/updateprofile`, formDate, {
      headers: {'Content-Type': 'multipart/form-data'},
    });

    dispatch({type: UpdateProfileSuccess, payload: data.message});
  } catch (error) {
    dispatch({
      type: UpdateProfileFailure,
      payload: error.response.data.message,
    });
  }
};

export const logout = () => async dispatch => {
  // function return anotjer function
  try {
    dispatch({type: logoutRequest});

    await axios.get(`${serverURL}/logout`);

    dispatch({type: logoutSuccess});
  } catch (error) {
    dispatch({type: logoutFailure, payload: error.response.data.message});
  }
};

export const register = formDate => async dispatch => {
  // function return anotjer function
  try {
    dispatch({type: registerRequest});

    const {data} = await axios.post(`${serverURL}/register`, formDate, {
      headers: {'Content-Type': 'multipart/form-data'},
    });

    dispatch({type: registerSuccess, payload: data});
  } catch (error) {
    dispatch({
      type: registerFailure,
      payload: error.response.data.message,
    });
  }
};

export const UpdatePassword = (oldPassword, newPassword) => async dispatch => {
  // function return anotjer function
  try {
    dispatch({type: UpdateProfilePasswordRequest});

    const {data} = await axios.put(
      `${serverURL}/updatepassword`,
      {oldPassword, newPassword},
      {
        headers: {'Content-Type': 'application/json'},
      },
    );

    dispatch({type: UpdateProfilePasswordSuccess, payload: data.message});
  } catch (error) {
    dispatch({
      type: UpdateProfilePasswordFailure,
      payload: error.response.data,
    });
  }
};
export const Userverification = otp => async dispatch => {
  // function return anotjer function
  try {
    dispatch({type: UserVerifyRequest});

    const {data} = await axios.post(
      `${serverURL}/verify`,
      {otp},
      {
        headers: {'Content-Type': 'application/json'},
      },
    );

    dispatch({type: UserVerifySuccess, payload: data.message});
  } catch (error) {
    dispatch({
      type: UserVerifyFailure,
      payload: error.response.data,
    });
  }
};
