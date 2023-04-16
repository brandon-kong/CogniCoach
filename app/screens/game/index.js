import { View, Text, Button, StyleSheet, Image } from 'react-native'

import CustomButton from '../../components/Button/index'

export default function Game ( { navigation } ) {
    return (
        <View style={styles.container}>
            <View style={styles.last_game}>
                <Text style={styles.last_game_title}>Your last game:</Text>
                <Text style={styles.last_game_date}>4 days ago</Text>
            </View>
            <View style={styles.last_game}>
                <Text style={styles.high_score_title}>High score:</Text>
                <Text style={styles.high_score_points}>500</Text>
            </View>
            
            <CustomButton text="Play" />
            <Text style={styles.disclaimer}>Your scores are shared with each of your caregivers to help assess your progress. <Text style={styles.link}>Learn more</Text></Text>
            <Image style={styles.main_img} source={require('../../assets/game-test.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        paddingTop: 40,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 15,
        backgroundColor: '#fff',
    },

    last_game: {
        height: 100,
        width: '100%',
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 10,
    },

    last_game_title: {
        fontSize: 25,
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center',
    },

    last_game_date: {
        fontSize: 25,
        width: '100%',
        textAlign: 'center',
    },

    high_score_title: {
        fontSize: 25,
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center',
    },

    high_score_points: {
        fontSize: 25,
        width: '100%',
        textAlign: 'center',
        fontWeight: 900,
        color: '#f48',

    },

    disclaimer: {
        fontSize: 15,
        width: '100%',
        textAlign: 'center',
        marginVertical: 20,
    },

    link: {
        color: '#f48',
    },

    main_img: {
        width: '100%',
        height: '40%',
        resizeMode: 'contain',
        borderRadius: 30,
    }
})