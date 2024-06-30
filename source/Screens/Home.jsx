import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Alert,
  Image,
} from 'react-native';
import {Avatar, Dialog, Portal, TextInput} from 'react-native-paper';
import {color} from '../Assets/ColorFile';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Task from '../Components/Task';
import {useDispatch, useSelector} from 'react-redux';
import {addTask, loadUser} from '../redux/Action/Action';
import {clearError, clearMessage} from '../redux/reducer/Reducer';

const windowHeight = Dimensions.get('screen').height;
const windowWidth = Dimensions.get('screen').width;
export default function Home({navigation}) {
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setdescription] = useState('');
  const [avatar, setavatar] = useState('');

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const dispatch = useDispatch();
  const {user} = useSelector(state => state.auth);
  const {loading, message, error} = useSelector(state => state.task);
  // console.log('user', user);
  useEffect(() => {
    setavatar(user.avatar.url);
  }, []);
  const addtaskhandler = async () => {
    console.log(title, description);
    await dispatch(addTask(title, description));
    console.log('press');
    hideDialog();
    dispatch(loadUser());
  };

  useEffect(() => {
    if (error) {
      Alert.alert(error);
      dispatch({type: clearError});
    }
    if (message) {
      Alert.alert(message);
      dispatch({type: clearMessage});
    }
  }, [Alert, message, error, dispatch]);

  return (
    // <Provider>
    <>
      <View style={[styles.MainContainere]}>
        <View style={styles.header}>
          <View style={styles.headerContainer}>
            <Text style={styles.headertxt}>Hi 👋 {user.name}</Text>
            <Text style={styles.headertxt}>Welcome To TaskMate</Text>
          </View>
          <TouchableOpacity
            style={styles.profileContainer}
            onPress={() => navigation.navigate('profile')}>
            <Avatar.Image
              size={50}
              source={{uri: avatar ? avatar : null}}
              style={{
                backgroundColor: color.bgColor,
                borderColor: color.txtColor,
                borderWidth: 1,
                marginBottom: '5%',
                marginTop: '15%',
              }}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={user && user.task}
          renderItem={({item}) => (
            <Task
              key={item._id}
              title={item.title}
              description={item.description}
              taskId={item._id}
              status={item.status}
              date={item.createdAt}
            />
          )}
        />
        <TouchableOpacity style={styles.editTask} onPress={showDialog}>
          <FontAwesome6 name="plus" size={40} color="#fff" />
        </TouchableOpacity>
      </View>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Dialog Title</Dialog.Title>
          <Dialog.Content>
            <TextInput
              label="Title"
              value={title}
              onChangeText={text => setTitle(text)}
              style={{marginBottom: '10%'}}
            />
            <TextInput
              label="Description"
              value={description}
              onChangeText={text => setdescription(text)}
            />
          </Dialog.Content>
          <Dialog.Actions>
            <TouchableOpacity onPress={hideDialog}>
              <Text style={{fontSize: 18}}>Cancle</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={addtaskhandler}>
              <Text style={{fontSize: 18}}>Add</Text>
            </TouchableOpacity>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </>

    // </Provider>
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
    // backgroundColor: 'pink',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '1%',
    marginBottom:"1%"
  },
  headertxt: {
    color: color.txtColor,
    fontSize: 20,
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
});
