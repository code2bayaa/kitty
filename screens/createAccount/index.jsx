import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image,
  Text,
  ToastAndroid
} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faClipboard, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import RNModal from 'react-native-modal'

import styles, { COLORS } from '../../styles'
import Employers from './walls/employers';
import Employee from './walls/employee'
import images from '../../constants/gallery'
import { URL } from '@env'
// import useLazy from '../../hooks/useLazy';

export default function App() {

  
  const [modal, setModal] = useState(false)

  // const [calculator, setCalculator] = useState(0)

  

  // const changeCalculator = () => {
  //   setCalculator(2)
  // }

  // return (
  //   <View>
  //     <Text>{ calculator }</Text>
  //     <Button onPress = {changeCalculator}>Click</Button>
  //   </View>
  // )

  //init modal === false
  //change modal, call setModal
  // setModal(true) || modal === true
  const navigation = useNavigation()

  const pressNav = (page) => {
    
    console.log('go to :' + page)
    navigation.navigate(page)
  }

  const [userData] = useState([
    {
      component: <Employee setModal = {setModal} pressNav = {pressNav}/>,
      name: 'Employee',
    },
    {
      component: <Employers setModal = {setModal} pressNav = {pressNav}/>,
      name: 'Employer',
    },
  ]);
   
  // console.log('error ' + error) WORKS***

  // useEffect(() => {
  //   console.log('error two' + error) WORKS***
  // }, [error])

  const carouselRef = useRef(null);

  const [employeeCon, setEmployeeCon] = useState({ size : 30, color : COLORS.theme})
  const [employeeText, setEmployeeText] = useState({...styles.h2, color : COLORS.theme})

  const [employerCon, setEmployerCon] = useState({ size : 20, color : COLORS.white})
  const [employerText, setEmployerText] = useState({...styles.h2, color : COLORS.white})

  const [toggle, setToggle] = useState(true)
  
  const renderCustomButton = (text, icon, onPress) => (
    <TouchableWithoutFeedback style={styles.loginButton} onPress={onPress}>
      <View style = {styles.center}>
        { (icon) ? <FontAwesomeIcon icon = { faClipboard } size = { employeeCon.size } color = { employeeCon.color } /> : <FontAwesomeIcon icon = { faBriefcase } size = { employerCon.size } color = { employerCon.color } /> }
        { (icon) ? <Text style={employeeText}>{text}</Text> : <Text style={employerText}>{text}</Text> }
      </View>
    </TouchableWithoutFeedback>
  );

  const changeCarousel = (point, car) => {
    if(toggle !== point){
      if(point){
        setEmployeeCon({size : 30, color : COLORS.theme})
        setEmployeeText({...styles.h2, color : COLORS.theme})
        setEmployerCon({ size : 20, color : COLORS.white})
        setEmployerText({...styles.h2, color : COLORS.white})
        car.snapToPrev()
      }else{
        setEmployerCon({size : 30, color : COLORS.theme})
        setEmployerText({...styles.h2, color : COLORS.theme})
        setEmployeeCon({ size : 20, color : COLORS.white})
        setEmployeeText({...styles.h2, color : COLORS.white})
        car.snapToNext()
      }
      setToggle(!toggle)
      
    }else{
      ToastAndroid.show('keep calm',2000)
    }
  }

  // console.log(URL + '/' + images.home[4].img)
  
  return (
    <ScrollView style = {{ ...styles.body, ...styles.wall }}>
      <ImageBackground
        source = { { uri : URL + '/' + images.home[4].img }}
        style={ { ...styles.wall } }
      >
        <LinearGradient
          colors={['rgba(0,0,0,0.8)', 'rgba(0,0,0,0.4)','rgba(0,0,0,0.85)']} // Define your gradient colors
          style={{...styles.wall}}
        >
          <View>
            <RNModal
              isVisible = {modal}
            >
              <View style = {{...styles.mediumWall, ...styles.borderShadow}}>
                <Image source = { { uri :  URL + '/' + images.home[3].img }} style = { { ...styles.imageCenter }} />
              </View>
            
            </RNModal>
            <Carousel
              data={userData}
              layout='default'
              loop={true}
              ref = {carouselRef}
              inactiveSlideScale={1}
              inactiveSlideOpacity={0.75}
              renderItem={({ item }) => {
                return (
                  <TouchableWithoutFeedback
                    onPress={() => {
                      Alert.alert(item.name);
                    }}
                  >
                    <View style={styles.coverWall}>
                      { item.component }

                    </View>
                  </TouchableWithoutFeedback>
                );
              }}
              sliderWidth={400}
              itemWidth={400}
            />
          <View style = {{ top : '-28%', width : '100%'}}>
            <Text 
                style={{...styles.p, color : COLORS.white }}
            >
              Already have an account?
            </Text>
            <TouchableWithoutFeedback onPress={ () => pressNav("signIn") }>
              <Text style = {styles.a} >Sign In</Text>
            </TouchableWithoutFeedback>
            <Text 
                style={{...styles.p, color : COLORS.white }}
            >
              Forgotten Credentials?
            </Text>
            <TouchableOpacity onPress={ () => pressNav('forgot')}>
              <Text style={styles.a}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
            {/* <Pagination
              dotsLength={2}
              activeDotIndex={1}
              carouselRef={carouselRef}
              dotStyle={styles.paginationDot}
              inactiveDotStyle={styles.paginationInactiveDot}
              inactiveDotOpacity={0.6}
              inactiveDotScale={0.8}
            /> */}
            <View style={{ ...styles.horizontalWallFlat, flexDirection : 'row', gap : 20, height : 50, ...styles.center, top : '-50%'}}>
              {renderCustomButton(userData[0].name, true, () => changeCarousel(true,carouselRef.current))}
              {renderCustomButton(userData[1].name, false, () => changeCarousel(false,carouselRef.current))}
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </ScrollView>
  )
}
