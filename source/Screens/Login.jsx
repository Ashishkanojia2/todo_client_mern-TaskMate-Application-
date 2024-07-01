import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {color} from '../Assets/ColorFile';
import {Text, TextInput} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../redux/Action/Action';
import {clearError} from '../redux/reducer/Reducer';

const windowHeight = Dimensions.get('screen').height;
const windowWidth = Dimensions.get('screen').width;

const font1 = 'NanumMyeongjo-Bold';
const font2 = 'NanumMyeongjo-Regular';
const font3 = 'PlaywriteIS-Regular';
const font4 = 'ReenieBeanie-Regular';

export default function Login({navigation}) {
  const dispatch = useDispatch();
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');

  const {isAuthenticated, error, user} = useSelector(state => state.auth);

  useEffect(() => {
    if (error) {
      Alert.alert(error);
      dispatch({type: clearError});
    }
  }, [error, dispatch, Alert]);

  const loginHandler = () => {
    dispatch(login(username, password));
    // navigation.navigate('home');
  };

  return (
    <View style={[styles.MainContainere]}>
      <Text style={styles.headertxt}>Login Your</Text>
      <Text style={styles.headertxt2}>Account</Text>
      <TextInput
        label="Email/UserName"
        value={username}
        onChangeText={text => setusername(text)}
        style={styles.inputfield}
      />
      <TextInput
        label="Password"
        style={styles.inputfield}
        secureTextEntry={true}
        value={password}
        onChangeText={text => setpassword(text)}
      />
      <TouchableOpacity onPress={() => loginHandler()}>
        <Text
          style={{
            fontSize: 25,
            borderColor: color.txtColor,
            borderWidth: 0.5,
            borderRadius: 10,
            paddingHorizontal: windowWidth / 5,
            paddingVertical: '2%',
          }}>
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('forgotpassword')}>
        <Text
          style={{
            fontSize: 15,
            color: '#c9c9c9',
            paddingVertical: '5%',
          }}>
          forgot password
        </Text>
      </TouchableOpacity>
      <Text style={styles.accountMSG}>
        Really! don't have an Account? so why your waiting..
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('signin');
        }}>
        <Text style={styles.createAcc}>Create New Account </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainere: {
    backgroundColor: color.bgColor,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputfield: {
    marginBottom: '10%',
    width: windowWidth - 50,
    backgroundColor: color.bgColor,
  },
  headertxt: {
    color: color.txtColor,
    fontSize: 40,
    // fontWeight: '900',
    fontFamily: font1,
  },
  headertxt2: {
    color: color.txtColor,
    fontSize: 90,
    // fontWeight: '900',
    fontFamily: font1,
    marginBottom: windowHeight / 10,
  },
  accountMSG: {
    color: color.txtColor,
    fontSize: 15,
    marginVertical: '10%',
  },
  createAcc: {
    color: color.txtColor,
    fontSize: 18,
    textDecorationLine: 'underline',
    // marginVertical:"10%"
  },
});
