import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Button from '../components/Button';

const Stack = createNativeStackNavigator();

export default function Dashboardcaregiver() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to Dashboard Caregiver!</Text>
        <Button
          text="Patient Data"
          onPress={() => {
            // Add logic for navigating to patient data screen
          }}
        />
        <Button
          text="Patient Geolocation"
          onPress={() => {
            // Add logic for navigating to patient geolocation screen
          }}
        />
        {/* Add any other components or text here */}
      </View>
    );
  }


    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
        text: {
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 16,
        },
      });