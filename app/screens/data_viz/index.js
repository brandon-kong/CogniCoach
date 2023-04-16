import { StyleSheet, Text, View, Image } from 'react-native';
import Button from '../../components/Button/index';
import Data from '../../components/Data/index';
import GradientChart from '../../components/Data/index';
import { AreaChart, Grid, XAxis, YAxis } from 'react-native-svg-charts'

export default function DataViz () {
    return (
        // <View style={styles.data_viz_text}>
        //     

            
            
        // </View>
        <View style={styles.container}>
            <Text style={styles.data_viz_text}>Time to Finish Memory Game</Text>
            
        
            <GradientChart 
                data={[2,2,3,3,4,4,5,3,2,2,2,3,2,3,3,5,8,8,6,7,8,5,7,7,9,6,7,9,7,9,7,6,8,9,6,8,7,7,8,7,9,7,9,9,9,8,7,8,8,8]}>
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
        paddingHorizontal:'20%',
    }
})