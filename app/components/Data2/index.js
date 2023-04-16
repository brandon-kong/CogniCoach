import React from 'react'
import { LinearGradient, Stop, Defs } from 'react-native-svg'
import { BarChart, Grid , XAxis, YAxis} from 'react-native-svg-charts'
import { View } from 'react-native'

class GradientBar extends React.PureComponent {

    render() {
        const { data } = this.props;

        const Gradient = () => (
            <Defs key={'gradient'}>
                <LinearGradient id={'gradient'} x1={'0%'} y={'0%'} x2={'0%'} y2={'100%'}>
                    <Stop offset={'0%'} stopColor={'rgb(134, 65, 244)'}/>
                    <Stop offset={'100%'} stopColor={'rgb(66, 194, 244)'}/>
                </LinearGradient>
            </Defs>
        )

        return (
            <View>
                {/* <XAxis 
                    // style={{height:200, width:'8%'}}
                    data={data}
                    contentInset={{ top: 20, bottom: 20 }}
                    svg={{
                        fill: 'grey',
                        fontSize: 10,
                    }}
                    numberOfTicks={5}
                    // formatLabel={(value) => `${value}`}
                /> */}
                <BarChart
                    style={ { height: 200 } }
                    data={ data }
                    contentInset={ { top: 20, bottom: 20 } }
                    svg={ {
                        strokeWidth: 2,
                        fill: 'url(#gradient)',
                    } }
                >
                    <Grid/>
                    <Gradient/>
                </BarChart>
            </View>
            
        )
    }

}

export default GradientBar

// import React from 'react'
// import { View } from 'react-native'
// import { BarChart, Grid, YAxis } from 'react-native-svg-charts'
// import * as scale from 'd3-scale'

// class GradientBar extends React.PureComponent {

//     render() {

//         const data = [
//             {
//                 value: 50,
//                 label: 'One',
//             },
//             {
//                 value: 10,
//                 label: 'Two',
//             },
//             {
//                 value: 40,
//                 label: 'Three',
//             },
//             {
//                 value: 95,
//                 label: 'Four',
//             },
//             {
//                 value: 85,
//                 label: 'Five',
//             },
//         ]


//         return (
//             <View style={{ flexDirection: 'row', height: 200, paddingVertical: 15 }}>
//                 <YAxis
//                     style={{height:200, width:'3%'}}
//                     // data={['A', 'B', 'C', 'D', 'E']}
//                     data={data}
//                     yAccessor={({ index }) => index}
//                     scale={scale.scaleBand}
//                     contentInset={{ top: 10, bottom: 10 }}
//                     // spacing={0.2}
//                     formatLabel={(_, index) => data[ index ].label}
//                     // formatLabel={(value) => `${value}`}
//                 />
//                 {/* <YAxis style={{height:200, width:'2%'}}
//                     data={data}
//                     contentInset={{ top: 10, bottom: 10 }}
//                     svg={{
//                         fill: 'grey',
//                         fontSize: 10,
//                     }}
//                     numberOfTicks={5}
//                     formatLabel={(_, index) => data[ index ].label}
//                 /> */}
//                 <BarChart
//                     style={{ flex: 1, marginLeft: 8 }}
//                     data={data}
//                     horizontal={true}
//                     yAccessor={({ item }) => item.value}
//                     svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
//                     contentInset={{ top: 10, bottom: 10 }}
//                     spacing={0.2}
//                     gridMin={0}
//                 >
//                     <Grid direction={Grid.Direction.VERTICAL}/>
//                 </BarChart>
//             </View>
//         )
//     }

// }

// export default GradientBar