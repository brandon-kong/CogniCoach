import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import Home from './screens/home/index';
import Quiz from './screens/quiz/index';
import Login from './screens/login/index';
import Geolocation from './screens/geolocation/index';
import Personalassistant from './screens/Personalassistant';
import Faceai from './screens/Faceai'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="test3"
          component={Geolocation}
          options={{ title: 'Geolocation' }}
        />
      <Stack.Screen
          name="test2"
          component={Faceai}
          options={{ title: 'Face A.I.' }}
        />
      <Stack.Screen
          name="Personalassistant"
          component={Personalassistant}
          options={{ title: 'Personal Assistant' }}
        />
        <Stack.Screen
          name="home"
          component={Home}
          options={{ title: 'Home', headerShown: false }}
      />
      <Stack.Screen
          name="login"
          component={Login}
          options={{ title: 'Login', headerShown: false }}
      />
      <Stack.Screen
          name="quiz"
          component={Quiz}
          options={{ title: 'quiz', headerShown: false }}
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
