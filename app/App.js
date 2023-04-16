import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import Home from './screens/home/index';
import Quiz from './screens/quiz/index';
import Login from './screens/login/index';
// import PersonalAssistant from './screens/Personalassistant';
import Map from './screens/geolocation/index';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
        name="map"
        component={Map}
        options={{ title: 'Map', headerShown: false }}
      />
      <Stack.Screen
          name="login"
          component={Login}
          options={{ title: 'Login', headerShown: false }}
      />
      {/* <Stack.Screen
          name="Calendar"
          component={PersonalAssistant}
          options={{ title: 'Calendar' }}
      /> */}
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
