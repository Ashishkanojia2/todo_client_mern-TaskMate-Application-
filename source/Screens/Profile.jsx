import React, {useState} from 'react';
import {StyleSheet, View, Dimensions, TouchableOpacity} from 'react-native';
import {color} from '../Assets/ColorFile';
import {Avatar, Text, TextInput} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {loadUser, logout} from '../redux/Action/Action';

const windowHeight = Dimensions.get('screen').height;
const windowWidth = Dimensions.get('screen').width;

export default function Profile({navigation}) {
  const dispatch = useDispatch();

  const {user} = useSelector(state => state.auth);

  const [name, setname] = useState(user.name);
  const [avatar, setavatar] = useState(user.avatar.url);

  // console.log('kuch mila ',user);

  const updateProfileHandler = () => {
    console.log('update ho raha hai');
  };
  const changePasswordHandler = () => {
    console.log('changePasswordHandler');
  };
  const logoutHandler = () => {
    console.log('logoutHandler');
    dispatch(logout());
    dispatch(loadUser())
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
            // borderColor: color.txtColor,
            // borderWidth: 0.5,
            // borderRadius: 10,
            textDecorationLine: 'underline',
            paddingHorizontal: windowWidth / 5,
            paddingVertical: '2%',
            marginTop: '3%',
          }}>
          Logout
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
