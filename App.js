import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './Navigation/AppNavigator';
import Toast from 'react-native-toast-message';


const App = () => {
  return (
    <>
    <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
    <NavigationContainer>

      <AppNavigator/>
      <Toast/>
  
    </NavigationContainer>
    </>
  )
}

export default App

const styles = StyleSheet.create({})