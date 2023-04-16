import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import Login from './screens/login/index';
import Personalassistant from './screens/personalassistant';
import Faceai from './screens/Faceai'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Personalassistant"
          component={Personalassistant}
          options={{ title: 'Personal Assistant' }}
        />
      <Stack.Screen
          name="test2"
          component={Faceai}
          options={{ title: 'Face A.I.' }}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{ title: 'Login' }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
