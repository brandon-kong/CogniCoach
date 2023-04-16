import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";
import Marker from "react-native-maps";
export default function Map({ navigation }) {
  const location = {
    latitude: 42.05837,
    longitude: -87.6743,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={location} />
      <View style={styles.marker}>
        <Text style={styles.color}>Grandpa</Text>
      </View>
    </View>
  );
}
//create our styling code:
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  marker: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: "#007bff",
    borderColor: "#eee",
    elevation: 10,
    marginBottom: 450,
    width: 100,
    height: 60,
    borderRadius: 20,
  },
  text: {
  color: "#fff",   
  },
});