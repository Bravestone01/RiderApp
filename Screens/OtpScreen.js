import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import ArrowLeft from 'react-native-vector-icons/AntDesign';

const OtpScreen = ({ route, navigation }) => {
  const { phoneNumber, countryCode } = route.params;
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const [focusedIndex, setFocusedIndex] = useState(null);
  const [timer, setTimer] = useState(0);
  const [isResending, setIsResending] = useState(false);

  const isOtpComplete = () => otp.every((digit) => digit.trim() !== "");

  const handleChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);


    if (value && index < otp.length - 1) {
      const nextInput = `input-${index + 1}`;
      const nextField = inputs[nextInput];
      if (nextField) nextField.focus();
    }
  };

  const handleKeyPress = (event, index) => {
    if (event.nativeEvent.key === "Backspace" && otp[index] === "" && index > 0) {
      const prevInput = `input-${index - 1}`;
      const prevField = inputs[prevInput];
      if (prevField) prevField.focus();
    }
  };
  const handleChangeNumber = () => {
    navigation.navigate('SignupScreen');


  }
  const handleResend = () => {
    setTimer(10);
    setIsResending(true);

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsResending(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const inputs = {};

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.innerContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            Enter the 5-digit code sent to you at
            <Text style={styles.phoneNumber}>{countryCode} {phoneNumber}
            </Text>
          </Text>
        </View>

        <TouchableOpacity style={styles.linkContainer} onPress={handleChangeNumber}>
          <Text style={styles.linkText}>Change your mobile number?</Text>
        </TouchableOpacity>

        <View style={styles.otpContainer}>
          {otp.map((_, index) => (
            <TextInput
              key={index}
              ref={(input) => (inputs[`input-${index}`] = input)}
              style={[
                styles.otpInput,
                focusedIndex === index && styles.otpInputFocused,
              ]}
              keyboardType="number-pad"
              maxLength={1}
              onFocus={() => setFocusedIndex(index)}
              onBlur={() => setFocusedIndex(null)}
              onChangeText={(value) => handleChange(value, index)}
              onKeyPress={(event) => handleKeyPress(event, index)}
              value={otp[index]}
            />
          ))}
        </View>

        <TouchableOpacity
          style={[
            styles.resendContainer,
            isResending && styles.resendContainerActive,
          ]}
          onPress={handleResend}
          disabled={timer > 0}
        >
          <Text
            style={[
              styles.resendText,
              !isResending && styles.resendTextWhite,
            ]}
          >
            {timer > 0 ? `Resend code via SMS (${timer}s)` : "Resend code via SMS"}
          </Text>
        </TouchableOpacity>


      </View>


      <View style={styles.bottomContainer}>
        <View style={styles.bottomInnerContainer}>
          <TouchableOpacity style={styles.backButtonView} onPress={() => navigation.goBack()} >
            <ArrowLeft name='arrowleft' size={30} color='black' />

          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.nextButtonView,
              isOtpComplete() ? styles.nextButtonActive : styles.nextButtonInactive,
            ]}
            onPress={() => navigation.navigate('EmailScreen')}
            disabled={!isOtpComplete()} 
          >
            <Text
              style={[
                styles.nextButtonText,
                isOtpComplete() ? styles.nextButtonTextActive : styles.nextButtonTextInactive,
              ]}
            >
              Next
            </Text>
            <ArrowLeft name="arrowright" size={30} color={isOtpComplete() ? "#fff" : "#B3B3B3"} />
          </TouchableOpacity>

        </View>

      </View>
    </KeyboardAvoidingView>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 35,
    alignItems: "center",
  },

  innerContainer: {
    width: "90%",
    height: 300,
    gap: 10,

  },
  titleContainer: {
    width: "100%",
    height: 70,
  },
  title: {
    fontSize: 24,
    fontFamily: "Poppins-Bold",
    color: "#202020",
    lineHeight: 36,
  },
  phoneNumber: {
    fontSize: 24,
    fontWeight: "Poppins-Medium",
    color: "#0052B4",
  },
  linkContainer: {
    width: "100%",
  },
  linkText: {
    fontSize: 14,
    color: "#202020",
    textDecorationLine: "underline",
    fontFamily: "Poppins-Medium",
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 30,
    paddingBottom: 30,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    textAlign: "center",
    fontSize: 18,
    borderRadius: 10,
    color: "#202020",
  },
  otpInputFocused: {
    borderColor: "#000",
  },
  resendContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    paddingVertical: 3,
    backgroundColor: "#000",
  },
  resendContainerActive: {
    backgroundColor: "#fff",
  },
  resendText: {
    fontSize: 14,
    color: "#656262",
    fontFamily: "Poppins-Medium",
  },
  resendTextWhite: {
    color: "#fff",
  },
  bottomContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
    width: "90%",
    // backgroundColor:"red",
    height: '59%'
  },

  bottomInnerContainer: {
    width: "100%",
    // backgroundColor:"green",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

  },
  backButtonView: {
    height: 57,
    width: 57,
    backgroundColor: "#F2F2F2",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,


  },
  nextButtonView: {
    height: 57,
    width: 103,
    backgroundColor: "#F2F2F2",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 100,
  },
  nextButtonText: {
    fontSize: 16,
    color: "#B3B3B3",
    fontFamily: "Poppins-Medium",
  },
  nextButtonActive: {
    backgroundColor: "#000", 
  },
  nextButtonInactive: {
    backgroundColor: "#F2F2F2",
  },
  nextButtonTextActive: {
    color: "#fff",
  },
  nextButtonTextInactive: {
    color: "#B3B3B3", 
  },

});
