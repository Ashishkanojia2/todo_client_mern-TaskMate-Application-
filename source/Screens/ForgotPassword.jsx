import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {color} from '../Assets/ColorFile';
import {ActivityIndicator, Text, TextInput} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {ForgotUserPassword, login} from '../redux/Action/Action';
import {clearError} from '../redux/reducer/Reducer';

const windowHeight = Dimensions.get('screen').height;
const windowWidth = Dimensions.get('screen').width;

const font1 = 'NanumMyeongjo-Bold';

export default function ForgotPassword({navigation}) {
  const dispatch = useDispatch();
  const [username, setusername] = useState('');

  const {isAuthenticated, error, user} = useSelector(state => state.auth);
  const {loading} = useSelector(state => state.task);
  console.log(loading);
  useEffect(() => {
    if (error) {
      Alert.alert(error);
      dispatch({type: clearError});
    }
  }, [error, dispatch, Alert]);

  const ForgetPasswordHandler = async () => {
    await dispatch(ForgotUserPassword(username));
    navigation.navigate('resetpassword');
  };

  return (
    <View style={[styles.MainContainere]}>
      <Text style={styles.headertxt}>Forgot Password</Text>
      <TextInput
        label="Email/UserName"
        value={username}
        onChangeText={text => setusername(text)}
        style={styles.inputfield}
      />

      <TouchableOpacity
        onPress={() => ForgetPasswordHandler()}
        disabled={loading}>
        {loading ? (
          <ActivityIndicator animating={true} />
        ) : (
          <Text
            style={{
              fontSize: 20,
              borderColor: color.txtColor,
              borderWidth: 0.5,
              borderRadius: 10,
              paddingHorizontal: windowWidth / 5,
              paddingVertical: '2%',
            }}>
            Send Mail
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainere: {
    backgroundColor: color.bgColor,
    flex: 1,
    alignItems: 'center',
    paddingTop: '30%',
    // justifyContent: 'center',
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
    marginBottom: '30%',
    fontFamily: font1,
  },
});
