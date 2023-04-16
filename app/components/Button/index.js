import { StyleSheet, Pressable, Text, View } from "react-native";


export default function Button( {onPress, text} ) {
  return (
    <View style={styles.container}>
        <Pressable 
        title="Click Me"
        onPress={() => onPress && onPress || console.log('Button pressed')}
        style={styles.button}
    >
        <Text style={styles.btn_text}>{text || 'Click me'}</Text>
    </Pressable>
    </View>
    
  );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'black',
        height: 50,
        width: '100%',
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    btn_text: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        width: '100%',
    }
})