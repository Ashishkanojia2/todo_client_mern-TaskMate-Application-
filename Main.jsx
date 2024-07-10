import {StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './source/Screens/Home';
import Profile from './source/Screens/Profile';
import Login from './source/Screens/Login';
import Signin from './source/Screens/Signin';
import Camera from './source/Screens/Camera';
import {Provider} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import Loading from './source/Components/loader';
import {loadUser} from './source/redux/Action/Action';
import ForgotPassword from './source/Screens/ForgotPassword';
import ChangePassword from './source/Screens/ChangePassword';
import VerifyUser from './source/Screens/VerifyUser';
import ResetPassword from './source/Screens/ResetPassword';

const Stack = createNativeStackNavigator();

export default function Main() {
  const {isAuthenticated, loading, task} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  // console.log('@#@#@#', task);
  useEffect(() => {
    // console.log('loading', loading);
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Provider>
      {loading == false ? (
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={isAuthenticated ? 'home' : 'login'}>
            <Stack.Screen
              name="home"
              component={Home}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="profile"
              component={Profile}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="login"
              component={Login}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="signin"
              component={Signin}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="camera"
              component={Camera}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="forgotpassword"
              component={ForgotPassword}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="changePassword"
              component={ChangePassword}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="verifyUser"
              component={VerifyUser}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="resetpassword"
              component={ResetPassword}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      ) : (
        <Loading />
      )}
    </Provider>
  );
}

const styles = StyleSheet.create({});
