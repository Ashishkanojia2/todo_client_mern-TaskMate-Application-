import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';

export default function VisionCamera({navigation, route}) {
  console.log('routes',route.params.profileValue);
  const {hasPermission, requestPermission} = useCameraPermission();
  const device = useCameraDevice('front');
  const cameraRef = useRef(null); // Corrected useRef

  const [selectedImage, setSelectedImage] = useState('');
  // console.log(selectedImage);

  useEffect(() => {
    cameraPerm();
  }, []);
  useEffect(() => {
    if (selectedImage) {
      if (route.params && route.params.profileValue) {
        return navigation.navigate('profile', {photo: selectedImage});
      } else return navigation.navigate('signin', {photo: selectedImage});
    }
  }, [selectedImage]);

  const cameraPerm = async () => {
    // console.log('haspermission me aa kya raha hai ', hasPermission);
    if (!hasPermission) {
      console.log('nopermission granted', hasPermission);
      const reqPre = await requestPermission();
      // console.log('request permission result', reqPre);
    }
    // console.log('device me ky aaaya', device);
    if (!device) {
      console.log('Device null aaya hai');
    } else if (device === undefined) {
      console.log('device undefined aaya hai ', device);
    } else if (device === null) {
      console.log('device null aaya hai');
    }
  };

  const buttonPress = async () => {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePhoto(); // Capture photo asynchronously
        console.log('Captured photo:', photo);
        setSelectedImage(photo);
        navigation.navigate('signin', {selectedImage});

        // setSelectedImage("ye rehi url image ki",photo);
      } catch (error) {
        console.error('Failed to take photo:', error);
      }
      // console.log('selectimages', selectedImage);
    }
  };

  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
        // navigation.navigate('signin', {selectedImage});
      }
    });
  };

  return (
    <View style={{flex: 1}}>
      {device != null && hasPermission && (
        <Camera
          style={StyleSheet.absoluteFill}
          ref={cameraRef} // Assigning ref.current to the ref prop of Camera
          device={device}
          isActive={true}
          photo={true}
        />
      )}

      <View style={styles.bottomCont}>
        <TouchableOpacity
          style={styles.photoCont}
          onPress={() => openImagePicker()}>
          <MaterialIcons name="add-photo-alternate" size={50} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottombtn} onPress={buttonPress}>
          <Text style={{color: 'white'}}>Press Me</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.photoCont}>
          <MaterialIcons name="flip-camera-ios" size={50} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottombtn: {
    backgroundColor: 'red',
    height: '80%',
    width: '17%',
    borderRadius: 100,
    borderWidth: 5,
    borderColor: '#fff',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomCont: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 50,
    // backgroundColor:"red",
    height: '10%',
    width: '100%',
    justifyContent: 'space-around',
  },
  photoCont: {
    // backgroundColor: 'green',
    height: '80%',
    width: '17%',
    // borderRadius: 100,
    // borderWidth: 5,
    borderColor: '#fff',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
