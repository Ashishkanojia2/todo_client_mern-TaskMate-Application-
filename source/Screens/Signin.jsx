// import React, {useEffect, useState} from 'react';
// import {StyleSheet, View, Dimensions, TouchableOpacity} from 'react-native';
// import {color} from '../Assets/ColorFile';
// import {Avatar, Text, TextInput} from 'react-native-paper';
// import {useDispatch} from 'react-redux';
// import {register} from '../redux/Action/Action';
// import { Mime } from 'mime';

// const windowHeight = Dimensions.get('screen').height;
// const windowWidth = Dimensions.get('screen').width;

// const font1 = 'NanumMyeongjo-Bold';
// const font2 = 'NanumMyeongjo-Regular';
// const font3 = 'PlaywriteIS-Regular';
// const font4 = 'ReenieBeanie-Regular';

// export default function Signup({navigation, route}) {
//   const [username, setusername] = useState('');
//   const [email, setemail] = useState('');
//   const [password, setpassword] = useState('');
//   const [avatar, setavatar] = useState('');

//   const dispatch = useDispatch();
//   const registerHandler = () => {
//     console.log(username, email, password, avatar);
//     const myform = new FormData();
//     // creating form
//     myform.append('name', username);
//     myform.append('email', email);
//     myform.append('password', password);
//     myform.append('avatar', {
//       uri: avatar,
//       type: Mime.getType(avatar),
//       name: avatar.split('/').pop(),
//     });
//     dispatch(register(myform));
//     dispatch(loadUser());
//   };

//   const Imagehandler = () => {
//     navigation.navigate('camera');
//   };

//   useEffect(() => {
//     // this is for camera
//     if (route.params) {
//       if (route.params.photo.path) {
//         return setavatar(`file://${route.params.photo.path}`);
//       } else if (route.params.photo) {
//         // this is for taking photo from gallary
//         return setavatar(route.params.photo);
//       }
//     }
//   }, [route]);

//   return (
//     <View style={[styles.MainContainere]}>
//       <Text style={styles.headertxt}>Create New</Text>
//       <Text style={styles.headertxt2}>Account</Text>
//       <Avatar.Image
//         size={100}
//         source={{uri: avatar ? avatar : null}}
//         style={{
//           backgroundColor: color.bgColor,
//           borderColor: color.txtColor,
//           borderWidth: 1,
//           marginBottom: '5%',
//         }}
//       />
//       <TouchableOpacity onPress={() => Imagehandler()}>
//         <Text
//           style={{
//             fontSize: 18,
//             borderColor: color.txtColor,
//             borderWidth: 0.5,
//             borderRadius: 10,
//             paddingHorizontal: windowWidth / 12,
//             paddingVertical: '2%',
//             marginBottom: '5%',
//           }}>
//           Upload profile
//         </Text>
//       </TouchableOpacity>

//       <TextInput
//         label="FullName"
//         value={username}
//         onChangeText={text => setusername(text)}
//         style={styles.inputfield}
//       />
//       <TextInput
//         label="Email"
//         value={email}
//         keyboardType="email-address"
//         onChangeText={text => setemail(text)}
//         style={styles.inputfield}
//       />
//       <TextInput
//         label="Password"
//         style={styles.inputfield}
//         secureTextEntry={true}
//         value={password}
//         onChangeText={text => setpassword(text)}
//       />

//       <TouchableOpacity
//         onPress={() => {
//           registerHandler();
//         }}>
//         <Text
//           style={{
//             fontSize: 25,
//             borderColor: color.txtColor,
//             borderWidth: 0.5,
//             borderRadius: 10,
//             paddingHorizontal: windowWidth / 5,
//             paddingVertical: '2%',
//           }}>
//           Create
//         </Text>
//       </TouchableOpacity>
//       <Text style={styles.accountMSG}>Buddy! Have an Account</Text>
//       <TouchableOpacity
//         onPress={() => {
//           navigation.navigate('login');
//         }}>
//         <Text style={styles.createAcc}> Login </Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   MainContainere: {
//     backgroundColor: color.bgColor,
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   inputfield: {
//     marginBottom: '10%',
//     width: windowWidth - 50,
//     backgroundColor: color.bgColor,
//   },
//   headertxt: {
// color: color.txtColor,
// fontSize: 30,
// // fontWeight: '900',
// fontFamily: font1,
//   },
//   headertxt2: {
//     color: color.txtColor,
//     fontSize: 60,
//     fontFamily: font1,
//     marginBottom: windowHeight / 20,
//   },
//   accountMSG: {
//     color: color.txtColor,
//     fontSize: 15,
//     marginVertical: '10%',
//   },
//   createAcc: {
//     color: color.txtColor,
//     fontSize: 18,
//     textDecorationLine: 'underline',
//   },
// });

//
//
//
//
//
//
//
//
//
//

import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Dimensions, TouchableOpacity} from 'react-native';
import {Avatar, Text, TextInput} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {loadUser, register} from '../redux/Action/Action';
import {color} from '../Assets/ColorFile';

const windowHeight = Dimensions.get('screen').height;
const windowWidth = Dimensions.get('screen').width;
const font1 = 'NanumMyeongjo-Bold';
const Signup = ({navigation, route}) => {
  const [username, setusername] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [avatar, setavatar] = useState('');

  const dispatch = useDispatch();

  const registerHandler = async () => {
    const myform = new FormData();
    myform.append('name', username);
    myform.append('email', email);
    myform.append('password', password);
    myform.append('avatar', {
      uri: avatar,
      type: 'image/jpeg', // Example type, adjust as necessary based on your file extension
      name: 'avatar.jpg', // Example file name
    });
    await dispatch(register(myform));
    // Assuming loadUser() is defined elsewhere and handles user loading logic
    // setTimeout(() => {
      dispatch(loadUser());
    // }, 3000);
  };

  const Imagehandler = () => {
    navigation.navigate('camera');
  };

  useEffect(() => {
    if (route.params && route.params.photo) {
      if (route.params.photo.path) {
        setavatar(`file://${route.params.photo.path}`);
      } else {
        setavatar(route.params.photo);
      }
    }
  }, [route]);

  return (
    <View style={styles.MainContainer}>
      <Text style={styles.headerText}>Create New</Text>
      <Text style={styles.headerText2}>Account</Text>
      <Avatar.Image
        size={100}
        source={{uri: avatar ? avatar : null}}
        style={styles.avatar}
      />
      <TouchableOpacity onPress={Imagehandler}>
        <Text style={styles.uploadButton}>Upload profile</Text>
      </TouchableOpacity>

      <TextInput
        label="FullName"
        value={username}
        onChangeText={text => setusername(text)}
        style={styles.inputField}
      />
      <TextInput
        label="Email"
        value={email}
        keyboardType="email-address"
        onChangeText={text => setemail(text)}
        style={styles.inputField}
      />
      <TextInput
        label="Password"
        style={styles.inputField}
        secureTextEntry={true}
        value={password}
        onChangeText={text => setpassword(text)}
      />

      <TouchableOpacity onPress={registerHandler}>
        <Text style={styles.createButton}>Create</Text>
      </TouchableOpacity>

      <Text style={styles.accountMsg}>Already have an account?</Text>
      <TouchableOpacity onPress={() => navigation.navigate('login')}>
        <Text style={styles.loginLink}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: color.bgColor,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: color.txtColor,
    fontSize: 30,
    // fontWeight: '900',
    fontFamily: font1,
  },
  headerText2: {
    color: '#000000',
    fontSize: 60,
    fontFamily: 'NanumMyeongjo-Bold',
    marginBottom: windowHeight / 20,
  },
  avatar: {
    backgroundColor: '#eeeeee',
    borderColor: '#000000',
    borderWidth: 1,
    marginBottom: '5%',
  },
  uploadButton: {
    fontSize: 18,
    borderColor: '#000000',
    borderWidth: 0.5,
    borderRadius: 10,
    paddingHorizontal: windowWidth / 12,
    paddingVertical: '2%',
    marginBottom: '5%',
  },
  inputField: {
    marginBottom: '10%',
    width: windowWidth - 50,
    backgroundColor: color.bgColor,
  },
  createButton: {
    fontSize: 25,
    borderColor: '#000000',
    borderWidth: 0.5,
    borderRadius: 10,
    paddingHorizontal: windowWidth / 5,
    paddingVertical: '2%',
  },
  accountMsg: {
    color: '#000000',
    fontSize: 15,
    marginVertical: '10%',
  },
  loginLink: {
    color: '#000000',
    fontSize: 18,
    textDecorationLine: 'underline',
  },
});

export default Signup;
