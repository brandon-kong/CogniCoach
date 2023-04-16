import { View, Text, Button, StyleSheet } from 'react-native'

import CustomButton from '../../components/Button/index'

export default function Game ( { navigation } ) {
    return (
        <View style={styles.container}>
            <View style={styles.last_game}>
                <Text style={styles.last_game_title}>Your last game:</Text>
            </View>
            <CustomButton text="Play" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },

    last_game: {
        height: 100,
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 10,
    },

    last_game_title: {
        fontSize: 20,
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center',
        padding: 10,
    }
})