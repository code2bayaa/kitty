import { View } from 'react-native'
import React from 'react'
import ImageFader from '../../../middleware/fade'
// import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../../../styles'

export default function Fade() {
    // render() {

    // const [currentIndex, setCurrentIndex ] = useState({ currentImageIndex : 0 })

    // const handleStateChange = (currentImageIndex) => {
    //     // Update the state when ImageFader notifies a change
    //     // this.setState({ currentImageIndex });
    //     setIndex( index => { return { currentImageIndex }})
    // };

    return (
        <View style = {{  ...styles.body, ...styles.wall }}>
            <ImageFader />
        </View>
    )
    // }
}