import { useState, useRef, createRef, useEffect, useCallback } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  Image
} from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native'
import RNModal from 'react-native-modal'
import LinearGradient from 'react-native-linear-gradient';


import styles, { COLORS } from '../../styles'
import images from '../../constants/gallery'
import useFetch from '../../hooks/useFetch';
import useSession from '../../hooks/useSession';
import Bounce from './../../middleware/bounce'
import { URL } from '@env'

export default function SignIn() {

  // const emailRef = useRef()
  // const passwordRef = useRef()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  // const [go, setGo] = useState(false)
  // const [login, setLogin] = useState(false)
  const [ feedback, setFeedback ] = useState('')

  const [modal, setModal] = useState(false)

  const [toggleOne, setToggleOne] = useState(false)
  const [toggleTwo, setToggleTwo] = useState(false)

  const bounceOne = createRef();
  const bounceTwo = createRef();

  const navigation = useNavigation()
  const pressNav = (page) => {
  
    console.log('go to :' + page)
    navigation.navigate(page)
  }

    // useEffect(() => {
      // const { data } = useCallback(
      //   []
      // )
  const { data, loading, fetchData } = useFetch()

  const { logIn, updateSession } = useSession()
  
  // console.log(data)
    // },[email,password]
    // )
    
    
  
  const handleLogin = () => {
    // const email = emailRef.current.value
    // const password = passwordRef.current.value

    // console.log(email)

    
    if (!email || !password) {
      setError('Please fill in all fields.');
    } else {

      setFeedback('starting...')
      // setGo(true)
      // console.log(email)
      // console.log(password)
      // setLogin(true)
      // console.log(enter)
      fetchData(
        { 
          method : 'POST',
          url : `${ URL }/jobs/php/index.php`,
          query : JSON.stringify({ 'login' : true, 'email' : email, 'password' : password })
        }
      )

      if(loading)
        setFeedback('loading...')
      else
        setFeedback('just a moment...')
      
        console.log(data)
      if(data && data.identity){

        setFeedback(data.feedback)

        updateSession()
        // console.log(logIn)
        // setTimeout(() => {         
        //   pressNav('account')
        // },2000)
               
      }else{
        setError(error + ' Try again') 
      }  
      // Perform your login logic here, e.g., send data to a server.
      // If successful, navigate to another screen.
      // setModal(true)
      // useEffect(() => {
        // console.log(email)
// x          console.log(data)
          // sessionStorage.setItem('user',data.admin)
          // setModal(false)
          // if(data.identity){
            
          //   const login = useSession()
          //   console.log(login)
          //   pressNav('account')       
          // }else{
          //   setError(error + ' Try again') 
          // }        
      //   },
      //   [email,password]
      // )
      
      // if(data)

      // setModal(false)
      // useCallback(
      //   () => {

      //   },
      //   []
      // )
    
      
    }
  };
  
  const validateEmail = (text) => {

    if(!text){
      bounceOne.current.updateText(toggleOne)
      setToggleOne(false)
    }else if(text && !toggleOne){
      bounceOne.current.updateText(toggleOne)
      setToggleOne(true)                  
    }

    if(!(/\S+@\S+\.\S+/.test(text))){
      // emailRef.current.value = ""
      // console.log('validating...')
      // setError(() => 'wrong email format')
        setError('wrong email format.');
        setEmail('')
    }else{
      setError('');
      
    }
    setEmail(text)
    // moveBounce(text,"EMAIL")
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <RNModal
          isVisible = {modal}
        >
          <View style = {{...styles.mediumWall, ...styles.shadow}}>
            <Image source = { { uri :  images.home[3].img }} style = { {  ...styles.imageCenter }} />
          </View>
        
        </RNModal>
        <View style={styles.bigCircle}></View>
        <View style={styles.smallCircle}></View>
        <View style={styles.centerizedView}>
          <View style={styles.authBox}>
            { feedback ? <Text>{feedback}</Text> : ''}
            <View style={{ ...styles.logoBox, ...styles.center  }}>
              {/* <Icon
                color='#fff'
                name='comments'
                type='font-awesome'
                size={50}
              />
               */}
               <Image source = { { uri :  images.pin }} style = { {  ...styles.coverWall, borderRadius : 1000, ...styles.shadow }} />
            </View>
            <Text style={styles.loginTitleText}>Kitty Login</Text>
            <View style={styles.hr}></View>
            <View style={styles.inputBox}>
              <Bounce style={{ ...styles.p, color : COLORS.gray }} text = "EMAIL"  ref={bounceOne}/>
              <TextInput
                style={{ ...styles.inputTransparent, backgroundColor : '#dfe4ea' }}
                // autoCapitalize={false}
                keyboardType='email-address'
                textContentType='emailAddress'
                // value = {email}
                onChangeText = {(text) => validateEmail(text)}
                // value = {email}
              />
            </View>
            <View style={styles.inputBox}>
              <Bounce style={{ ...styles.p, color : COLORS.gray }} text = "PASSWORD"  ref={bounceTwo}/>
              <TextInput
                style={{ ...styles.inputTransparent, backgroundColor : '#dfe4ea'}}
                // autoCapitalize={false}
                secureTextEntry={true}
                textContentType='password'
                // ref = {passwordRef}
                // value = {password}
                onChangeText = {(text) => {
                  if(!text){
                    bounceTwo.current.updateText(toggleTwo)
                    setToggleTwo(false)
                  }else if(text && !toggleTwo){
                    bounceTwo.current.updateText(toggleTwo)
                    setToggleTwo(true)
                  }  
                  setPassword(text)                                                          

                }}
              />
            </View>
            <View>
              {error ? <Text style={styles.danger}>{error}</Text> : null}
            </View>
            <View>
              <LinearGradient colors={['#FF4B2B', '#FF4B2B', '#FF416C']} style={{ ...styles.loginMain, ...styles.center }}>
                <TouchableOpacity onPress = {handleLogin}>
                  <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
            <View>
              <Text 
                  style={styles.registerText}
              >
                Don't have an account?
              </Text>
            </View>
            <View>
              <TouchableWithoutFeedback onPress={ () => pressNav("create") }>
                <Text style = {styles.a} >Register Now</Text>
                
              </TouchableWithoutFeedback>
            </View>
            <View>
              <TouchableOpacity onPress={ () => pressNav('forgot')}>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

