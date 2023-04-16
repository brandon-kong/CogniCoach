import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function Textbox ( {onChange, text, placeholder} ) {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textbox}
                placeholder={placeholder || 'Enter your email'}
                placeholderTextColor='#444'
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
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 10,

        flexDirection: 'column',
    },

    textbox: {
        fontSize: 20,
        padding: 10,

    }
})