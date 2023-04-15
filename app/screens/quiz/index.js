import React, { useState, Component } from 'react';
import { Button, View, TextInput, TouchableOpacity, Text , StyleSheet, } from 'react-native';

function Question({question, text, onQuestionChange}) {

    return (
      <View style = {styles.qaBox}>
        <Text>{question}</Text>
        <TextInput style={[styles.customText]}
            // style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => onQuestionChange(text)}
            value={text}
            placeholder="Type your answer here"
        />
      </View>
    );
  }

export default function Quiz({navigation}){
    const [text, setText] = useState('');
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    return (
        <View style={styles.container}>
            <Text>Quiz</Text>
            <Question question="What is your typical wake-up time?" onQuestionChange={setText}></Question>
        
            <Question question="When do you take your medication(s)?" onQuestionChange={setText}></Question>

            <Button title="playing around lol">
            </Button>
            <TouchableOpacity>
                <Text>Submit</Text>
            </TouchableOpacity>

            {/* <MyDatePicker></MyDatePicker> */}


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