import React, { Component, TouchableOpacity } from 'react'
// import { withNavigation } from 'react-navigation';
import { useNavigation } from '@react-navigation/native'
import styles from '../styles'

class Navigate extends Component{

    constructor(props){
        super(props)
        // this.navigation = useNavigation();
    }

    componentDidMount() {
        console.log('navigate component starts...')
        // Set up the interval to change images every 2 seconds
        // this.interval = setInterval(this.changeImage, 7000);
    }a
    
    componentWillUnmount() {
        console.log('navigate component ends...')
        // Clear the interval to prevent memory leaks
        // clearInterval(this.interval);
    }

    navigate = (page) => {

        const navigation = useNavigation();

        navigation.navigate(page) 
    }

    render(){
        // this.props.navigate(page)

        const { text, page } = this.props.data
        
        return (
            // <View>
                <TouchableOpacity
                    onPress={this.navigate(page)}
                    style = { styles.a }
                >
                    { text }
                </TouchableOpacity>
            // </View>
          
        )
    }
    
}

export default Navigate