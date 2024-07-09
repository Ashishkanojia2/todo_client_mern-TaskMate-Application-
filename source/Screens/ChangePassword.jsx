import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Dimensions, TouchableOpacity} from 'react-native';
import {color} from '../Assets/ColorFile';
import {Text, TextInput} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {UpdatePassword, login} from '../redux/Action/Action';

const windowHeight = Dimensions.get('screen').height;
const windowWidth = Dimensions.get('screen').width;

export default function ChangePasswords({navigation, route}) {
  const dispatch = useDispatch();

  const {user} = useSelector(state => state.auth);

  const [oldPassword, setoldPassword] = useState('');
  const [newPassword, setnewPassword] = useState('');
  const [disableBtn, setDisableBtn] = useState(false);

  const updateProfileHandler = async () => {
    await dispatch(UpdatePassword(oldPassword, newPassword));
  };
  useEffect(() => {
    if (!oldPassword || !newPassword) {
      setDisableBtn(true);
    } else {
      setDisableBtn(false);
    }
  }, [oldPassword, newPassword]);
  return (
    <View style={[styles.MainContainere]}>
      <View style={styles.header}>
        <Text style={styles.headertxt}>Change Passwod</Text>
      </View>

      <View style={{marginTop: '40%', height: '100%'}}>
        <TextInput
          label="Old Password"
          value={oldPassword}
          onChangeText={text => setoldPassword(text)}
          style={styles.inputfield}
        />
        <TextInput
          label="New Password"
          value={newPassword}
          onChangeText={text => setnewPassword(text)}
          style={styles.inputfield}
        />
        <TouchableOpacity
          onPress={() => updateProfileHandler()}
          disabled={disableBtn}>
          <Text
            style={{
              fontSize: 20,
              borderColor: color.txtColor,
              borderWidth: 0.5,
              borderRadius: 10,
              paddingHorizontal: windowWidth / 5,
              paddingVertical: '2%',
              marginTop: '20%',
              alignSelf: 'center',
            }}>
            Change Password
          </Text>
        </TouchableOpacity>
      </View>
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
