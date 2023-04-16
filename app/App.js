import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Screens
import Home from './screens/home/index';
import Quiz from './screens/quiz/index';
import Login from './screens/login/index';
import Map from './screens/geolocation/index';
import GameScreen from './screens/game-screen';

// Dashboard screen
import Caregiver from './screens/dashboard/caregiver/index';
import Patient from './screens/dashboard/patient/index';

import Game from './screens/game/index';
import Family from './screens/family/index';

import Personalassistant from './screens/personalassistant';
import Faceai from './screens/Faceai'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      {/* <Stack.Screen
          name="home"
          component={Home}
          options={{ title: 'Home', headerShown: false }}
        />
      <Stack.Screen
          name="geo"
          component={Map}
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
          name="login"
          component={Login}
          options={{ title: 'Login', headerShown: false }}
      /> */}
      <Stack.Screen
          name="quiz"
          component={Quiz}
          options={{ title: 'Quiz', headerShown: false }}
      />
      {/* <Stack.Screen
          name="caregiver"
          component={CaregiverTabs}
          options={{ title: 'Caregiver', headerShown: false }}
      />
      <Stack.Screen
          name="patient"
          component={PatientTabs}
          options={{ title: 'Patient', headerShown: false }}
      />
      <Stack.Screen
          name="game-screen"
          component={GameScreen}
          options={{ title: 'Game', headerShown: false }}
      /> */}
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
    
  );
}

function CaregiverTabs () {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Caregiver" component={Caregiver} />
      <Tab.Screen name="Patient" component={Patient} />
    </Tab.Navigator>
  )
}

function PatientTabs () {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          color = focused ? '#f48' : '#000';

          if (route.name === 'Game') {
            iconName = focused
              ? 'puzzle-check'
              : 'puzzle-check-outline';
          }
          else if (route.name === 'Family') {
            iconName = focused
              ? 'account-group'
              : 'account-group-outline';
          }
          // You can return any component that you like here!
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        }
      })}
    >
      <Tab.Screen name="Game" component={Game} />
      <Tab.Screen name="Family" component={Family} />
      <Tab.Screen name="Patient" component={Patient} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
