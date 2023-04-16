import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Button from '../../components/Button';
import FamilyImage from './family.png';

const Stack = createNativeStackNavigator();

export default function Dashboardcaregiver() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>  Welcome to Dashboard Caregiver!</Text>
      <Image source={FamilyImage} style={styles.image} />
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
    height: '100%',
    padding: 15,
    paddingTop: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 20,
    backgroundColor: '#fff',
  },

  last_game: {
    height: 100,
    width: '100%',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    resizeMode: 'contain',
  },
});

