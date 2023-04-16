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
        <Text style={styles.qaBox}>When is your typical wake-up time?</Text>
        <Controller style={styles.qaBox}
            control={control}
            rules={{
            required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
                placeholder="Type Your Answer Here"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
            />
            )}
            name="wakeTime"
        />
        {errors.wakeTime && <Text>This is required.</Text>}

        <Text style={styles.qaBox}>When is your typical bed time?</Text>
        <Controller
            control={control}
            rules={{
            maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
                placeholder="Type Your Answer Here"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
            />
            )}
            name="bedTime"
        />

        <Text style={styles.qaBox}>When is your breakfast?</Text>
        <Controller
            control={control}
            rules={{
            maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
                placeholder="Type Your Answer Here"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
            />
            )}
            name="breakfast"
        />

        <Text style={styles.qaBox}>When is your lunch time?</Text>
        <Controller
            control={control}
            rules={{
            maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
                placeholder="Type Your Answer Here"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
            />
            )}
            name="lunch"
        />

        <Text style={styles.qaBox}>When is your dinner?</Text>
        <Controller
            control={control}
            rules={{
            maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
                placeholder="Type Your Answer Here"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
            />
            )}
            name="dinner"
        />

        <Text style={styles.qaBox}>What medication(s) do you take?</Text>
        <Controller
            control={control}
            rules={{
            maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
                placeholder="Type Your Answer Here"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
            />
            )}
            name="medication"
        />

        <Text style={styles.qaBox}>What time do you exercise? Skip if N/A.</Text>
        <Controller
            control={control}
            rules={{
            maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
                placeholder="Type Your Answer Here"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
            />
            )}
            name="exercise"
        />

        <Button title="Submit" onPress={handleSubmit(onSubmit)} style={styles.qaBox} />
        </View>

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
        // padding:20,
        paddingTop:45,
        fontWeight: 'bold',
    }
})