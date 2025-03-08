import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  StatusBar,
  ImageBackground
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../Navigation/StartupNavigator';
import { useSharedValue } from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

// Better carousel images - dating app themed
// chat_section.png
// icon.png
// login_page.png
// men-b-jacket.jpg
// men-coat.jpg
// reg_page.png
// wm-hat.jpg
// wm-red.jpg
// wm-sexy.jpg
const images = [
  'https://images.coderfolks.me/images/men-b-jacket.jpg',
  'https://images.coderfolks.me/images/men-coat.jpg',
  'https://images.coderfolks.me/images/wm-hat.jpg',
  'https://images.coderfolks.me/images/wm-red.jpg',
  'https://images.coderfolks.me/images/wm-sexy.jpg'
];

export default function LogInScreen() {
  const progress = useSharedValue(0);
  const navigation = useNavigation<NavigationProps>();

  // // Calculate current index from progress
  const currentIndex = React.useMemo(() => {
    return Math.round(progress.value % images.length);
  }, [progress, images.length]);

  const handleLogin = () => {
    navigation.navigate('NameDob');
  };

  const handleSignUp = () => {
    navigation.navigate('NameDob');
  };
  console.log("Width and Height of the screen", width, height);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />
      <View style={styles.header}>
        <Text style={styles.headerText}>ASYNC</Text>
        <Text style={styles.title}>Find Your Perfect Match</Text>
      </View>
      <View style={styles.carouselContainer}>
        <Carousel
          width={width}
          height={height * 0.6}
          data={images}
          mode="parallax"
          loop={true}
          autoPlay={true}
          autoPlayInterval={2000}
          modeConfig={{
            parallaxScrollingScale: 0.8,
            // parallaxScrollingOffset: 30,
          }}
          onProgressChange={(offsetProgress, absoluteProgress) => {
            progress.value = absoluteProgress;
          }}
          renderItem={({ item, index }) => (
            <View style={styles.slide}>
              <Image 
                source={{ uri: item }} 
                style={styles.image} 
                resizeMode="cover"
              />
            </View>
          )}
        />

        {/* Pagination dots */}
        <View style={styles.paginationContainer}>
          {images.map((_, index) => (
            <View
              key={index}
              style={[
                styles.paginationDot,
                { backgroundColor: currentIndex === index ? '#e94560' : 'rgba(255, 255, 255, 0.5)' }
              ]}
            />
          ))}
        </View>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.subtitle}>
          Connect with people who share your interests and lifestyle
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.signupButton}
          onPress={handleSignUp}
          activeOpacity={0.8}
        >
          <Text style={styles.signupText}>New user ? <Text style={styles.signupTextBold}>Sign Up</Text></Text>
        </TouchableOpacity>

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
    paddingHorizontal: 30,
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
    fontSize: 12,
    color: '#ffffff',
    marginBottom: 4,
    textAlign: 'center',
    opacity: 0.8,
    fontFamily: 'monospace',
  },
  button: {
    backgroundColor: '#e94560',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 30,
    // marginBottom: 20,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#e94560',
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
});

