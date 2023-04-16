import React, { useState, Component } from 'react';
import { Button, View, TextInput, TouchableOpacity, Text , StyleSheet, } from 'react-native';
import {useForm, Controller} from "react-hook-form"

import Question from '../../components/Question';


export default function Quiz({navigation}){
    // const [text, setText] = useState('');

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
          firstName: '',
          lastName: ''
        }
      });
    const onSubmit = data => console.log(data);

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [combinedText, setCombinedText] = useState('');
    const [dummy, setDummy] = useState("");

    function combineText(text) {
        // console.log("HELLO")
        console.log(text);
        // setCombinedText(combinedText + text);
        //console.log(dummy)
    }

    function submit(text){
        console.log(text);
        console.log("HELLO");
    }

    return (

        <View style={styles.container}>
        <Controller
            control={control}
            rules={{
            required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
                placeholder="First name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
            />
            )}
            name="firstName"
        />
        {errors.firstName && <Text>This is required.</Text>}

        <Controller
            control={control}
            rules={{
            maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
                placeholder="Last name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
            />
            )}
            name="lastName"
        />

        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        </View>
        // <View style={styles.container}>
        //     <Text>Quiz</Text>

            
            
        //     {/* <Question question="What is your typical wake-up time?" onQuestionChange={setText}></Question> */}
        //     {/* <Question question="What is your typical wake-up time?" onTextChange={combineText} dummy={setDummy}></Question> */}
        
        //     {/* <Question question="When do you take your medication(s)?" onQuestionChange={setText}></Question> */}
        //     {/* <Question question="When do you take your medication(s)?" onTextChange={combineText} dummy={setDummy}></Question> */}
            
        //     {/* onPress={submit(combinedText)}  */}
        //     {/* <TouchableOpacity>
        //         <Text>Submit</Text>
        //     </TouchableOpacity> */}

        //     <View>
        //         <Button title="Submit" onPress={submit(dummy)}></Button>
        //     </View>


        // </View>
        
        
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
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

// const styles = StyleSheet.create({
//     label: {
//       color: 'white',
//       margin: 20,
//       marginLeft: 0,
//     },
//     button: {
//       marginTop: 40,
//       color: 'white',
//       height: 40,
//       backgroundColor: '#ec5990',
//       borderRadius: 4,
//     },
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       paddingTop: Constants.statusBarHeight,
//       padding: 8,
//       backgroundColor: '#0e101c',
//     },
//     input: {
//       backgroundColor: 'white',
//       borderColor: 'none',
//       height: 40,
//       padding: 10,
//       borderRadius: 4,
//     },
//   });