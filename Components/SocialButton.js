import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

const SocialButton = ({ icon: Icon, text, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.iconContainer}>
      <Icon  />
      </View>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEEEEE', 
    borderRadius: 16,
    width: '100%',
    height:60,
    justifyContent:"center",
    gap:10,
  },
 
  text: {
    fontSize: 16,
    color: '#202020', 
    fontFamily:'Poppins-Medium',
    lineHeight:22,
    
  },
});
