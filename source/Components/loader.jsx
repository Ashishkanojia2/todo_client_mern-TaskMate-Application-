import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ActivityIndicator} from 'react-native-paper';
import {color} from '../Assets/ColorFile';

export default function Loading() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: color.bgColor,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ActivityIndicator size={'large'} color="#fff" />
      <Text
        style={{
          fontSize: 20,
          color: color.txtColor,
          fontWeight: '700',
          marginTop: 30,
        }}>
        Wait... Data is Loading...
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
