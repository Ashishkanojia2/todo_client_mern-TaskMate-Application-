import React, {useState} from 'react';
import {StyleSheet, View, Dimensions, TouchableOpacity} from 'react-native';
import {color} from '../Assets/ColorFile';
import {Text, TextInput} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {Userverification, loadUser} from '../redux/Action/Action';

const windowHeight = Dimensions.get('screen').height;
const windowWidth = Dimensions.get('screen').width;

export default function VerifyUser({navigation, route}) {
  const dispatch = useDispatch();

  const {user} = useSelector(state => state.auth);

  const [otp, setotp] = useState();

  const VerifyHandler = async () => {
    await dispatch(Userverification(otp));
    dispatch(loadUser());
    console.log('verify account');
  };

  return (
    <View style={[styles.MainContainere]}>
      <Text style={styles.headertxt}>Verify Your</Text>
      <Text style={styles.headertxt1}>Account</Text>
      <TextInput
        label="Enter OTP Code"
        value={otp}
        onChangeText={text => setotp(text)}
        keyboardType="number-pad"
        style={[styles.inputfield, {marginTop: '50%'}]}
      />

      <TouchableOpacity onPress={() => VerifyHandler()}>
        <Text
          style={{
            fontSize: 20,
            borderColor: color.txtColor,
            borderWidth: 0.5,
            borderRadius: 10,
            paddingHorizontal: windowWidth / 5,
            paddingVertical: '2%',
            marginTop: '20%',
          }}>
          Verify
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainere: {
    backgroundColor: color.bgColor,
    flex: 1,
    alignItems: 'center',
  },
  header: {
    backgroundColor: color.bgColor,
    height: windowHeight / 15,
    width: windowWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '2%',
    alignItems: 'center',
    elevation: 30,
    shadowColor: color.txtColor,
    paddingVertical: 5,
  },
  profileContainer: {
    height: '90%',
    width: '12%',
    backgroundColor: 'pink',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '1%',
  },
  headertxt: {
    color: color.txtColor,
    fontSize: 30,
    fontWeight: '600',
    marginTop: '15%',
  },
  headertxt1: {
    color: color.txtColor,
    fontSize: 60,
    fontWeight: '600',
    // marginTop: '15%',
  },
  headerContainer: {},
  taskContainer: {
    minHeight: windowHeight / 7,
    maxHeight: windowHeight / 3,
    width: windowWidth - 20,
    backgroundColor: '#0E8388',
    borderRadius: 20,
    marginVertical: 10,
    padding: '2%',
    overflow: 'hidden',
  },
  editTask: {
    height: '7%',
    width: '15%',
    borderColor: '#fff',
    borderWidth: 1,
    backgroundColor: color.bgColor,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  inputfield: {
    marginBottom: '10%',
    width: windowWidth - 50,
    backgroundColor: color.bgColor,
  },
});
