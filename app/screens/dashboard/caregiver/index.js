import { View, Button, StyleSheet, Text } from "react-native"

export default function Caregiver ( { navigation } ) {
    return (
        <View style={styles.container}>
            <Button title="Go back" onPress={() => navigation.navigate('home')}>
                <Text>Go back</Text>
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
})