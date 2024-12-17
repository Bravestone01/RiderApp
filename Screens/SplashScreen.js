import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import Vector from '../assets/Images/Vector.svg'

const SplashScreen = ({navigation}) => {
  useEffect(() => {
  
    const timer = setTimeout(() => {
      navigation.replace('OnboardingScreen'); 
    }, 2000);

    return () => clearTimeout(timer); 
  }, [navigation]);


  return (

    <>
    <StatusBar barStyle={'light-content'} backgroundColor={'#551895'}  />
    <View style={styles.Container}>
      <Vector />
      <Text style={styles.text}>Riderr</Text>
      
    </View>

    </>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#551895',
    justifyContent:"center",
    alignItems:"center" ,
  },
  text: {
    color: 'white',
    fontSize: 68,
    fontFamily:'Poppins-Bold',
    lineHeight: 87,
  },
})