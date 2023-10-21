import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles, { COLORS } from '../../../styles'
// import Navigate from '../../../middleware/navigate'
import images from '../../../constants/gallery'
import { useNavigation } from '@react-navigation/native'
import {URL} from '@env'

export default function Create() {

  // console.log(name)
  console.log('count create')
  
  const navigation = useNavigation();

   
  // let [count, setCount] = useState(0)

  // count++

  // console.log('Create Times : ' + count)
  // setCount(count)

  const bind = {
    "text" : "Click Here...",
    "page" : "register"
  }

  // console.log({...styles.coverWall, ...styles.body})
  return (
    <View style = { { ...styles.verticalWall } }>
      <Image source = { { uri :  URL + '/' + images.home[2].img }} style = { {  ...styles.imageCenter }} />
      <Text style = { styles.h1 }>We secure your job application</Text>
      <Text style = { styles.h2 }>Sign up. Click below :</Text>
      {/* <Navigate data = { bind }/> */}
      <TouchableOpacity
          onPress={ () => navigation.navigate(bind.page) }
          
      >
        <Text style = { styles.a }>{ bind.text }</Text>          
      </TouchableOpacity>
    </View>
  )
} 