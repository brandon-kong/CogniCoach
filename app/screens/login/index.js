import { StyleSheet, Text, View, Image } from 'react-native';

export default function Login () {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/landing-img.png')} />
            <Text>Login Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})