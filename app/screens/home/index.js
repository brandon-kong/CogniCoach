import { StyleSheet, Text, View, Image, Button } from 'react-native';
import CustomButton from '../../components/Button/index'

export default function Home ( { navigation } ) {
    return (
        <View style={styles.container}>
            <Image style={styles.main_img} source={require('../../assets/landing-img.png')} />
            <View style={styles.bottom_container}>
                <Text style={styles.home_title} >Are you a</Text>
                <CustomButton text='Caregiver' onPress={() => {navigation.navigate('caretaker-register')}} />
                <Text style={styles.home_text}>or</Text>
                <CustomButton text='Patient'  onPress={() => {navigation.navigate('patient-register')}} />
                <Button color="#000" title="Login instead" onPress={() => {navigation.navigate('login')}}></Button>
            </View>
           
        </View> 

    );
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        display: 'flex',
        gap: 50,
        height: '100%',
        width: '100%',
        flexDirection: 'column',

        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    main_img: {
        width: '100%',
        height: '35%',
        resizeMode: 'contain',
    },

    home_title: {
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
    },

    bottom_container: {
        display: 'flex',
        gap: 20,
        width: '100%',
    },

    home_text: {
        textAlign: 'center',
        fontSize: 20,
        color: '#000000',
    }
})