import { View, Text, Button, StyleSheet } from 'react-native'

import Faceai from '../Faceai'

export default function Family ( { navigation } ) {
    return (
        <View style={styles.container}>
            <Faceai />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },


})