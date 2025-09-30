import React, { useState } from 'react';
import { View, Image, } from 'react-native'
import styles from '../../../styles'

import Swiper from 'react-native-swiper'

export default function Slider(){

    const [ data, setData ] = useState([])

    setData( data => {
        return [
            {
                img : 'http://localhost/jobs/image/image.jpeg',
                name : 'first'
            },
            {
                img : 'http://localhost/jobs/image/image.webp',
                name : 'second'
            },
            {
                img : 'http://localhost/jobs/image/image2.jpg',
                name : 'third'
            },
            {
                img : 'http://localhost/jobs/image/image2.webp',
                name : 'fourth'
            },
            {
                img : 'http://localhost/jobs/image/image3.jpg',
                name : 'fifth'
            }
            
        ]
    })
    return (
        <View>  
            <Swiper showsButton = {true} autoplay = {true} autoplayTimeout = {2.5} style = {styles.wall}>
                {
                    data.map( cover => {
                        <View style = { styles.coverWall }>
                            <Image style = { styles.coverWall } source = { { uri : cover.img }} />
                        </View>
                    })
                }
            </Swiper>
        </View>
    )
}