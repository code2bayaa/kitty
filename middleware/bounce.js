import React, { Component } from 'react';
import { Animated, View, Text, Easing } from 'react-native'
import styles, { COLORS } from '../styles'


class Bounce extends Component {
    
    constructor(props) {
      super(props);
  
      // this.fadeAnim = useRef(new Animated.Value(1)).current; // Initial value for opacity: 1
      // this.currentIndex = useRef(0);

      this.state = {
        bounceAnim : new Animated.Value(0),
        start : 0,
        end : -40
        // text : true,
        // motion : false,
        // prevProps : true 
      };
    }
  
    // componentDidUpdate(prevProps) {
    //     // if (this.props.text !== prevProps.text) {
    //     //     this.startBounce();
    //     // }
    //     console.log(prevProps)
    //     // this.updatePrev(prevProps)

    // }

    // updatePrev = (prevProps) => {
    //     this.setState( state => {
    //         return { ...state, prevProps }
    //     })
    // }
    // componentDidMount() {
      
    //   // Set up the interval to change images every 2 seconds
    //     //   this.interval = setInterval(this.changeImage, 7000);
    //     console.log(this.props)
    //     if(this.props.text){ //IF there is text prop

    //         if(!this.state.text){ //AND position is at LOW...go UP
    //             console.log('bounce component starts from low...')
    //             // this.startBounce()
    //             this.setState( state => {
    //                 return { ...state, text : true, start : 0, end : -100 }
    //             })
    //         }
            
    //     }else{ //IF No text
    //         if(this.state.text && this.state.motion){ //AND position is at 
    //             console.log('bounce component starts from high...')

    //             this.setState( state => {
    //                 return { ...state, text : false, start : -100, end : 0 }
    //             })
    //         }
    //     }
    //     // this.startBounce()
            
    // }
  
    // componentWillUnmount() {
    //   console.log('bounce component ends...')
    //   // Clear the interval to prevent memory leaks
    //     //   clearInterval(this.interval);
    // }
  
    updateText = (point) => {

        if(point){
            this.setState( state => {
                return { ...state, point, start : 0, end : -40 }
            })
        }else{
            this.setState( state => {
                return { ...state, point, start : -40, end : 0 }
            })
        }
        this.startBounce()
        // console.log('id ' + id)
        // if(this.props.text === id){
            // let figure = (text) ? { start : 0, end : -20 } : { start : -20, end : 0 }
            
            // this.state.bounceAnim.setValue(figure.start)

            // console.log(figure)
            // this.setState( state => {
            //     return { ...state, text, start : figure.start, end : figure.end }
            // })
            // let { bounceAnim } = this.state
            // bounceAnim.setValue(-100)

            // this.setState( state => {
            //     return { ...state, bounceAnim }
            // })
            // console.log('previous ' + this.state.prevProps)
            // if (text !== this.state.prevProps) {
            //     if(text){ //IF there is text prop

            //         if(!this.state.text){ //AND position is at LOW...go UP
            //             console.log('bounce component update starts from low...')
            //             // this.startBounce()
            //             this.setState( state => {
            //                 return { ...state, text : true, start : 0, end : -100 }
            //             })
            //         }
                    
            //     }else{ //IF No text
            //         if(this.state.text && this.state.motion){ //AND position is at 
            //             console.log('bounce component update starts from high...')
        
            //             this.setState( state => {
            //                 return { ...state, text : false, start : -100, end : 0 }
            //             })
            //         }
            //     }
            //     this.startBounce()
            // }
            // if(text){
            //     this.setState( state => {
            //         return { ...state, text : true, start : 0, end : -100 }
            //     })
            //     this.startBounce()
            // }else{

            // }
                
        // }
    }

    startBounce = () => {
      let { end, bounceAnim, start } = this.state;

    //   let bounceAnim = 
      
        bounceAnim.setValue(start)

        //     this.setState( state => {
        //         return { ...state, bounceAnim }
        //     })

      //   console.log(' id ' + this.props.text)
      // console.log('bounce ' + bounceAnim.log)
      // console.log('start ' + start)
      // console.log('end ' + end)
    //   if(!this.props.motion)
        // bounceAnim.setValue(end)
      // let currentIndex = this.currentIndex
      // Determine the next image index (cycling from 0 to 2)
      // const nextImageIndex = (currentImageIndex + 1) % 3;
  
      //Finally Here To Be Updated 3.
    //   let nextIndex = 0
    //   if(currentIndex < (images.name.length - 1))
    //     nextIndex = currentIndex + 1;
    //   // else
    //   //   currentIndex = 0

    //     console.log('current index state' + currentIndex)
        //Then Here 2.
      // Animate the fade-out of the current image
        // Animated.sequence([
        //     Animated.spring(bounceAnim, {
        //         toValue: end,
        //         // duration: 1000, // 4 seconds. fade time for data to disappear
        //         // easing: Easing.linear,
        //         useNativeDriver: false,
        //         velocity: 2, // Initial velocity for return bounce
        //         tension: 2,
        //         friction: 3,
        //     }),
        //     Animated.spring(bounceAnim, {
        //         toValue: start, // Back to the original position
        //         velocity: 2, // Initial velocity for return bounce
        //         tension: 2,
        //         friction: 3,
        //         useNativeDriver: false,
        //       }),
        // ]).start();
        Animated.timing(bounceAnim, {
            toValue: end,
            duration: 500, // 4 seconds. fade time for data to disappear
            easing: Easing.linear,
            useNativeDriver: true,
          }).start();
    };


    //Starts Here 1.
    render() {
      const { bounceAnim, start, end, motion } = this.state;
  
      // console.log('here' + motion)
      // console.log('start ' + start)
      // console.log('end ' + end)
    //   console.log(images.name[currentIndex].img)
    //   console.log('currentIndex' + currentIndex)
      // const images = [
      //   require('./image1.jpg'),
      //   require('./image2.jpg'),
      //   require('./image3.jpg'),
      // ];
  
      // Pass the currentImageIndex to the callback prop
      // this.props.onStateChange(currentImageIndex);
  
      return (
        <View>
            <Animated.View
                style={{
                    transform: [{ translateY: bounceAnim }],
                    ...styles.inputLabel
                    
                }}
            >

            <Text style = {this.props.style}>
                { this.props.text }
            </Text>
            </Animated.View>
        </View>
        
      );
    }
  }

  export default Bounce