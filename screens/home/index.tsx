import { 
    ScrollView,
     View,
      Text,
       SafeAreaView,
        StatusBar,
         ImageBackgroundComponent
         } from 'react-native'
         
import React, { useState } from 'react'
// import type {StatusBarStyle} from 'react-native';


import Create from './walls/create'
import Welcome from './walls/welcome'
import About from './walls/about'
import Contact from './walls/contact'

import styles from '../../styles'

const Home = () => {

    // const STYLES = ['default', 'dark-content', 'light-content'] as const;
    // const TRANSITIONS = ['fade', 'slide', 'none'] as const;

    // let [count, setCount] = useState(0)

    // console.log('How many times : ' + count)
    // count++

    // setCount(count)

    return (
        <SafeAreaView>
            <ScrollView style = {{...styles.body, ...styles.wall }}>
                <StatusBar
                    animated={true}
                    backgroundColor="#61dafb"
                    barStyle='default'
                    showHideTransition="slide"
                    hidden={true}
                />
                {/* <View style = { { ...styles.body, ...styles.center } }> */}
                    <Welcome/>
                    {/* <Text style = {{ color : "#000" }}>HEY</Text> */}
                    <Create />
                    <About/>
                    <Contact/>
                    {/* <Text style = {{ color : "#000" }}>HEY</Text> */}
                {/* </View> */}
            </ScrollView>
        </SafeAreaView>
    )
}
export default Home