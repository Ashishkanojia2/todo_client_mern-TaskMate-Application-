import axios from 'axios';
import {
  addTaskFailure,
  addTaskRequest,
  addTaskSuccess,
  loadUserFailure,
  loadUserRequest,
  loadUserSuccess,
  loginFailure,
  loginRequest,
  loginSuccess,
} from '../reducer/Reducer';
// import {useDispatch} from 'react-redux';

// const dispatch = useDispatch();
const serverURL = 'https://todo-server-mern.onrender.com/api/v1';

export const loadUser = () => async dispatch => {
  // function return anotjer function
  try {
    dispatch({type: loadUserRequest});

    const {data} = await axios.get(`${serverURL}/me`);

    // data--> user, message,success recived ho raha hia

    dispatch({type: loadUserSuccess, payload: data});
  } catch (error) {
    dispatch({type: loadUserFailure, payload: error.response.data.message});
  }
};
//
//
//  ADD NEW TASK
//
//

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

    dispatch({type: loginSuccess, payload: data}); // Dispatch using imported constant
  } catch (error) {
    dispatch({type: loginFailure, payload: error.response.data.message});
  }
};
