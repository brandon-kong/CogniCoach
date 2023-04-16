import React, { useState, Component } from 'react';
import { Button, View, TextInput, TouchableOpacity, Text , StyleSheet, } from 'react-native';

export default function Question({question, dummy}) {
    const [text, setText] = useState('');
    function changed(text){
        setText(text);
        // console.log("i changed");
        // console.log(text);
        dummy(text);
    }

    return (
      <View style = {styles.qaBox}>
        <Text>{question}</Text>
        <TextInput style={[styles.customText]}
            // style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => changed(text)}
            value={text}
            placeholder="Type your answer here"
        />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
        // padding: 10,
    },
    customText:{
        borderColor:'black',
        // backgroundColor:'#D3D3D3',
        width:300,
        height: 50,
        borderWidth: 0.5,
        fontSize:15,
        borderRadius: 10,
        // paddingHorizontal: 5,
        // paddingVertical: 5,
        // padding: 10,
    },
    qaBox:{
        padding:15,
    }
})