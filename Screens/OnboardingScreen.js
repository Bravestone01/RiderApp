import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import VectorPurple from '../assets/Images/VectorPurple.svg'
import Button from '../Components/Button'

const OnboardingScreen = ({ navigation }) => {
    return (
        <>
            <StatusBar barStyle={'dark-content'} backgroundColor={'#FFFFFF'} />
            <View style={styles.container}>

                <View style={styles.viewOne}>
                    <View style={styles.innerViewOne} >
                        <VectorPurple />
                        <Text style={styles.textOne}>Be the Giver, Feel the Difference.</Text>
                        <Text style={styles.textTwo}>Allowing you to see the impact of your contributions and share your giving journey.</Text>
                    </View>

                </View>

                <View style={styles.viewTwo}>

                    <View style={styles.innerViewTwo}>
                        <Button onPress={() => navigation.navigate('SignupScreen')}  text="Get Started" />
                        <View style={styles.textView}>
                            <Text>Learn more in our

                            </Text>
                            <TouchableOpacity>
                                <Text style={styles.textthree}>Privacy Policy</Text>
                            </TouchableOpacity>
                        </View>

                    </View>



                </View>

            </View>
        </>
    )
}

export default OnboardingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        width: '100%',
        alignItems: 'center',

    },
    viewOne: {
        // backgroundColor: 'red',
        flex: 2,
        width: '100%',
        alignItems: "center",
        justifyContent: "center"

    },
    viewTwo: {
        // backgroundColor: 'red',
        flex: 1,
        width: '100%',
        alignItems: "center",
        justifyContent: "center",


    },
    innerViewOne: {
        width: '90%',
        // backgroundColor:"blue",

    },
    textOne: {
        fontFamily: "Poppins-Bold",
        fontSize: 36,
        color: "#202020"
    },
    textTwo: {
        fontFamily: 'Poppins-Medium',
        fontSize: 16,
        color: "#202020",
        letterSpacing: 1,
        lineHeight: 22.4,

    },
    innerViewTwo: {
        width: '90%',
        alignItems: "center",
        justifyContent: "center",
        gap: 15,

    },
    textView: {
        flexDirection: "row",
        gap: 5,

    },
    textthree: {
        textDecorationLine: "underline",
        color: "#551895"
    }
})