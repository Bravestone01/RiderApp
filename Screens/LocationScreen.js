import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import SearchBar from '../Components/SearchBar'
import LocationIcon from 'react-native-vector-icons/EvilIcons'
import ToogleButton from 'react-native-vector-icons/FontAwesome'
import Cancel from 'react-native-vector-icons/Feather'
import LocationSvg from '../assets/Images/loaction.svg'
import ArrowLeft from 'react-native-vector-icons/AntDesign'

const LocationScreen = ({ navigation }) => {
    const [isToggled, setIsToggled] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
        if (!isToggled) {
            setModalVisible(true);
        }
    };

    const closeModal = () => {
        setModalVisible(false);
        setIsToggled(false);
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.textView}>
                    <Text style={styles.textOne}>Set a location for your Account</Text>
                    <Text style={styles.textTwo}>We use your address to help you find the best donation options nearby.</Text>

                </View>

                <View style={styles.serchBarView}>
                    <SearchBar />

                </View>
                <View style={styles.locationView}>
                    <View style={styles.innerLocationView}>

                        <LocationIcon name='location' size={30} color='#202020' />
                        <Text style={styles.textThree}>Use Current Location</Text>

                    </View>
                    <TouchableOpacity onPress={handleToggle}>
                        {isToggled ? (
                            <ToogleButton name="toggle-on" size={35} color="#551895" />

                        ) : (
                            <ToogleButton name="toggle-off" size={35} color="#202020" />
                        )}
                    </TouchableOpacity>

                </View>

            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.bottomInnerContainer}>
                    <TouchableOpacity style={styles.backButtonView} onPress={() => navigation.goBack()} >
                        <ArrowLeft name='arrowleft' size={30} color='#202020' />

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.nextButtonView} onPress={() => navigation.navigate('SubmitDocumentScreen')} >
                        <Text style={styles.nextButtonText}>Skip</Text>
                        <ArrowLeft name='arrowright' size={30} color='#fff' />


                    </TouchableOpacity>

                </View>
            </View>

            <Modal
                transparent={true}
                animationType="fade"
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <View style={styles.headerModalView}>
                            <Text style={styles.headerText}>Location Access</Text>
                            <TouchableOpacity onPress={closeModal}>
                                <Cancel name='x' size={30} color='#202020' />
                            </TouchableOpacity>

                        </View>

                        <View style={styles.headerModalViewTwo}>
                            <LocationSvg />
                            <Text style={styles.modalText}>Allow Giverr to access this device’s location?</Text>

                        </View>
                        <View style={styles.modalBtnView}>
                            <View style={styles.line} ></View>
                            <TouchableOpacity onPress={closeModal}>
                                <Text style={styles.modalBtnText}>While using the app</Text>
                            </TouchableOpacity>
                            <View style={styles.line} ></View>
                            <TouchableOpacity onPress={closeModal}>
                                <Text style={styles.modalBtnText}>Only This Time</Text>
                            </TouchableOpacity>
                            <View style={styles.line} ></View>
                            <TouchableOpacity onPress={closeModal}>
                                <Text style={styles.modalBtnTextTwo}>Deny</Text>
                            </TouchableOpacity>


                        </View>


                    </View>
                </View>
            </Modal>

        </SafeAreaView>
    )
}

export default LocationScreen

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        width: '100%',
        paddingTop: 35,

    },
    headerContainer: {
        width: '90%',
        // backgroundColor: 'red',
        gap: 30
    },
    textView: {
        width: '100%',
        gap: 10,
    },
    textOne: {
        fontSize: 24,
        fontFamily: 'Poppins-Bold',
        color: '#202020',
        lineHeight: 36,
    },
    textTwo: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#202020',
        lineHeight: 21,
    },
    serchBarView: {
        paddingTop: 10,

    },

    locationView: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
    },
    innerLocationView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    textThree: {
        fontSize: 18,
        fontFamily: "Poppins-Medium",
        color: "#202020",
    },
    modalOverlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContainer: {
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 30,

    },
    headerModalView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 10,
        paddingHorizontal: 10,
    },
    headerText: {
        fontSize: 18,
        fontFamily: "Poppins-Medium",
        color: "#202020",

    },
    headerModalViewTwo: {
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 10,

    },
    modalText: {
        fontSize: 20,
        textAlign: "center",
        fontFamily: "Poppins-Medium",
        color: "#202020",
    },
    modalBtnView: {
        alignItems: "center",
        justifyContent: "center",
    },
    line: {
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        width: '100%',
        marginVertical: 20,
    },
    modalBtnText: {
        fontSize: 16,
        fontFamily: "Poppins-Regular",
        color: "#202020",
    },
    modalBtnTextTwo: {
        fontSize: 16,
        fontFamily: "Poppins-Regular",
        color: "#202020",
        paddingBottom: 20
    },
    bottomContainer: {
        justifyContent: "flex-end",
        alignItems: "center",
        width: "90%",
        // backgroundColor:"red",
        height: '58%'
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
        backgroundColor: "#551895",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 100,
    },
    nextButtonText: {
        fontSize: 16,
        color: "#fff",
        fontFamily: "Poppins-Medium",
    }

})