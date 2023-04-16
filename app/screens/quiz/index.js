import React, { useState, Component } from 'react';
import { Button, View, TextInput, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native';
import { useForm, Controller } from "react-hook-form";
//import {Textbox} from "../../components/Textbox/index";

import Question from '../../components/Question';


export default function Quiz({ navigation }) {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      firstName: '',
      lastName: ''
    }
  });

  const onSubmit = data => console.log(data);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Text
              style={styles.input}
              placeholder="First name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="firstName"
        />
        {errors.firstName && <Text style={styles.errorText}>This is required.</Text>}
      </View>

      <View style={styles.inputContainer}>
        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Last name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="lastName"
        />
      </View>

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
    padding: 8,
  },
  errorText: {
    color: 'red',
    marginTop: 4,
  },
});
