import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const InputFied = ({placeholder}) => {
  return (
    <View style={styles.container}>
        <TextInput placeholder={placeholder}  style={styles.input}/>
      
    </View>
  )
}

export default InputFied

const styles = StyleSheet.create({
    container: {
            width:"100%",
            height:60,
            borderWidth:1,
            borderRadius:16,
    },
    input: {
        width:"100%",
        height:60,
        borderRadius:16,
        alignItems:"center",
        color:"#202020",
        fontSize:14,
        fontFamily:"Poppins-Medium",
        paddingLeft:15,
    }
})