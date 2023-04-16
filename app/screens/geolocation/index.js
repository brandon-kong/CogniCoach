import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function Map({ navigation }) {
  const location = {
    latitude: 42.05837,
    longitude: -87.6743,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={location}>
        <Marker
          coordinate={{ latitude: 42.05837, longitude: -87.6743 }}
          image={require("./grandpa.png")} // use require to get the absolute file path
        />
      </MapView>
    </View>
  );
}

// create our styling code:
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  marker: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderColor: "#eee",
    elevation: 10,
    marginBottom: 450,
    width: 200,
    height: 200,
    borderRadius: 20,
  },
  text: {
    color: "#fff",
  },
});

