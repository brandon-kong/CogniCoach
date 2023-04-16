import { View, Text, TextInput } from 'react-native';

export default function Textbox () {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.textbox}
                placeholder="Username"
            />
            <TextInput
                style={styles.textbox}
                placeholder="Password"
            />
            <Button text='Login' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        gap: 20,
        height: '100%',
        width: '100%',
        flexDirection: 'column',
    },

    title: {
        
    }
})