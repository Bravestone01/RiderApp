import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from '../Components/Button';



const SubmitDocumentScreen = ({ navigation }) => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.TextView}>
            <Text style={styles.textOne}>Submit Documents</Text>
            <Text style={styles.textTwo}>
              Submit the necessary documents to access the Giverr platform. Your documents will be reviewed by a
              platform admin.
            </Text>
          </View>
          <View style={styles.FinishDeliverycontainer}>
            <Text style={styles.header}>Finish Delivery</Text>

            {/* Compliance Report Section */}
            <View style={styles.uploadSection}>
              <Text style={styles.label}>Compliance Report</Text>
              <View style={styles.fileBox}>
                <TextInput style={styles.fileName} placeholder="Upload .pdf" editable={false} />

                <TouchableOpacity>
                  <Ionicons name="close" size={24} color="purple" />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.uploadSection}>
              <Text style={styles.label}>Proof of Delivery</Text>
              <View style={styles.fileBox}>
                <TextInput style={styles.fileName} placeholder="Upload .png or .jpg" editable={false} />
                <TouchableOpacity style={styles.uploadIcons}>
                  <Text>Upload</Text>
                  <Ionicons name="cloud-upload-outline" size={24} color="purple" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.buttonContainer}>
            <Button text="Submit and Continue" onPress={() => {navigation.navigate('TermandConditionScreen')}}/>

        </View>
        
      </SafeAreaView>
    </>
  );
};

export default SubmitDocumentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 35,
  },
  innerContainer: {
    width: '90%',
    height: 360,
    // backgroundColor: 'red',
  },
  TextView: {
    width: '100%',
    justifyContent: 'space-between',
    gap: 10,
  },
  textOne: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    color: '#202020',
    lineHeight: 33,
  },
  textTwo: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#202020',
    lineHeight: 21,
  },
  FinishDeliverycontainer: {
    // backgroundColor: 'red',
    paddingTop: 20,
  },
  header: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: '#202020',
  },
  uploadSection: {
    gap: 8,
  },
  label: {
    fontSize: 14,
    color: '#B3B3B3',
    paddingTop: 7,
  },
  fileBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 16,
    padding: 10,
    backgroundColor: '#f9f9f9',
    justifyContent: 'space-between',
  },
  fileName: {
    fontSize: 14,
    color: '#551895',
  },
  uploadIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  buttonContainer: {
    flex:1,
    width: '90%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 35,
  },
});
