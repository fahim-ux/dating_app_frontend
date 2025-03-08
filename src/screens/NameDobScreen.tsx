import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  StatusBar,
  TextInput,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../Navigation/StartupNavigator';
import { useSharedValue } from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;



export default function NameDobScreen() {
  const navigation = useNavigation<NavigationProps>();

  // // Calculate current index from progress
  
  const handleLogin = () => {
    navigation.navigate('Home');
  };
  console.log("Width and Height of the screen", width, height);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />
      <View style={styles.header}>
        <Text style={styles.headerText}>ASYNC</Text>
        <Text style={styles.title}>Find Your Perfect Match</Text>
        <Text style={styles.subtitle}>
          Connect with people who share your interests and lifestyle
        </Text>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.mainLogin}>
          <View style={styles.inputView}>
            <View style={styles.labelWrapper}>
              <Text style={styles.label}>Username</Text>
            </View>
            <TextInput
              placeholder='Enter your username'
              style={styles.textInput}
            />
          </View>
          <View style={styles.inputView}>
          <View style={styles.labelWrapper}>
              <Text style={styles.label}>Password</Text>
            </View>
            <TextInput
              placeholder='Enter your Password'
              style={styles.textInput}
            />
          </View>
          <View style={styles.loginWrapper}>
            <TouchableOpacity
              style={styles.button}
              onPress={handleLogin}
              activeOpacity={0.8}
            >
              <Text style={styles.buttonText}>LogIn</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.termsText}>
          By continuing, you agree to our Terms of Service and Privacy Policy
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  carouselContainer: {
    height: height * 0.6,
    width: width,
    overflow: 'hidden',
    // backgroundColor: '#DCD7C9',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingHorizontal: 30,
    gap: 7,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#e94560',
    // marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'monospace',
  },
  subtitle: {
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 4,
    textAlign: 'center',
    opacity: 0.8,
    fontFamily: 'monospace',
  },
  button: {
    backgroundColor: '#e94560',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    // marginBottom: 20,
    width: '40%',
    // alignItems: 'center',
    // shadowColor: '#e94560',
    // shadowOffset: { width: 0, height: 4 },
    // shadowOpacity: 0.3,
    // shadowRadius: 10,
    // elevation: 6,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    textAlign: 'center',
  },
  signupButton: {
    // marginTop: 15,
    paddingVertical: 10,
  },
  signupText: {
    color: '#ffffff',
    fontSize: 16,
  },
  signupTextBold: {
    fontWeight: 'bold',
    color: '#e94560',
  },
  slide: {
    flex: 1,
    width: '100%',
    overflow: 'hidden',
    backgroundColor: '#6EACDA',
    borderRadius: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 15,
    width: '100%',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  termsText: {
    fontSize: 12,
    color: '#ffffff',
    opacity: 0.6,
    textAlign: 'center',
    marginTop: 30,
    position: 'absolute',
    bottom: 20,
  },
  header:{
    // backgroundColor: '#AD49E1',
    // height: 80,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 48,
    color: '#ffffff',
    fontWeight: 'bold',
    fontFamily:'monospace',
    textAlign : 'center',
  },
  inputView:{
    width:"100%",
    // backgroundColor:"#9AA6B2",
    borderRadius:5,
    height:88,
    marginBottom:20,
    // justifyContent:"center",
    // paddingHorizontal:8,
    position:"relative",
    // paddingTop:10,
  },
  mainLogin:{
    width:"100%",
    // backgroundColor:"#CDE8E5",
    borderRadius:5,
    // height:50,
    // marginBottom:20,
    justifyContent:"center",
    paddingVertical:10,
    paddingHorizontal:8,
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    // gap:5,
  },
  label:{
    color:"#000",
    fontSize:13,
    fontFamily:"monospace",
    // // paddingTop:7,
    // // position:"absolute",
    // zIndex:1,
    // paddingLeft:19,
    // backgroundColor:"#fff",
    // height:40,
    textAlign:"center",
    // justifyContent:"center",
  },
  textInput:{
    height:'90%',
    color:"#000",
    fontSize:18,
    fontFamily:"monospace",
    backgroundColor:"#fff",
    borderRadius:5,
    // paddingTop:10,
    marginTop:10,
    paddingLeft:19,
    borderWidth:1,
    borderColor:"#BE3144",
  },
  labelWrapper:{
    position:"absolute",
    backgroundColor:"#E7CCCC",
    // height:50,
    // width:"100%",
    // borderRadius:5,
    // marginBottom:20,
    // justifyContent:"center",
    // paddingHorizontal:8,
    // paddingTop:10,
    zIndex:1,
    // paddingLeft:19,
    left:15,
    borderRadius:20,
    paddingHorizontal:5,
    width:120,
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    borderWidth:1,
    borderColor:"#BE3144",
  },
  loginWrapper:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"flex-end",
    width:"100%",
    paddingHorizontal:10,
  }

});

