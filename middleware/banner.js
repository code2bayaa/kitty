import { View, Text, Image } from 'react-native'
import React, { Component } from 'react'
import images from '../constants/gallery'
import styles from '../styles'

class Banner extends Component{
    constructor(props){

        super(props)

        this.state = {
            currentIndex : 0
        }

    }

    componentDidMount() {
        // Set up the timeout to change images every 2 seconds
        this.timeout = setTimeout(this.changeImage, 2000);
    }
    
    componentWillUnmount() {
        // Clear the timeout to prevent memory leaks
        clearTimeout(this.timeout);
    }


    changeImage = () => {
        console.log('Start Banner..')
    }

    // this.changeImage()

    render(){
        return(
            <View style = {styles.centerStandardWall}>
                <Image 
                    source = { { uri : images.name[this.state.currentIndex].img}}
                    style = {styles.coverWall}
                />
            </View>
        )
    }
}


export default Banner