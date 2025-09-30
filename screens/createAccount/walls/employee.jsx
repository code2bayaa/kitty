import React, { useState, useRef, createRef  } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ToastAndroid,
  Keyboard,
  Image
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import styles, { COLORS } from '../../../styles'
import useFetch from '../../../hooks/useFetch';
import Bounce from '../../../middleware/bounce'
import { URL } from '@env'

export default Employee = ({ setModal, pressNav }) => {
  // const [email, setEmail] = useState('')
  // // const [telephone, setTelephone] = useState('')
  // const [password, setPassword] = useState('')
  // const [passwordR, setPasswordR] = useState('')
  // const [name, setName] = useState('')

  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordRRef = useRef()
  const nameRef = useRef()
  

  const { fetchData, loading } = useFetch()

  const handleSignUp = async() => {

    const email = emailRef.current.value
    const password = passwordRef.current.value //1234
    const passwordR = passwordRRef.current.value
    const name = nameRef.current.value

    if (!email  || !password || !passwordR || !name  ) {

        setError('Please fill in all fields.');
    } else {
      // Perform your login logic here, e.g., send data to a server.
      // If successful, navigate to another screen.
      
      setModal(true)

      const { success, feedback } = await fetchData({
        method : 'POST',
        query : { 'create' : true, 'name' : name, 'password' : password, 'email' : email },
        url :`${ URL }/jobs/php/index.php`
      })
            
      if(loading)
        setModal(true)
      else
        setModal(false)
      // if(data)
      console.log(feedback)
      // sessionStorage.setItem('user','employee')
      ToastAndroid.show(feedback,2000)
      if(success){
        setTimeout(() => {
          setModal(false)
          pressNav('signIn')
        }, 1000)
      }else{
        // setError(error + ' Try again')
          setError( error + ' Try again');
      }
      
    }
  };
  
  // const isValidEmail = (input) => {
  //   // You can use a regex or a library like 'validator' to validate emails and phone numbers.
  //   // For simplicity, this example uses a basic check.

  //   // telephone :  || /^[0-9]+$/.test(input);

  //   return /\S+@\S+\.\S+/.test(input)
  // };

  // const isValidTelephone = (input) => {

  //   return /^[0-9]+$/.test(input)
  // }

  const [error, setError] = useState('')

  const validateEmail = (text) => {
    // setEmail(text)
    if(!text){
      bounceTwo.current.updateText(toggleTwo)
      setToggleTwo(false)
    }else if(text && toggleTwo){
      bounceTwo.current.updateText(toggleTwo)
      setToggleTwo(true)                  
    }

    if(!(/\S+@\S+\.\S+/.test(text))){
      // emailRef.current.value = ""
      console.log('validating...')
      // setError(() => 'wrong email format')
        setError('wrong email format.');
    }else{
      setError('');
    }
    // moveBounce(text,"EMAIL")
  }

  const [toggleOne, setToggleOne] = useState(false)
  const [toggleTwo, setToggleTwo] = useState(false)
  const [toggleThree, setToggleThree] = useState(false)
  const [toggleFour, setToggleFour] = useState(false)

  const bounceOne = createRef();
  const bounceTwo = createRef();
  const bounceThree = createRef();
  const bounceFour = createRef();

  // const moveBounce = () => { //Update class method
  //   // console.log('id ' + Bounce.instance)
  //   let show = (text) ? true : false
  //   Bounce.instance.updateText(show,id)
  // }

  // const validateTelephone = (text) => {
  //   setTelephone(text)
  //   if(/^[0-9]+$/.test(input))
  //   setError('wrong telephone format')
  // }

  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <TouchableWithoutFeedback>
          <View style={styles.firstBox}>
            {/* <Text style={{ ...styles.inputLabel, color : COLORS.white }}>Name</Text> */}
            <Bounce style={{  ...styles.p, color : COLORS.white }} text = "NAME"  ref={bounceOne}/>
            <TextInput
              style={{ ...styles.inputTransparent, color : COLORS.white }}
              // placeholder='NAME'
              // autoCapitalize={false}
              // keyboardType='email-address'
              // textContentType='emailAddress'
              onChangeText = {(text) => {
                if(!text){
                  bounceOne.current.updateText(toggleOne)
                  setToggleOne(false)
                }else if(text && toggleOne){
                  bounceOne.current.updateText(toggleOne)
                  setToggleOne(true)                  
                }
              }}
              ref = {nameRef}
              // value = {name}
            />
          </View>
        </TouchableWithoutFeedback>
        {/* <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Work Telephone</Text>
          <TextInput
            style={styles.input}
            // autoCapitalize={false}
            keyboardType='telephone'
            textContentType='telephone'
            onChangeText = {(text) => validateTelephone(text)}
            value = {telephone}
          />
        </View> */}
        <TouchableWithoutFeedback>
          <View style={styles.inputBox}>
            {/* <Text style={styles.inputLabel}>Email</Text> */}
            <Bounce style={{  ...styles.p, color : COLORS.white }} text = "EMAIL"  ref={bounceTwo}/>

            <TextInput
              style={{ ...styles.inputTransparent, color : COLORS.white }}
              // autoCapitalize={false}
              // secureTextEntry={true}
              // placeholder='EMAIL'
              textContentType='emailAddress'
              // value = {email}
              ref = {emailRef}
              onChangeText = {(text) => validateEmail(text)}
            />

          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.inputBox}>
            {/* <Text style={styles.inputLabel}>Password</Text> */}
            <Bounce style={{ ...styles.p, color : COLORS.white }} text = "PASSWORD"  ref={bounceThree}/>

            <TextInput
              style={{ ...styles.inputTransparent, color : COLORS.white }}
              // autoCapitalize={false}
              secureTextEntry={true}
              // placeholder='PASSWORD'
              textContentType='password'
              // ref = {passwordRef}
              value = {password}
              onChangeText = {(text) => {
                if(!text){
                  bounceThree.current.updateText(toggleThree)
                  setToggleThree(false)
                }else if(text && toggleThree){
                  bounceThree.current.updateText(toggleThree)
                  setToggleThree(true)                  
                }
              }}
            />

          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.inputBox}>
            <Bounce style={{  ...styles.p, color : COLORS.white }} text = "CONFIRM PASSWORD"  ref={bounceFour}/>

            <TextInput
              style={{ ...styles.inputTransparent, color : COLORS.white }}
              // autoCapitalize={false}
              secureTextEntry={true}
              // placeholder='PASSWORD'
              textContentType='password'
              ref = {passwordRRef}
              // value = {password}
              onChangeText = {(text) => {
                if(!text){
                  bounceFour.current.updateText(toggleFour)
                  setToggleFour(false)
                }else if(text && toggleFour){
                  bounceFour.current.updateText(toggleFour)
                  setToggleFour(true)                  
                }                
              }}
            />

          </View>
        </TouchableWithoutFeedback>
        {error ? <Text style={styles.danger}>{error}</Text> : null}
        <TouchableOpacity  onPress = {() => handleSignUp}>
          <View>
            <LinearGradient
                colors={['#FF4B2B', '#FF4B2B', '#FF416C']} // Define your gradient colors
                style={ { ...styles.loginMain, ...styles.center } }
            >
              <Text style={styles.loginButtonText}>CREATE</Text>
            </LinearGradient>
          </View>
          
        </TouchableOpacity>
        

      </View>
    </TouchableWithoutFeedback>
  );
}