import { View, Text, StyleSheet, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'


import CustomButton from '../../components/Button/index'
import Card from '../../components/Card'

export default function GameScreen () {

    const [score, setScore] = useState(0)
    const [attempts, setAttempts] = useState(0)
    const [gameStarted, setGameStarted] = useState(false)

    const cardsInMemory = []

    function flipCard() {
        if (cardsInMemory.length < 2) {
            cardsInMemory.push(this)
        }
        if (cardsInMemory.length === 2) {
            // check if cards match
            console.log('cards match')
        }
    }

    const cardDict = {}

    const navigator = useNavigation()

    return (
        <View style={styles.container}>
            {!gameStarted && <View style={styles.game_instructions}>
                <View style={styles.game_instruction_frame}>
                    <Text style={styles.instructions_title}>Game Instructions</Text>
                    <Text style={styles.instructions_desc}>You will try to select two cards with the same symbol. </Text>
                    <CustomButton text='Start Game' onPress={() => setGameStarted(true)} />
                </View>
            </View>
            }
            <View style={styles.point_view}>
                <View style={styles.top_info}>
                    <Text style={styles.score_title}>Score: {score}</Text>
                    <Text>Time Elapsed: 10s</Text>
                </View>
                <View style={styles.top_info}>
                    <Text>Attempts: {attempts}</Text>
                </View>
            </View>
            <View style={styles.game_view}>
                <View style={styles.game_frame}>
                    <Row>
                        <Card style={styles['1col']} front='' back='2' />
                        <Card style={styles['2col']} front='' back='2' />
                        <Card style={styles['3col']} front='' back='2' />
                        <Card style={styles['4col']} front='' back='2' />
                        
                    </Row>
                    <Row>
                        <Card style={styles['1col']} front='' back='2' />
                        <Card style={styles['2col']} front='' back='2' />
                        <Card style={styles['3col']} front='' back='2' />
                        <Card style={styles['4col']} front='' back='2' />
                    </Row>
                    <Row>
                        <Card style={styles['1col']} front='' back='2' />
                        <Card style={styles['2col']} front='' back='2' />
                        <Card style={styles['3col']} front='' back='2' />
                        <Card style={styles['4col']} front='' back='2' />
                    </Row>
                    <Row>
                        <Card style={styles['1col']} front='' back='2' />
                        <Card style={styles['2col']} front='' back='2' />
                        <Card style={styles['3col']} front='' back='2' />
                        <Card style={styles['4col']} front='' back='2' />
                    </Row>
                </View>
            </View>
            <CustomButton text="Quit game" onPress={() => navigator.navigate('patient')} />
        </View>
    )
}

const Row = ({ children }) => {
    return (
        <View style={styles.row}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    game_instructions: {
        position: 'absolute',
        width: '110%',
        height: '120%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 5,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },

    game_instruction_frame: {
        width: '80%',
        height: '23%',
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 10,
        gap: 20,
        padding: 10,
    },

    instructions_title: {
        fontSize: 20,
        textAlign: 'center',
    },

    instructions_desc: {
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 20,
    },

    container: {
        flex: 1,
        display: 'flex',
        gap: 20,
        width: '100%',
        height: '100%',
        paddingVertical: 45,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
    },

    point_view: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        justifyContent: 'center',
        height: '100%',
    },

    top_info: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        
    },

    game_view: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
    },

    game_frame: {
        height: '100%',
        width: '100%',
        flex: 16,
        
    },

    point_view: {
        height: 100,
        width: '100%',
        borderRadius: 10,
        backgroundColor: '#f2f2f2',
    },

    "1col":  {
        backgroundColor:  "#f5a",
        borderColor:  "#fff",
        flex: 4,
        borderWidth:  1,
      },
      "2col":  {
        backgroundColor:  "#4bb",
        borderColor:  "#fff",
        borderWidth:  1,
        flex:  4,
      },
      "3col":  {
        backgroundColor:  "#fb5",
        borderColor:  "#fff",
        borderWidth:  1,
        flex:  4,
      },
      "4col":  {
        backgroundColor:  "#3d7",
        borderColor:  "#fff",
        borderWidth:  1,
        flex:  4,
      },

      row: {
        flexDirection: "row",
        flex: 1,
      },

        score_title: {
            fontSize: 20,
            fontWeight: 'bold',
        }

})