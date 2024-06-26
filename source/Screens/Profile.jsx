import React, {useState} from 'react';
import {StyleSheet, View, Dimensions, TouchableOpacity} from 'react-native';
import {color} from '../Assets/ColorFile';
import {Dialog, Portal, Text, TextInput} from 'react-native-paper';

const windowHeight = Dimensions.get('screen').height;
const windowWidth = Dimensions.get('screen').width;

const addtaskhandler = () => {};

export default function Profile({navigation}) {
  return (
    <View style={[styles.MainContainere]}>
      <View style={styles.header}>
        <Text style={styles.headertxt}>Profile</Text>
      </View>

      <TextInput
        label="FullName"
        // value={title}
        // onChangeText={text => setTitle(text)}
        style={{marginBottom: '10%'}}
      />
      <TextInput
        label="Description"
        // value={desc}
        // onChangeText={text => setdesc(text)}
      />

      <TouchableOpacity>
        <Text style={{fontSize: 18}}>Cancle</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{fontSize: 18}}>Add</Text>
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
});
