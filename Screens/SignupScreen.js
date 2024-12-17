import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import SelectNumberModal from '../Components/SelcetNumberModal';
import Button from '../Components/Button';
import SocialButton from '../Components/SocialButton';
import apple from '../assets/Images/apple.svg';
import Google from '../assets/Images/Google.svg';
import email from '../assets/Images/email.svg';
import Search from 'react-native-vector-icons/AntDesign';
import Toast from 'react-native-toast-message';

const SignupScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [texxt, setText] = useState('');

  const handleSignup = () => {
    
    if (!phoneNumber) {
      Toast.show({
        type: 'error',
        text1: 'Please enter phone number',
        position: "top",
        visibilityTime: 500,
      });
      return;
    }

    console.log('Entered Phone Number:', phoneNumber);

    
    setPhoneNumber('');
    setText('');

    
    navigation.replace('OtpScreen', {
      phoneNumber: phoneNumber,
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'#FFFFFF'} />
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <Text style={styles.numberText}>Enter Number</Text>

            <View style={styles.phoneInputView}>
              <SelectNumberModal
                onPhoneChange={setPhoneNumber}
                phoneNumber={phoneNumber} 
              />
            </View>

            <View style={styles.btnView}>
              <Button text="Create Account" onPress={handleSignup} />
            </View>

            <View style={styles.dividerView}>
              <View style={styles.devider}></View>
              <Text style={styles.deviderText}>Or</Text>
              <View style={styles.devider}></View>
            </View>

            <View style={styles.socialButtonView}>
              <SocialButton text={"Continue with Google"} icon={Google} />
              <SocialButton text={"Continue with Apple"} icon={apple} />
              <SocialButton text={"Continue with Email"} icon={email} />
            </View>

            <View style={styles.continueView}>
              <TouchableOpacity>
                <Text style={styles.continueText}>Continue as a guest</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.dividerView}>
              <View style={styles.devider}></View>
              <Text style={styles.deviderText}>Or</Text>
              <View style={styles.devider}></View>
            </View>

            <View style={styles.bottomView}>
              <View style={styles.innerBottomView}>
                <Search name="search1" size={22} color="#1F1F1F" />
                <TextInput
                  style={styles.textInput}
                  placeholder="Find My Account"
                  placeholderTextColor={'#1F1F1F'}
                  onChangeText={setText}
                  value={texxt}
                />
              </View>
            </View>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    paddingTop: 35,
  },
  innerContainer: {
    width: "90%",
    height: 593,
  },
  numberText: {
    fontFamily: "Poppins-Medium",
    fontSize: 20,
    color: "#202020",
    lineHeight: 28,
    letterSpacing: 0.5,
  },
  phoneInputView: {
    width: "100%",
    height: 60,
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  btnView: {
    paddingTop: 20,
  },
  dividerView: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    gap: 10,
    paddingTop: 20,
  },
  devider: {
    height: 1,
    backgroundColor: "#C0CADA",
    width: "45%",
  },
  deviderText: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#C0CADA",
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  socialButtonView: {
    gap: 10,
    paddingTop: 20,
  },
  continueView: {
    width: "100%",
    paddingTop: 25,
    alignItems: "center",
  },
  continueText: {
    fontFamily: "Poppins-Medium",
    fontSize: 14,
    color: "#202020",
    lineHeight: 21,
    textDecorationLine: "underline",
  },
  bottomView: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
  },
  innerBottomView: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    height: 40,
    width: "90%",
    fontSize: 14,
    fontFamily: "Poppins-Medium",
    color: "#202020",
    justifyContent: 'center',
    padding: 8,
  },
});
