import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Dimensions, TouchableOpacity} from 'react-native';
import {color} from '../Assets/ColorFile';
import {Avatar, Text, TextInput} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {register} from '../redux/Action/Action';
import { Mime } from 'mime';

const windowHeight = Dimensions.get('screen').height;
const windowWidth = Dimensions.get('screen').width;

const font1 = 'NanumMyeongjo-Bold';
const font2 = 'NanumMyeongjo-Regular';
const font3 = 'PlaywriteIS-Regular';
const font4 = 'ReenieBeanie-Regular';

export default function Signup({navigation, route}) {
  const [username, setusername] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [avatar, setavatar] = useState('');

  const dispatch = useDispatch();
  const registerHandler = () => {
    console.log(username, email, password, avatar);
    const myform = new FormData();
    // creating form
    myform.append('name', name);
    myform.append('email', email);
    myform.append('password', password);
    myform.append('avatar', {
      uri: avatar,
      type: Mime.getType(avatar),
      name: avatar.split('/').pop(),
    });
    dispatch(register(myform));
    dispatch(loadUser());
  };

  const Imagehandler = () => {
    navigation.navigate('camera');
  };

  useEffect(() => {
    // this is for camera
    if (route.params) {
      if (route.params.photo.path) {
        return setavatar(`file://${route.params.photo.path}`);
      } else if (route.params.photo) {
        // this is for taking photo from gallary
        return setavatar(route.params.photo);
      }
    }
  }, [route]);

  return (
    <View style={[styles.MainContainere]}>
      <Text style={styles.headertxt}>Create New</Text>
      <Text style={styles.headertxt2}>Account</Text>
      <Avatar.Image
        size={100}
        source={{uri: avatar ? avatar : null}}
        style={{
          backgroundColor: color.bgColor,
          borderColor: color.txtColor,
          borderWidth: 1,
          marginBottom: '5%',
        }}
      />
      <TouchableOpacity onPress={() => Imagehandler()}>
        <Text
          style={{
            fontSize: 18,
            borderColor: color.txtColor,
            borderWidth: 0.5,
            borderRadius: 10,
            paddingHorizontal: windowWidth / 12,
            paddingVertical: '2%',
            marginBottom: '5%',
          }}>
          Upload profile
        </Text>
      </TouchableOpacity>

      <TextInput
        label="FullName"
        value={username}
        onChangeText={text => setusername(text)}
        style={styles.inputfield}
      />
      <TextInput
        label="Email"
        value={email}
        keyboardType="email-address"
        onChangeText={text => setemail(text)}
        style={styles.inputfield}
      />
      <TextInput
        label="Password"
        style={styles.inputfield}
        secureTextEntry={true}
        value={password}
        onChangeText={text => setpassword(text)}
      />

      <TouchableOpacity
        onPress={() => {
          registerHandler();
        }}>
        <Text
          style={{
            fontSize: 25,
            borderColor: color.txtColor,
            borderWidth: 0.5,
            borderRadius: 10,
            paddingHorizontal: windowWidth / 5,
            paddingVertical: '2%',
          }}>
          Create
        </Text>
      </TouchableOpacity>
      <Text style={styles.accountMSG}>Buddy! Have an Account</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('login');
        }}>
        <Text style={styles.createAcc}> Login </Text>
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
    fontSize: 30,
    // fontWeight: '900',
    fontFamily: font1,
  },
  headertxt2: {
    color: color.txtColor,
    fontSize: 60,
    fontFamily: font1,
    marginBottom: windowHeight / 20,
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
  },
});
