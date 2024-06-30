import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {color} from '../Assets/ColorFile';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {deleteTask, loadUser, updateTask} from '../redux/Action/Action';
import {useDispatch} from 'react-redux';

// FONTS

const font1 = 'NanumMyeongjo-Bold';
const font2 = 'NanumMyeongjo-Regular';
const font3 = 'PlaywriteIS-Regular';
const font4 = 'ReenieBeanie-Regular';

const truncateText = (text, maxLength) => {
  if (text && text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
};

const windowHeight = Dimensions.get('screen').height;
const windowWidth = Dimensions.get('screen').width;

// FUNCTIONS

export default function Task({title, description, date, taskId}) {
  const formatedate = new Date(date);
  // // console.log('currentdata = ' , formatedate);
  const day = formatedate.getDate().toString().padStart(2, '0');
  const month = (formatedate.getMonth() + 1).toString().padStart(2, '0');
  const year = formatedate.getFullYear().toString().slice(-2); // Get last two digits of the year
  // console.log(day, month, year);
  const [taskdate, setTaskDate] = useState({date: '', month: '', year: ''});
  const dispatch = useDispatch();
  useEffect(() => {
    setTaskDate({date: day, month: month, year: year});
  }, []);

  const updateTaskHandler = async id => {
    await dispatch(updateTask(id));
    console.log(id);
  };
  const deleteTaskHandler = async id => {
    await dispatch(deleteTask(id));
    console.log(id);
    dispatch(loadUser());
  };

  // console.log('123445345', title, description, date);
  return (
    <View style={styles.taskContainer}>
      <View style={styles.taskHeader}>
        <View style={styles.DateContainer}>
          <Ionicons name="calendar-clear-outline" size={18} color="#fff" />
          <Text style={{fontSize: 15, marginTop: '.5%', color: '#9ea09f'}}>
            {`${taskdate.date}/${taskdate.month}/${taskdate.year}`}
          </Text>
        </View>
        <View
          style={{
            width: '28%',
            //   backgroundColor: 'green',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={styles.editTask}
            onPress={() => updateTaskHandler(taskId)}>
            <Feather name="edit-3" size={20} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.editTask}
            onPress={() => deleteTaskHandler(taskId)}>
            <MaterialCommunityIcons name="delete" size={25} color="#db1600" />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.titletxt}> {truncateText(title, 20)}</Text>
      <Text style={styles.desctxt}> {truncateText(description, 155)}</Text>
      <TouchableOpacity style={styles.editfont}>
        <MaterialCommunityIcons name="format-font" size={20} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.editcolor}>
        <MaterialIcons name="color-lens" size={20} color="#000" />
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
    // alignSelf: 'flex-end',
    // marginHorizontal: 10,
  },
  editTask: {
    height: '80%',
    width: '40%',
    backgroundColor: '#fff',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    // alignSelf: 'flex-end',
    // marginHorizontal: 10,
  },
  editfont: {
    height: 40,
    width: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 10,
    bottom: 10,
    zIndex: 10,
  },
  editcolor: {
    height: 40,
    width: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 10,
    bottom: 55,
    zIndex: 10,
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
  DateContainer: {
    flexDirection: 'row',
    // backgroundColor: '#000',
    // alignItems: 'center',
    width: windowWidth / 3,
  },
  taskHeader: {
    flexDirection: 'row',
    // backgroundColor: 'pink',
    justifyContent: 'space-between',
    // paddingHorizontal:10,
    height: windowHeight / 18,
  },
  MainTaskCont: {
    backgroundColor: 'gray',
    height: '65%',
    marginVertical: 10,
  },
  titletxt: {
    fontSize: windowWidth / 18,
    color: '#fff',
    fontFamily: font3,
    marginBottom: '5%',
    textDecorationLine: 'underline',
  },
  desctxt: {
    fontSize: windowWidth / 15,
    color: '#fff',
    fontFamily: 'NanumMyeongjo-Bold',
    // backgroundColor: '#000',
    width: '93%',
  },
});
