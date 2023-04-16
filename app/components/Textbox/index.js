import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function Textbox ( {onChange, text, placeholder, secureTextEntry} ) {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textbox}
                placeholder={placeholder || 'Enter your email'}
                placeholderTextColor='#444'
                secureTextEntry={secureTextEntry || false}
                onChangeText={onChange}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,

        flexDirection: 'column',
    },

    textbox: {
        fontSize: 20,
        padding: 10,

    }
})