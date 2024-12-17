import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Checkbox from 'react-native-vector-icons/MaterialCommunityIcons'
import ArrowLeft from 'react-native-vector-icons/AntDesign'

const TermandConditionScreen = ({ navigation }) => {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled); 
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerView}>
                <View style={styles.textView}>
                    <Text style={styles.textOne}>Accept our Terms & Review Privacy Notice</Text>
                    <Text style={styles.textTwo}>By selecting “I Agree below, I have reviewed and agree
                        to the <Text style={styles.innerrTextOne}>Terms of Use</Text> and acknowledge the <Text style={styles.innerrTextOne}>Privacy Notice</Text> and Privacy Notice. I am at least 18+ years of age. </Text>
                </View>

                <View style={styles.BtnView}>
                  <View style={styles.checkboxView}>

                  <TouchableOpacity onPress={handleToggle}>
                {isToggled ? (
                    <Checkbox name="checkbox-blank" size={40} color="#551895" />
                ) : (
                    <Checkbox name="checkbox-blank-outline" size={40} color="#202020" />
                )}
            </TouchableOpacity>
                    <Text style={styles.textTwo}>I Agree</Text>
                    </View>

                </View>

            </View>

            <View style={styles.bottomContainer}>
              <View style={styles.bottomInnerContainer}>
                <TouchableOpacity style={styles.backButtonView} onPress={() => navigation.goBack()} >
                  <ArrowLeft name='arrowleft' size={30} color='#202020' />

                </TouchableOpacity>

                <TouchableOpacity
                        style={[styles.nextButtonView, { backgroundColor: isToggled ? "#551895" : "#D3D3D3" }]} 
                        onPress={() => navigation.navigate('LocationScreen')}
                        disabled={!isToggled} 
                    >
                        <Text style={[styles.nextButtonText, { color: isToggled ? "#fff" : "#B3B3B3" }]}>
                            Next
                            </Text> 
                        <ArrowLeft name='arrowright' size={30} color={isToggled ? "#fff" : "#B3B3B3"} />
                    </TouchableOpacity>

              </View>
            </View>

        </SafeAreaView>
    )
}

export default TermandConditionScreen

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        width: "100%",
        backgroundColor: "#fff",
        alignItems: "center",
        paddingTop: 35,
     
    },
    headerView: {
        width: "90%",
        height: 270,
        // backgroundColor:"red"
        gap: 10,
    },
    textView: {
        width: "100%",
        gap: 10,
    },
    textOne: {
        fontSize: 24,
        fontFamily: "Poppins-Bold",
        color: "#202020",
        lineHeight: 36
    },
    textTwo: {
        fontSize: 14,
        fontFamily: "Poppins-Regular",
        color: "#202020",
        lineHeight: 21,
    },

    innerrTextOne: {
        fontSize: 14,
        fontFamily: "Poppins-Regular",
        color: "#0052B4",
    },
    BtnView:{
        width:"100%",
        height:60,
        justifyContent:"flex-end",
        
        
    },
    checkboxView: {
        flexDirection:"row",
        alignItems:"center",
        gap:10,
    },
    bottomContainer: {
        justifyContent: "flex-end",
        alignItems: "center",
        width: "90%",
        // backgroundColor:"red",
        height: '65%',
        paddingBottom:30,
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