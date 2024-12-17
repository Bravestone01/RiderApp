import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Button = ({onPress, text}) => {
  return (
<>
{text === 'Get Started' &&(
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  
)}

{text === 'Create Account' &&(
    <TouchableOpacity style={styles.createContainer} onPress={onPress}>
        <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  
)}
{text === 'Submit and Continue' &&(
    <TouchableOpacity style={styles.createContainer} onPress={onPress}>
        <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  
)}

    </>
  
 
  )
}

export default Button

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#551895',
        width:'100%',
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    createContainer: {
      backgroundColor: '#551895',
      width:'100%',
      height: 60,
      borderRadius: 16,
      justifyContent: 'center',
      alignItems: 'center',
  },
    btnText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '500',
       
    }
})