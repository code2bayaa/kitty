import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles, {COLORS} from './../../../styles'


export default function Employer({ changePage, signOut }) {
  return (
    <View style = {[styles.mediumWall ]}>
      <TouchableWithoutFeedback style = {styles.inputBox} onPress = {() => changeEmployer('profile')}>
        <Text style = {[styles.h2, { color : COLORS.white }]}>Profile</Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback style = {styles.inputBox} onPress = {() => changeEmployer('create')}>
        <Text style = {[styles.h2, { color : COLORS.white }]}>Create</Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback style = {styles.inputBox} onPress = {() => changeEmployer('jobs')}>
        <Text style = {[styles.h2, { color : COLORS.white }]}>Jobs</Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback style = {styles.inputBox} onPress = {() => changeEmployer('delete')}>
        <Text style = {[styles.h2, { color : COLORS.white }]}>Delete Account</Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback style = {styles.inputBox} onPress = {signOut}>
        <Text style = {[styles.h2, { color : COLORS.white }]}>SignOut</Text>
      </TouchableWithoutFeedback>
    </View>
  )
}