
import { Button, Text, View, StyleSheet } from "react-native";

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Login"
                onPress={() => navigation.navigate("login")}
            />
            <Button
            title="Go to Personal Assistant"
            onPress={() => navigation.navigate("PersonalAssistant")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
