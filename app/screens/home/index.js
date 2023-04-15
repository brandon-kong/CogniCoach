import { Button, Text, View } from "react-native";

export default function Home() {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Login"
                onPress={() => navigation.navigate("Login")}
            />
            <Button
            title="Go to Personal Assistant"
            onPress={() => navigation.navigate("PersonalAssistant")}
            />
        </View>
    );
}

