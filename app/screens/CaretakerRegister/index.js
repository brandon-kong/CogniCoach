import CustomButton from '../../components/Button';
import Textbox from '../../components/Textbox';
import { Text, View, StyleSheet, Button } from 'react-native'

export default function CaretakerRegister ( { navigation } ) {
    return (
        <View style={styles.container}>
            <Text style={styles.register_title} >Register as a Caretaker</Text>
            <Textbox label="Name" placeholder="First name" />
            <Textbox label="Email" placeholder="Email address" />
            <Textbox label="Password" placeholder="Password" secureTextEntry={true} />
            <Textbox label="Confirm Password" placeholder="Confirm password" secureTextEntry={true} />
            <CustomButton text="Register" onPress={() => navigation.navigate('caregiver-dashboard')} />
            <Button title="Go back" color="#000" onPress={() => navigation.navigate('home')} ></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        gap: 30,
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 15,
        height: '100%',

    },

    register_title: {
        fontSize: 40,
        textAlign: 'center',
    }
})