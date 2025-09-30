import { View, Text, ImageBackground, Image, ScrollView, TextInput } from 'react-native'
import React, {useCallback, useMemo, useEffect, useState, useLayoutEffect} from 'react'
import DocumentPicker from 'react-native-document-picker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMedal  } from '@fortawesome/free-solid-svg-icons';

import styles, { COLORS } from './../../styles'
import images from '../../constants/gallery';
import useFetch from '../../hooks/useFetch';
import { URL } from '@env'
import { Button } from 'react-native-elements';

const Profile  = ({ plotProfile }) => {

  // console.log(ref)
  const {loading, error, fetchData } = useFetch()

  const [data, setData] = useState({})
  // const [feedback, setFeedback] = useState([])
  // async function go(){

  // }

  const changeData = (data) => {
    console.log('here...')
    setData(data)
  }

  useLayoutEffect(() => {
    async function go(){
      changeData(await fetchData(
        { 
          method : 'POST',
          url : `${ URL }/jobs/php/index.php`,
          query : JSON.stringify({ 'profile' : true })
        }
      )) 
    }
    go()
  }, [fetchData])

  // data.users.map(d => {
  //   console.log(d.name)
  // })

  // console.log(data)

  // const createObj = (key, value) => {
  //     <View>
  //       <Text style = {styles.h2}>{ key }</Text>
  //       <Text style = {styles.p}>{ value }</Text>
  //     </View>
  // }

  // const moreData = (more) => {

  // }



    // return profile.map( profile__ => {

    //   const keys = Object.keys(profile__)
    //   const values = object.values(profile__)

    //   values.
    //    return <View key = {profile.name} id = {profile.name}>
    //     <Text style = {[styles.h2]}>Name</Text>
    //     <Text style = {styles.p}>{ profile.name }</Text>
    //   </View>      
    // })

  // const check_profile = () => {
  //   // console.log('data')
  //   const all_plots = []
  //   if((data && data.hasOwnProperty('users'))){
  //     const profile = data.users[0]

  //     return all_plots
  //   }else
  //     return false
  // }

  // const goWith = check_profile()
  // console.log(feedback)
  // setFeedback(goWith)
  return (
    // <ScrollView style = {[styles.wall, {color : COLORS.common, padding : 0, flex : 1}]}>
      <View style = {[styles.coverWall,styles.center, styles.horizontalWallDisplay]}>
        <Image
          source = {{ uri : URL + '/' + images.profile }}
          style = {[{ padding : 0, height : 100, width : 380, margin : 0, objectFit : 'cover', left : - 15  } ]}
        />
        {/* <View style = {[styles.center, styles.wall, styles.horizontalWallDisplay]}> */}
          {
            (data && data.hasOwnProperty('users')) ?
             plotProfile(data.users[0])
            :
              <Text style = {styles.p}>No Data</Text>
          }
        {/* </View> */}
      </View>
    // </ScrollView>
  )
}

export default Profile