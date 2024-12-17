import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SplashScreen from '../Screens/SplashScreen';
import OnboardingScreen from '../Screens/OnboardingScreen';
import SignupScreen from '../Screens/SignupScreen';
import OtpScreen from '../Screens/OtpScreen';
import EmailScreen from '../Screens/EmailScreen';
import NameScreen from '../Screens/NameScreen';
import SubmitDocumentScreen from '../Screens/SubmitDocumentScreen';
import TermandConditionScreen from '../Screens/TermandConditionScreen';
import LocationScreen from '../Screens/LocationScreen';

const Stack= createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
      <Stack.Screen name="OtpScreen" component={OtpScreen} />
      <Stack.Screen name="EmailScreen" component={EmailScreen} />
      <Stack.Screen name="NameScreen" component={NameScreen} />
      <Stack.Screen name="SubmitDocumentScreen" component={SubmitDocumentScreen} />
      <Stack.Screen name="TermandConditionScreen" component={TermandConditionScreen} />
      <Stack.Screen name="LocationScreen" component={LocationScreen} />

    </Stack.Navigator>
  )
}

export default AppNavigator