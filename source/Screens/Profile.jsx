import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Dimensions, TouchableOpacity} from 'react-native';
import {color} from '../Assets/ColorFile';
import {Avatar, Text, TextInput} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {UpdateProfile, loadUser, logout} from '../redux/Action/Action';
import mime from 'mime'; // this told us file type

const windowHeight = Dimensions.get('screen').height;
const windowWidth = Dimensions.get('screen').width;

export default function Profile({navigation, route}) {
  const dispatch = useDispatch();

  const {user} = useSelector(state => state.auth);

  const [name, setname] = useState(user.name);
  const [avatar, setavatar] = useState(user.avatar.url);

  // console.log('kuch mila ',user);
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

  const updateProfileHandler = async () => {
    // console.log('update ho raha hai');

    const myform = new FormData();
    // creating form
    myform.append('name', name);
    myform.append('avatar', {
      uri: avatar,
      type: mime.getType(avatar),
      name: avatar.split('/').pop(),
    });
    await dispatch(UpdateProfile(myform));
    dispatch(loadUser());
  };
  const changePasswordHandler = () => {
    console.log('changePasswordHandler');
    navigation.navigate('changePassword');
  };
  const logoutHandler = async () => {
    console.log('logoutHandler');
    await dispatch(logout());
    dispatch(loadUser());
  };
  const VerifyHandler = () => {
    navigation.navigate('verifyUser');
    console.log('verify account');
  };

  return (
    <View style={[styles.MainContainere]}>
      <View style={styles.header}>
        <Text style={styles.headertxt}>Profile</Text>
      </View>
      <Avatar.Image
        size={100}
        source={{uri: avatar ? avatar : null}}
        style={{
          backgroundColor: color.bgColor,
          borderColor: color.txtColor,
          borderWidth: 1,
          marginBottom: '5%',
          marginTop: '15%',
        }}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('camera', {profileValue: true})}>
        <Text
          style={{
            fontSize: 15,
            color: 'gray',
            paddingHorizontal: windowWidth / 5,
            paddingVertical: '2%',
            marginTop: '1%',
            marginTop: '1%',
          }}>
          Change profile
        </Text>
      </TouchableOpacity>
      <TextInput
        label="FullName"
        value={name}
        onChangeText={text => setname(text)}
        style={styles.inputfield}
      />
      <TouchableOpacity onPress={() => updateProfileHandler()}>
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
          Update Profile
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => changePasswordHandler()}>
        <Text
          style={{
            fontSize: 18,
            color: color.txtColor,
            // borderColor: color.txtColor,
            // borderWidth: 0.5,
            // borderRadius: 10,
            paddingHorizontal: windowWidth / 5,
            paddingVertical: '2%',
            marginTop: '5%',
          }}>
          Change Password
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => logoutHandler()}>
        <Text
          style={{
            fontSize: 15,
            color: 'gray',
            textDecorationLine: 'underline',
            paddingHorizontal: windowWidth / 5,
            paddingVertical: '2%',
            marginTop: '3%',
          }}>
          Logout
        </Text>
      </TouchableOpacity>
      {user.verified ? null : (
        <TouchableOpacity onPress={() => VerifyHandler()}>
          <Text
            style={{
              fontSize: 15,
              color: '#aa9eec',
              textDecorationLine: 'underline',
              paddingHorizontal: windowWidth / 5,
              paddingVertical: '2%',
              marginTop: '3%',
            }}>
            Verify Account
          </Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={() => VerifyHandler()}>
        <Text
          style={{
            fontSize: 15,
            color: '#aa9eec',
            textDecorationLine: 'underline',
            paddingHorizontal: windowWidth / 5,
            paddingVertical: '2%',
            marginTop: '3%',
          }}>
          Verify Account
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
