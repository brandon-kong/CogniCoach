import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Caregiver',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({item, backgroundColor, textColor}) => (
  <TouchableOpacity style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
  </TouchableOpacity>
);

export default function Patient ({navigation}) {
  const [selectedId, setSelectedId] = useState();
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={[styles.button, styles.doctorBox]}>
        <Image style={styles.docImage} source={require("./doctor.png")}></Image>
        <Text style={styles.btn_text}>Caregiver: Dr. Kong</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.doctorBox]} title="Go back" onPress={() => navigation.navigate('Personalassistant')}>
        <Image style={styles.calImage} source={require("./calendar.png")}></Image>
        <Text style={styles.btn_text}>Calendar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  doctorBox: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'flex-start'
  },
  docImage: {
    borderRadius: 10,
  },
    button: {
        backgroundColor: 'black',
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    btn_text: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        width: '60%',
    },

    calImage: {
        width: 150,
        height: 150,
        borderRadius: 10,
    }
});