import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Agenda } from 'react-native-calendars';


export default function personalassistant () {
    const timeToString = (time) => {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
      }
    
    const [items, setItems] = useState({});
    loadItems = (day) => {
        loadItems = (day) => {
            const items = this.state.items || {};
        
            setTimeout(() => {
              for (let i = -15; i < 85; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = timeToString(time);
                if (!items[strTime]) {
                  items[strTime] = [];
                  
                  const numItems = Math.floor(Math.random() * 3 + 1);
                  for (let j = 0; j < numItems; j++) {
                    items[strTime].push({
                      name: 'Item for ' + strTime + ' #' + j,
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
    }

    return (
        <View style={{flex: 1}}>
            <Agenda
            items={items}
            loadItemsForMonth={loadItems}
            selected={'2023-04-15'}
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