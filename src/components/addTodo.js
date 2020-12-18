/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable eqeqeq */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
import React,{useState,useEffect} from "react";
import {View, Text, Keyboard, TouchableOpacity, TextInput, StyleSheet} from "react-native";

function AddTodo({addNoteToList,counter}) {
    const [text,setText] = useState('');
    const changeHandler = (val) =>{
        setText(val);
    };
    const add_To_do = ()=>{
      addNoteToList(text);
      setText('');
      Keyboard.dismiss();
    }
  return (
    <View>
      <TextInput testID="input"
        style={styles.InputContainer} 
        placeholder='Add something to do' 
        onChangeText={changeHandler}
        value={text}
      />    
      <TouchableOpacity testID="button" onPress={add_To_do}>
        <Text style={styles.textColor}>ADD TO DO</Text>
      </TouchableOpacity>
    </View>
  );
}

export default AddTodo;

const styles = StyleSheet.create({
  InputContainer: {
    backgroundColor: "#eceff1",
    margin: 5,
    paddingLeft: 10,
    marginBottom: 5,
    borderRadius: 15,
  },
  textColor:{
    marginTop: 16,
    borderWidth:1,
    backgroundColor: "#dcbbde",
    borderStyle:'dashed',
    margin:5,
    padding: 15,
    borderRadius:15,
    textAlign:'center',
    color:"#713975",
    fontWeight: 'bold',
    },
});


