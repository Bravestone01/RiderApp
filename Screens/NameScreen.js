import { KeyboardAvoidingView, Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import InputFied from '../Components/InputFied'
import ArrowLeft from 'react-native-vector-icons/AntDesign'

const NameScreen = ({ navigation }) => {
  return (
    <>

      <SafeAreaView style={{ flexGrow: 1 }} >
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flexGrow: 1 }}>


          <View style={styles.Container}>
            <View style={styles.innerContainer}>
              <View style={styles.textView}>
                <Text style={styles.textOne}>What’s your name?</Text>
                <Text style={styles.textTwo}>Let us know how to properly address you</Text>

              </View>

              <View style={styles.inputView}>
                <Text style={styles.inputText}>Name</Text>
                <InputFied placeholder={"Enter first name"} />
              </View>

            </View>

            <View style={styles.bottomContainer}>
              <View style={styles.bottomInnerContainer}>
                <TouchableOpacity style={styles.backButtonView} onPress={() => navigation.goBack()} >
                  <ArrowLeft name='arrowleft' size={30} color='#B3B3B3' />

                </TouchableOpacity>

                <TouchableOpacity style={styles.nextButtonView} onPress={() => navigation.navigate('SubmitDocumentScreen')} >
                  <Text style={styles.nextButtonText}>Next</Text>
                  <ArrowLeft name='arrowright' size={30} color='#B3B3B3' />


                </TouchableOpacity>

              </View>
            </View>



          </View>



        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  )
}

export default NameScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
  },
  Container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 35,

  },
  innerContainer: {
    width: "90%",
    height: 220,
    //    backgroundColor:"red",
    justifyContent: "space-between",
  },
  textView: {
    height: 70,
    width: "100%",
    justifyContent: "space-between",
    paddingVertical: 8
  },
  textOne: {
    fontSize: 24,
    fontFamily: "Poppins-Bold",
    color: "#202020",

  },
  textTwo: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: "#202020",

  },
  inputView: {
    width: "100%",
    height: 100,
  },
  inputText: {
    fontSize: 20,
    fontFamily: "Poppins-Medium",
    color: "#202020",

  },
  bottomContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
    width: "90%",
    // backgroundColor:"red",
    height: '65%'
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
  }
})