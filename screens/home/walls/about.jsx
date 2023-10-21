import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from '../../../styles'
import images from '../../../constants/gallery'
import { URL } from '@env'

// import Banner from '../../../middleware/banner'

export default function About() {
  return (
    <View style = { { ...styles.mediumWall, ...styles.center } }>

      <Image source = { { uri :  URL + '/' + images.logo }} style = { { height : 100, width : 100 }} />
      <Text style = { styles.h1 }>About Us.</Text>
      {/* <Text style = { styles.h2 }>Welcome to Careers Kitty</Text> */}
      {/* <Banner /> */}
      <Text style = { styles.p }>
        Through the years 2017 to 2022, a lot has been experienced countrywide by the youth both in the job market as well as employment industry from new challenges during employment to employment systems to all manner of solutions coming up targeting the unemployment problem within the country.
        As a graduand who birthed Careers’ Spot, I came across a number of challenges while navigating the ups & downs of unemployment as I dealt with immediate job unavailability right after graduation from college. With skills to be polished as a result of less experience in my field of study (Information Technology), scoring an opportunity at locking a job was always coming short for me & the only solution I had was to cut down on a particular niche, which was system development.
        Courtesy of my 3-month attachment, I managed to semi-polish myself on website design & development and mobile application development as I saw the opportunity to create a solution for the unemployed lot of youth out there with just enabling them to get a job mainly through their niches. The advantage is that when the employees cut down to their more naturally in-tuned skills, chances of excellence are particularly at peak, as opposed to having to build up on other skills. This knowledge is what assisted me, and thus I took time to put focus and concentrate on the foundation elements of Careers’ Spot (both website and mobile application development).
        The system you use here at Careers’ Spot, either as a job seeker (like us) is meant to assist you in every way to find your particular job either as a permanent worker or as a freelancer or as a potential employer, a potential employee who suits the needs of your business to the smallest bits of detail. My particular wishes are that this system helps you get rid of your situation in the employment and job market. 
        For any enquiries or suggestions as such, please send your messages to the relevant team using their specific email address.
        Good luck.
      </Text>
    
    </View>
  )
}