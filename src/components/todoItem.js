/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, FlatList, View, SafeAreaView } from "react-native";

function TodoItem({item,handlerLongClick,onCheckButtonClickHandler}) {
    return (
        <TouchableOpacity testID="button" style={styles[item.isDone ? 'throughOpacity' : 'Opacity']}
        onLongPress={()=>handlerLongClick(item.key)} onPress={onCheckButtonClickHandler(item.key)}>
            <Text style={styles[item.isDone ? 'throughText' : 'text']}>{item.text}</Text>
        </TouchableOpacity>
    );
}

export default TodoItem;

const styles = StyleSheet.create({
    text:{
        marginTop: 16,
        borderWidth:1,
        backgroundColor: "#713975",
        borderStyle:'dashed',
        margin:5,
        padding: 15,
        borderRadius:15,
        textAlign:'center',
        color:"white",
        fontWeight: 'bold',
    },
    throughText: {
        textDecorationLine: 'line-through',
        backgroundColor: "#713975",
    },
    Opacity: {
        borderRadius: 10,
        margin: 5,
    },
    throughOpacity: {
        borderRadius: 10,
        padding: 10,
        margin: 5,
    },
});