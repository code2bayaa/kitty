import { View, Text } from 'react-native'
import React from 'react'
import styles, { COLORS } from '../../../styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { faLocationArrow, faEnvelope, faVolumeControlPhone }  from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  console.log('contact here..')
  return (
    <View style = { {...styles.verticalWall, marginTop : '15%' } } >
      <Text style = { { ...styles.h1 }}>Contact Us</Text>
      <View style = { { ...styles.verticalWall} }>
        <View style = { { ...styles.centerStandardWall, ...styles.border, ...styles.center } }>
            <FontAwesomeIcon icon = { faLocationArrow } size = {30} color={COLORS.gray} />
            <Text style = { styles.h2 }>Address</Text >
            <Text style = { styles.p }>Ground floor, room 105, Allimex Plaza, Mombasa Road, Nairobi</Text>
        </View>
        <View style = { { ...styles.centerStandardWall, ...styles.border, ...styles.center, marginLeft : 50 } }>
            <FontAwesomeIcon icon = { faEnvelope } size = {30} color={COLORS.gray} />
            <Text style = { styles.h2 }>Email</Text >
            <Text style = { styles.p }>admin@careerspot.co.ke</Text>
            <Text style = { styles.p }>reception@careerspot.co.ke</Text>
        </View>
        <View style = { { ...styles.centerStandardWall, ...styles.border, ...styles.center, marginLeft : 90  } }>
            <FontAwesomeIcon icon = { faVolumeControlPhone } size = {30} color={COLORS.gray} />
            <Text style = { styles.h2 }>Phone Number</Text >
            <Text style = { styles.p }>+254 743 234567</Text>
            <Text style = { styles.p }>+254 790 453627</Text>
        </View>
      </View>
      <View style = {{ ...styles.horizontalWallFlat}}>
        <FontAwesomeIcon icon = { faFacebook } size = {30} color={COLORS.gray} />
        <FontAwesomeIcon icon = { faTwitter } size = {30} color={COLORS.gray} />
        <FontAwesomeIcon icon = { faInstagram } size = {30} color={COLORS.gray} />
      </View>
    </View>
  )
}

export default Contact 