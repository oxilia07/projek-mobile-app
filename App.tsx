import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {firebase} from '@react-native-firebase/firestore';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import SplashScreen from './src/screens/SplashScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const firebaseConfig = {
  apiKey: 'AIzaSyD5KSozGchTap-dQIvMTbqFoY9CasT06eA',
  authDomain: 'tastefull-mobile.firebaseapp.com',
  projectId: 'tastefull-mobile',
  storageBucket: 'tastefull-mobile.firebasestorage.app',
  messagingSenderId: '139158546206',
  appId: '1:139158546206:web:c4efdde76d517447924b0f',
  measurementId: 'G-CZQ1DJBQKV',
};

firebase.initializeApp(firebaseConfig);

const writeDataToFirestore = async (collection, data) => {
  try {
    const ref = firebase.firestore().collection(collection).doc();
    const response = await ref.set(data);
    return response;
  } catch (error) {
    return error;
  }
};

const recipes = [
  {
    image: 'https://picsum.photos/200/200',
    title: 'Healthy Taco Salad',
    time: '15',
    description:
      'This Healthy Taco Salad is the universal delight of taco night.',
    creatorImage: 'https://picsum.photos/150/150',
    creatorName: 'Natalia Luca',
    creatorBio: "I'm the author and recipe developer.",
    id: '1',
  },
  {
    image: 'https://picsum.photos/200/200',
    title: 'Vegan Chocolate Cake',
    time: '45',
    description: 'This Vegan Chocolate Cake is the best cake ever.',
    creatorImage: 'https://picsum.photos/150/150',
    creatorName: 'Natalia Luca',
    creatorBio: "I'm the author and recipe developer.",
    id: '2',
  },
  {
    image: 'https://picsum.photos/200/200',
    title: 'Healthy Taco Salad',
    time: '15',
    description:
      'This Healthy Taco Salad is the universal delight of taco night.',
    creatorImage: 'https://picsum.photos/150/150',
    creatorName: 'Natalia Luca',
    creatorBio: "I'm the author and recipe developer.",
    id: '3',
  },
  {
    image: 'https://picsum.photos/200/200',
    title: 'Vegan Chocolate Cake',
    time: '45',
    description: 'This Vegan Chocolate Cake is the best cake ever.',
    creatorImage: 'https://picsum.photos/150/150',
    creatorName: 'Natalia Luca',
    creatorBio: "I'm the author and recipe developer.",
    id: '4',
  },
];

// recipes.forEach(recipe => {
//   writeDataToFirestore('recipes', recipe);
// });

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Login"
      component={SignInScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Register"
      component={SignUpScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="ForgotPassword"
      component={ForgotPasswordScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Details"
      component={DetailsScreen}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
