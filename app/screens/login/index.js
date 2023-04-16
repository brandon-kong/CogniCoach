import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { useState } from 'react';

import CustomButton from '../../components/Button/index'

import Textbox from '../../components/Textbox';

export default function Login ( { navigation } ) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        fetch('http://localhost:8000/api/users/login', {
            method: 'POST',
        })
    }

    const handleLoginTest = () => {
        const isCaregiver = false;

        if (isCaregiver) {
            console.log('caregiver')
            navigation.navigate('caregiver')
        }
        else {
            navigation.navigate('patient')
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.input_container}>
                <Text style={styles.input_label}>Email</Text>
                <Textbox placeholder="Enter your email" onChange={setEmail} />
            </View>
            <View style={styles.input_container}>
                <Text style={styles.input_label}>Password</Text>
                <Textbox secureTextEntry={true}  placeholder="Enter your password" onChange={setPassword} />
            </View>
            <CustomButton text='Login' onPress={handleLoginTest} />
            <Button color='#000' title="Go back" onPress={() => navigation.navigate('home')} style={styles.go_back} />
        </View> 

    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',

        padding: 15,
        gap: 30,
        height: '100%',
        flexDirection: 'column',

        backgroundColor: '#fff',
        justifyContent: 'center',
    },

    input_container: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    input_label: {
        width: '100%',
        fontSize: 17,
        textAlign: 'left',
        marginBottom: 8,
        fontWeight: 500,
    },
})