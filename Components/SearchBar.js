import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import SearchBarIcon from 'react-native-vector-icons/AntDesign'

const SearchBar = () => {
  return (
    <View style={styles.container}>
        <SearchBarIcon name='search1' size={25} color='#B3B3B3'/>
        <TextInput placeholder='Search for an address' style={styles.input}/>
      
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
   container: {
    width:"100%",
    height:68,
    borderWidth:1,
    borderRadius:100,
    color:"#202020",
    fontSize:14,
    fontFamily:"Poppins-Medium",
    paddingLeft:15,
    flexDirection:"row",
    alignItems:"center",

   },
   input: {
    height:68,
    borderRadius:100,
    alignItems:"center",
    color:"#202020",
    fontSize:14,
    fontFamily:"Poppins-Medium",
    paddingLeft:15,
    width:"88%"
   }
  
})