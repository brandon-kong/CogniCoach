import React, { useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Picker from '@react-native-picker/picker'

const TimePickerScreen = () => {
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');

  const onHoursChange = (value) => {
    setHours(value);
  };

  const onMinutesChange = (value) => {
    setMinutes(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{hours}:{minutes}</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={hours}
          onValueChange={onHoursChange}
          style={styles.picker}
        >
          {Array.from(Array(24).keys()).map((value) => (
            <Picker.Item key={value} label={value < 10 ? `0${value}` : `${value}`} value={value < 10 ? `0${value}` : `${value}`} />
          ))}
        </Picker>
        <Text style={styles.separator}>:</Text>
        <Picker
          selectedValue={minutes}
          onValueChange={onMinutesChange}
          style={styles.picker}
        >
          {Array.from(Array(60).keys()).map((value) => (
            <Picker.Item key={value} label={value < 10 ? `0${value}` : `${value}`} value={value < 10 ? `0${value}` : `${value}`} />
          ))}
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 20,
      marginBottom: 20,
    },
    pickerContainer: {
      flexDirection: 'row',
    },
    separator: {
      fontSize: 20,
      marginHorizontal: 10,
    },
    picker: {
      width: 80,
    },
  });
  
  export default TimePickerScreen;