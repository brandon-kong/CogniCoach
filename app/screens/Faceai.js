import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Camera, CameraType } from 'expo-camera';
import * as FaceDetector from 'expo-face-detector';
import { useState } from 'react';

export default function Faceai() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [detectedFaces, setDetectedFaces] = useState([]);

  // Request camera permissions
  React.useEffect(() => {
    requestPermission();
  }, []);

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  async function handleFacesDetected({ faces }) {
    // Handle detected faces
    /*
    if (faces.length > 0) {
      // Do something with the detected faces
      console.log('Detected faces:', faces);
    }*/
     // Update detected faces state
     setDetectedFaces(faces);
  }

  return (<View style={styles.container}>
    <Camera
      style={styles.camera}
      type={type}
      onFacesDetected={handleFacesDetected}
      faceDetectorSettings={{
      mode: FaceDetector.FaceDetectorMode.fast,
      detectLandmarks: FaceDetector.FaceDetectorLandmarks.none,
      runClassifications: FaceDetector.FaceDetectorClassifications.none,
        minDetectionInterval: 1000,
        tracking: true,
      }}
    >
    {/* Render face frames */}
    {detectedFaces.map(face => (
          <React.Fragment key={face.faceID}>
            <View
              style={[
                styles.faceBox,
                {
                  top: face.bounds.origin.y,
                  left: face.bounds.origin.x,
                  width: face.bounds.size.width,
                  height: face.bounds.size.height,
                },
              ]}
            />
            <Text
              style={[
                styles.text,
                {
                  top: face.bounds.origin.y - 20,
                  left: face.bounds.origin.x + 10,
                },
              ]}
            >
              Carol
            </Text>
          </React.Fragment>
        ))}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
          <Text style={styles.text}>Flip Camera</Text>
        </TouchableOpacity>
      </View>
    </Camera>
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
  camera: {
    flex: 1,
    width: '100%',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: '#fff',
  },
  faceBox: {
    position: 'absolute',
    borderColor: 'red', // Change the border color to set the frame color
    borderWidth: 2, // Change the borderWidth to set the frame width

  }
});


