import { View, Text, StyleSheet, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'


import CustomButton from '../../components/Button/index'
import Card from '../../components/Card'

export default function GameScreen () {

    const [score, setScore] = useState(0)
    const [attempts, setAttempts] = useState(0)
    const [time, setTime] = useState(0)
    const [gameStarted, setGameStarted] = useState(false)
    
    var x = 1;

    var cardsInMemory = []
    var cardsSelected = []

    function initCards () {
        while (cardsInMemory.length < 8) {
            const randomNum = Math.floor(Math.random() * 8) + 1
            if (!cardsInMemory.includes(randomNum)) {
                cardsInMemory.push(randomNum)
            }
        }

        // duplicate cards
        cardsInMemory.push(...cardsInMemory)

        // shuffle cards
        for (let i = cardsInMemory.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i)
            const temp = cardsInMemory[i]
            cardsInMemory[i] = cardsInMemory[j]
            cardsInMemory[j] = temp
        }

        // create cards
    }

    function startGame () {
        setGameStarted(true)
        // set timer

        // start timer
        while (gameStarted === true) {
            setTimeout(() => {
                setTime(time + 1)
            }, 1000)
        }

        
    }

    function cardClicked (card) {
        if (card.state.canFlip === false) return
       
        if (cardsSelected.length < 2) {
            card.showCard()
            cardsSelected.push(card)
        }
        if (cardsSelected.length === 2) {
            // check if cards match
            if (cardsSelected[0].state.value === cardsSelected[1].state.value) {
                // cards match
                console.log('is a match')

                cardsSelected[1].showCard()
                cardsSelected[0].state.canFlip = false
                cardsSelected[1].state.canFlip = false
                cardsSelected = []

                setScore(score + 1)
            } else {
                // not a match
                
                console.log('cards do not match')
                cardsSelected[0].hideCard()
                cardsSelected[1].hideCard()
                cardsSelected = []
            }
        }
    }

    const cardDict = {}

    const navigator = useNavigation()
    initCards()

    return (
        <View style={styles.container}>
            {!gameStarted && <View style={styles.game_instructions}>
                <View style={styles.game_instruction_frame}>
                    <Text style={styles.instructions_title}>Game Instructions</Text>
                    <Text style={styles.instructions_desc}>You will try to select two cards with the same symbol. </Text>
                    <CustomButton text='Start Game' onPress={() => startGame()} />
                </View>
            </View>
            }
            <View style={styles.point_view}>
                <View style={styles.top_info}>
                    <Text style={styles.score_title}>Score: {score}</Text>
                    <Text>Time Elapsed: {time}s</Text>
                </View>
                <View style={styles.top_info}>
                    <Text>Attempts: {attempts}</Text>
                </View>
            </View>
            <View style={styles.game_view}>
                <View style={styles.game_frame}>
                   
                    <Row>
                        <Card style={styles['1col']} front='' back='1' onPress={cardClicked} />
                        <Card style={styles['2col']} front='' back='8' onPress={cardClicked} />
                        <Card style={styles['3col']} front='' back='4' onPress={cardClicked} />
                        <Card style={styles['4col']} front='' back='5' onPress={cardClicked} />
                        
                    </Row>
                    <Row>
                        <Card style={styles['1col']} front='' back='7' onPress={cardClicked} />
                        <Card style={styles['2col']} front='' back='2' onPress={cardClicked} />
                        <Card style={styles['3col']} front='' back='4' onPress={cardClicked} />
                        <Card style={styles['4col']} front='' back='3' onPress={cardClicked} />
                    </Row>
                    <Row>
                        <Card style={styles['1col']} front='' back='1' onPress={cardClicked} />
                        <Card style={styles['2col']} front='' back='5' onPress={cardClicked} />
                        <Card style={styles['3col']} front='' back='7' onPress={cardClicked} />
                        <Card style={styles['4col']} front='' back='6' onPress={cardClicked} />
                    </Row>
                    <Row>
                        <Card style={styles['1col']} front='' back='3' onPress={cardClicked} />
                        <Card style={styles['2col']} front='' back='8' onPress={cardClicked} />
                        <Card style={styles['3col']} front='' back='2' onPress={cardClicked} />
                        <Card style={styles['4col']} front='' back='6' onPress={cardClicked} />
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