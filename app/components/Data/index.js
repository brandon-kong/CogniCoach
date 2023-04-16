import React from 'react'
import { AreaChart, Grid, XAxis, YAxis } from 'react-native-svg-charts'
import { Defs, LinearGradient, Stop } from 'react-native-svg'
import { View } from 'react-native'

class GradientChart extends React.PureComponent {
    render() {
        const { data } = this.props;
        const axesSvg = { fontSize: 5, fill: 'grey' };
        const verticalContentInset = { top: 5, bottom: 5 };

        const Gradient = ({ index }) => (
            <Defs key={index}>
                <LinearGradient id={'gradient'} x1={'0%'} y1={'0%'} x2={'0%'} y2={'100%'}>
                    <Stop offset={'0%'} stopColor={'rgb(134, 65, 244)'} stopOpacity={0.8}/>
                    <Stop offset={'100%'} stopColor={'rgb(134, 65, 244)'} stopOpacity={0.2}/>
                </LinearGradient>
            </Defs>
        )

        return (
            <View style={{display:'flex', flexDirection:'row'}}>
                <YAxis style={{height:200, width:'8%'}}
                    data={data}
                    contentInset={{ top: 10, bottom: 10 }}
                    svg={{
                        fill: 'grey',
                        fontSize: 10,
                    }}
                    numberOfTicks={5}
                    formatLabel={(value) => `${value}`}
                />
                <AreaChart
                    style={{ height: 200 , width: 310}}
                    data={data}
                    contentInset={{ top: 20, bottom: 20 }}
                    svg={{ fill: 'url(#gradient)' }}
                    
                >

                    <Grid/>
                    <Gradient/>
                </AreaChart>
            </View>
        )
    }

}

export default GradientChart