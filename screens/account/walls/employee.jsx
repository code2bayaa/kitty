import { View, Text, TouchableWithoutFeedback, TouchableOpacity  } from 'react-native'
import React from 'react'
import styles, {COLORS} from './../../../styles'

export default function Employee({ changePage, signOut }) {
  return (
    <View style = {[styles.mediumWall ]}>
      <TouchableOpacity style = {[styles.inputBox]} onPress = {() => {changePage('profile')}}>
        <Text style = {[styles.h2, { color : COLORS.white }, styles.inputTransparent]}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.inputBox} onPress = {() => {changePage('applications')}}>
        <Text style = {[styles.h2, { color : COLORS.white }, styles.inputTransparent]}>Your Applications</Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.inputBox} onPress = {() => { changePage('delete')}}>
        <Text style = {[styles.h2, { color : COLORS.white }, styles.inputTransparent]}>Delete Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.inputBox} onPress = {signOut}>
        <Text style = {[styles.h2, { color : COLORS.white }, styles.inputTransparent]}>SignOut</Text>
      </TouchableOpacity>
    </View>
  )
}