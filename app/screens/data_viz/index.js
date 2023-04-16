import { StyleSheet, Text, View, Image } from 'react-native';
import Button from '../../components/Button/index';
import Data from '../../components/Data/index';
import GradientChart from '../../components/Data/index';
import GradientBar from '../../components/Data2';
import { AreaChart, Grid, XAxis, YAxis } from 'react-native-svg-charts'
// import { readString } from 'react-native-csv'



export default function DataViz () {
    // const config = {
    //     delimiter: ","
    // }
    // const results = readString('AlzheimersMargaret.csv', config)
    // console.log(results)
    return (
        // <View style={styles.data_viz_text}>
        // </View>
        <View style={styles.container}>
            <Text style={styles.data_viz_text}>Minutes to Finish Memory Game</Text>
            <GradientChart 
                data={[2,2,3,3,4,4,5,3,2,2,2,3,2,3,3,5,8,8,6,7,8,5,7,7,9,6,7,9,7,9,7,6,8,9,6,8,7,7,8,7,9,7,9,9,9,8,7,8,8,8]}>
            </GradientChart>

            <Text style={styles.data_viz_text}>Average times behind on medication</Text>
            <GradientBar
                data = {[ 50, 10, 40, 95, -4, -24, 85]}
                >
            </GradientBar>

            <Text style={styles.data_viz_text}>Steps per Day</Text>
            <GradientChart 
                data={[4712,1992,2637,6559,5741,6126,6637,3268,5104,3329,2587,5236,3142,3616,3213,5427,4596,5831,5118,6937,1609,4223,2286,2007,3916,3039,4078,6107,6833,2703,6212,2577,5796,2042,5208,4067,1739,6705,1415,6405,2665,6841,4208,3713,3363,5215,4342,5938,4456,1482]}>
            </GradientChart>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        // display: 'flex',
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#fff',
        // paddingHorizontal:'10%',
        padding:'5%',
        // alignItems: 'center',
        // justifyContent: 'right',

    },

    main_img: {
        width: '100%',
        height: '30%',
        resizeMode: 'contain',
    },

    data_viz_text: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        alignItems: 'center',
        paddingVertical:'5%',
        paddingHorizontal:'10%',
    }
})