import { StyleSheet, Text, View, Image } from 'react-native';
import Button from '../../components/Button/index'

export default function Login () {
    return (
        <View style={styles.container}>
            <Image style={styles.main_img} source={require('../../assets/landing-img.png')} />
            <View style={styles.bottom_container}>
                <Text style={styles.home_title} >Are you a</Text>
                <Button text='Caregiver' />
                <Text style={styles.home_text}>or</Text>
                <Button text='Patient' />
            </View>
           
        </View> 

    );
}

const styles = StyleSheet.create({
    container: {
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
        height: '30%',
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
    },

    home_text: {
        textAlign: 'center',
        fontSize: 20,
    }
})