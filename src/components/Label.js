/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-dupe-keys */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
import React,{useState} from 'react';
import {View,StyleSheet,TouchableOpacity, Text} from "react-native";


const Label = (props)=> {
    return (
        <TouchableOpacity style={styles[props.theme]}
            onPress={props.onPress}>
            <Text style={styles[props.textColor]}
                onClick={props.onClick}>{props.label}{props.counter} </Text>
        </TouchableOpacity>
    );
};

export default Label;

const styles = StyleSheet.create({
text:{
    marginLeft:10,
    padding: 10,
    margin: 5,
    borderRadius: 15,
    alignItems: 'center',
    textAlign:'center',
},
textColor:{
    color:'#713975',
    fontWeight: 'bold',
    fontSize: 30,
},
});
