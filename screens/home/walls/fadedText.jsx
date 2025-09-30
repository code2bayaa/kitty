import { View, Text } from 'react-native'
import React, { useState } from 'react'
import styles, { COLORS } from '../../../styles'

export default function FadedText({ indexText }) {

    const [ text, setText ] = useState([
        {
            'textOne' : "Welcome to Career's Kitty",
            "textTwo" : "The number 1 platform in job search."
        },
        {
            "textOne" : "We are the experts in finding dream jobs.",
            "textTwo" : "Our platform is able to hold thousands of records."
        },
        {
            "textOne" : "We are universal",
            "textTwo" : "Our platform traverses both private and public industry."
        }
    ])

    // useLayoutEffect(() => {
    //         setText([

    //         ])
    //     },
    //     [texts]
    // )

    // console.log(text[indexText].textOne)
    // console.log('index -' + indexText)
    return (
        // text.map( words => {
            <View style = { {...styles.center, ...styles.left, top : 350 } }>
                <Text style = { {...styles.h1, color : COLORS.white }}>{ text[indexText].textOne }</Text>
                <Text style = {{...styles.p , color : COLORS.white}}>{ text[indexText].textTwo }</Text>
            </View>
        // })
    )
}