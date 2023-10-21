import React, { Component, useRef } from 'react';
import { Animated, View, ImageBackground, Image, Text, Easing } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

import images from '../constants/gallery'
import styles from '../styles'
import FadedText from '../screens/home/walls/fadedText'
import { URL } from '@env'

class ImageFader extends Component {
    
    constructor(props) {
      super(props);
  
      // this.fadeAnim = useRef(new Animated.Value(1)).current; // Initial value for opacity: 1
      // this.currentIndex = useRef(0);

      this.state = {
        fadeAnim: new Animated.Value(1), // Initialize opacity to 0 (fully transparent)
        currentIndex: 0,
      };
    }
  
    componentDidMount() {
      // console.log('component starts...')
      // Set up the interval to change images every 7 seconds
      this.interval = setInterval(this.changeImage, 7000);
    }
  
  
    componentWillUnmount() {
      // console.log('component ends...')
      // Clear the interval to prevent memory leaks
      clearInterval(this.interval);
    }
  
    changeImage = () => {
      let { currentIndex, fadeAnim } = this.state;
  
      // let currentIndex = this.currentIndex
      // Determine the next image index (cycling from 0 to 2)
      // const nextImageIndex = (currentImageIndex + 1) % 3;
  
      //Finally Here To Be Updated 3.
      let nextIndex = 0
      if(currentIndex < (images.name.length - 1))
        nextIndex = currentIndex + 1;
      // else
      //   currentIndex = 0

        // console.log('current index state' + currentIndex)
        //Then Here 2.
      // Animate the fade-out of the current image
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000, // 4 seconds. fade time for data to disappear
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(() => {
        // Update the current image index and reset opacity to 0
        this.setState((currentState) => {
          return { ...currentState, currentIndex : nextIndex }
        });

        // { key : 2, value : 'you' }

        fadeAnim.setValue(0);
        // this.currentIndex = nextIndex
        // console.log('next state ' + this.state.currentIndex)
  
        // Animate the fade-in of the next image
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 10, // 10 //fade time for data to appear fully
          easing: Easing.linear,
          useNativeDriver: true,
        }).start();
      });
    };


    //Starts Here 1.
    render() {
      const { fadeAnim, currentIndex } = this.state;
  
      // console.log('render fade ' + fadeAnim)
      // console.log(images.name[currentIndex].img)
      // console.log('currentIndex' + currentIndex)
      // const images = [
      //   require('./image1.jpg'),
      //   require('./image2.jpg'),
      //   require('./image3.jpg'),
      // ];
  
      // Pass the currentImageIndex to the callback prop
      // this.props.onStateChange(currentImageIndex);
  
      // console.log(images.name[currentIndex].img)
      return (
        <View style = {{...styles.wall}}>
          <ImageBackground
              source = { { uri : URL + '/' + images.name[currentIndex].img }}
              style={ { ...styles.coverWall } }
          >
            <LinearGradient
              colors={['rgba(0,0,0,0.8)', 'rgba(0,0,0,0.4)','rgba(0,0,0,0.85)']} // Define your gradient colors
              style={{...styles.wall}}
            >
              <Animated.View
                style={{
                  opacity: fadeAnim
                }}
              >

                <FadedText indexText = { currentIndex } />
              </Animated.View>
            </LinearGradient>
          </ImageBackground>
        </View>
        
      );
    }
  }

  export default ImageFader