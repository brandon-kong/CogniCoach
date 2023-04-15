import { StyleSheet, Pressable, Text } from "react-native";


export default function Button( {onPress, text} ) {
  return (
    <Pressable 
        title="Click Me"
        onPress={() => alert('Button Clicked!')}
        style={styles.button}
    >
        <Text style={styles.btn_text}>{text || 'Click me'}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'black',
        paddingVertical: 10,
        paddingHorizontal: '30%',
        borderRadius: 5,
    },

    btn_text: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    }
})