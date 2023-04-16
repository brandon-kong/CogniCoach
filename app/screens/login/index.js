import { StyleSheet, Text, View, Image, Button } from 'react-native';

import CustomButton from '../../components/Button/index'

import Textbox from '../../components/Textbox';

export default function Login ( { navigation } ) {
    return (
        <View style={styles.container}>
            <View style={styles.input_container}>
                <Text style={styles.input_label}>Email</Text>
                <Textbox placeholder="Enter your email" />
            </View>
            <View style={styles.input_container}>
                <Text style={styles.input_label}>Password</Text>
                <Textbox placeholder="Enter your password" />
            </View>
            <CustomButton text='Login' />
            <Button color='#000' title="Go back" onPress={() => navigation.navigate('home')} style={styles.go_back} />
        </View> 

    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',

        backgroundColor: '#fff',
        padding: 40,
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