
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Card } from 'react-native-paper'; 

export default function Personalassistant () {
    const timeToString = (time) => {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
      }
    
    const [items, setItems] = useState({});

    loadItems = (day) => {
        //const items = this.state.items || {};
        const items = {}

        setTimeout(() => {
              for (let i = -15; i < 65; i++) 
              {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = timeToString(time);

                
                if (!items[strTime]) {
                  items[strTime] = [];
                  
                  const numItems = 1;
                  //Math.floor(Math.random() * 3 + 1);
                  
                  for (let j = 0; j < numItems; j++) {
                    const nameTimeDict = {
                        Breakfast: '9:00 am',
                        Lunch: '12:00 pm',
                        Dinner: '6:00 pm',
                        Aricept: '10:00 am',
                        Memantine: '1:00 pm',
                        Yoga: '3:00 pm'
                      };
                      const names = Object.keys(nameTimeDict);
                      const randomName = names[Math.floor(Math.random() * names.length)];
          
                      // Use the randomName to get the corresponding time from the dictionary
                      const randomTime = nameTimeDict[randomName];
          
                      items[strTime].push({
                        name: `Take ${randomName} Today at ${randomTime}`,
                        height: Math.max(50, Math.floor(Math.random() * 150)),
                        day: strTime
                      });
                  }
                }
             }
                

              const newItems = {};
              Object.keys(items).forEach(key => {
                newItems[key] = items[key];
              });
              setItems(newItems);
            }, 1000);

          
    }

    const renderItem = (item) => {
        
        return (<TouchableOpacity style={{mariginRight: 10, marginTop: 17}}>
        <Card>
            <Card.Content>
                <View style = {{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Text>{item.name}</Text>
                    <></>
                </View>
            </Card.Content>
        </Card>
        </TouchableOpacity>);
    }

    return (
        <View style={{flex: 1}}>
            <Agenda
            items={items}
            loadItemsForMonth={loadItems}
            selected={'2023-04-15'}
            theme={{
            agendaDayTextColor: 'black',
            agendaDayNumColor: 'black',
            agendaTodayColor: 'black',
            agendaKnobColor: 'black',
            selectedDayBackgroundColor: 'black',
            dotColor: 'gray'
        }}
        renderItem= {renderItem}
        />
        </View>
    );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
