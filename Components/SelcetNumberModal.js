import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Modal,
    FlatList,
    StyleSheet,
} from 'react-native';
import { countries } from '../src/Data';
import DownArrow from 'react-native-vector-icons/AntDesign'
import Cancel from 'react-native-vector-icons/AntDesign'


const SelectNumberModal = ({ onPhoneChange,  }) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(countries[0]);
    const [phoneNumber, setPhoneNumber] = useState('');
    

    const handleCountrySelect = (country) => {
        setSelectedCountry(country);
        setModalVisible(false);
    };

    const handlePhoneChange = (text) => {
        setPhoneNumber(text);
        if (onPhoneChange) {
            onPhoneChange(`+${selectedCountry.callingCode} ${text}`);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>

                <TouchableOpacity
                    style={styles.countryPickerButton}
                    onPress={() => setModalVisible(true)} >
                    <Text style={styles.flag}>{selectedCountry.flag}</Text>
                    <DownArrow name='caretdown' size={15} color='#202020' />

                </TouchableOpacity>

                {/* Phone Number Input */}
                <View style={styles.inputView}>
                    <Text style={styles.callingCode}>+{selectedCountry.callingCode}</Text>
                    <TextInput
                        style={styles.phoneNumberInput}
                        keyboardType="phone-pad"
                        onChangeText={handlePhoneChange}
                        value={phoneNumber}
                       
                    />
                </View>

            </View>

            {/* Country Picker Modal */}


            <Modal
                visible={isModalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >


                <View style={styles.modalContainer}>

                    <View style={styles.modalInnerView}>

                        <View style={styles.modalHeader}>
                            <Text style={styles.modalTitle}>Select Your Country</Text>
                            <TouchableOpacity onPress={() => setModalVisible(false)}>
                                <Cancel name="close" size={30} color="#202020" />
                            </TouchableOpacity>

                        </View>
                        <FlatList
                            data={countries}
                            keyExtractor={(item) => item.code}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={styles.countryItem}
                                    onPress={() => handleCountrySelect(item)}
                                >
                                    <Text style={styles.flag}>{item.flag}</Text>
                                    <Text style={styles.countryName}>{item.name}</Text>
                                    <Text style={styles.callingCode}>+{item.callingCode}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },

    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: "100%",
        height: 60,
        justifyContent: 'space-between',
        gap: 10,
        paddingHorizontal: 10

    },
    countryPickerButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#FFFFFF",
        height: 60,
        width: "25%",
        justifyContent: "space-between",
        paddingHorizontal: 10
    },

    flag: {
        fontSize: 30,
        color: "#202020"
    },

    inputView: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        width: "70%",
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "#202020",
        borderRadius: 16,

    },

    callingCode: {
        fontSize: 18,
        fontWeight: "500",
        color: "#202020"
    },
    phoneNumberInput: {
        fontSize: 16,
        color:"#000000",
        fontFamily:"Poppins-Medium",
         alignItems:"center",
         paddingTop:16,
         width:"80%",
       

    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignItems: 'center',

    },

    modalInnerView: {
        backgroundColor: '#EEEEEE',
        borderRadius: 30,
        overflow: 'hidden',
        paddingHorizontal: 10,
        width: "90%",
    },

    countryItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#EEEEEE',
        gap: 10,
    },
    countryName: {
        flex: 1,
        fontSize: 16,
        color: '#202020',
    },

    modalHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 15,
        paddingHorizontal: 10
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: "500",
        color: '#202020',
    },
});

export default SelectNumberModal;
