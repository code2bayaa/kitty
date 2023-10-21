import React, { useState, useRef, createRef } from 'react';
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
// import { useNavigation } from '@react-navigation/native'
// import RNModal from 'react-native-modal'
import LinearGradient from 'react-native-linear-gradient';
import { URL } from '@env'
import styles, { COLORS } from '../../../styles'
import useFetch from '../../../hooks/useFetch';
import Bounce from '../../../middleware/bounce'

export default Employee = ({ setModal, pressNav }) => {

  const emailRef = useRef()
  const passwordRef = useRef()
  const telephoneRef = useRef()
  const passwordRRef = useRef()
  const nameRef = useRef()

  // const [email, setEmail] = useState('')
  // const [telephone, setTelephone] = useState('')
  // const [password, setPassword] = useState('')
  // const [passwordR, setPasswordR] = useState('')
  // const [name, setName] = useState('')
 
  const [toggleOne, setToggleOne] = useState(false)
  const [toggleTwo, setToggleTwo] = useState(false)
  const [toggleThree, setToggleThree] = useState(false)
  const [toggleFour, setToggleFour] = useState(false)
  const [toggleFive, setToggleFive] = useState(false)

  const [error, setError] = useState('')

  const bounceOne = createRef();
  const bounceTwo = createRef();
  const bounceThree = createRef();
  const bounceFour = createRef();
  const bounceFive = createRef();

  const { fetchData, loading } = useFetch()

  // const navigation = useNavigation()
  // const [modal, setModal] = useState(false)

  // const pressNav = (page) => {
    
  //   console.log('go to :' + page)
  //   navigation.navigate(page)
  // }

  const handleSignUp = async() => {

    const email = emailRef.current.value
    const telephone = telephoneRef.current.value
    const password = passwordRef.current.value
    const passwordR = passwordRRef.current.value
    const name = nameRef.current.value

    if (!email || !telephone || !password || !passwordR || !name  ) {
        setError('Please fill in all fields.');
      
    } else {
      // Perform your login logic here, e.g., send data to a server.
      // If successful, navigate to another screen.
      setModal(true)

      const { success, feedback } = await fetchData({
        method : 'POST',
        query : {  'create_employer' : true, 'institution' : name, 'password' : password, 'email' : email, 'telephone' : telephone },
        url :`${ URL }/jobs/php/index.php`
      })

      //In PHP
      /*
      * @ OBJECT [
        'create_employer' => true,
        'institution' => $name
      ]

      */
      
      if(loading)
        setModal(true)
      else
        setModal(false)

      // if(data)
      console.log(feedback)
      // sessionStorage.setItem('user','employer')
      ToastAndroid.show(feedback,2000)
      if(success){
        setTimeout(() => {
          setModal(false)
          pressNav('signIn')
        }, 1000)
      }else{
          setError(error + ' Try again');
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

  const validateEmail = (text) => {
    // setEmail(text)
    if(!text){
      bounceThree.current.updateText(toggleThree)
      setToggleThree(false)
    }else if(text && toggleThree){
      bounceThree.current.updateText(toggleThree)
      setToggleThree(true)                  
    }
    if(!(/\S+@\S+\.\S+/.test(text))){
      emailRef.current.value = ""
      setError('wrong email format')
    }else{
      setError('')
    }
  }

  const validateTelephone = (text) => {
    // setTelephone(text)
    if(!text){
      bounceTwo.current.updateText(toggleTwo)
      setToggleTwo(false)
    }else if(text && toggleTwo){
      bounceTwo.current.updateText(toggleTwo)
      setToggleTwo(true)                  
    }
    if(!(/^[0-9]+$/.test(text))){
      telephoneRef.current.value = ""
      setError('wrong telephone format')
    }else{
      setError('')
    }
    
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.inputBox}>
          {/* <Text style={styles.inputLabel}>Employer</Text> */}
          <Bounce style={{  ...styles.p, color : COLORS.white }} text = "EMPLOYER"  ref={bounceOne}/>

          <TextInput
            style={{ ...styles.inputTransparent, color : COLORS.white }}
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
            // value = {name}
            ref = {nameRef}
          />
        </View>
        <View style={styles.inputBox}>
          {/* <Text style={styles.inputLabel}>Work Telephone</Text> */}
          <Bounce style={{  ...styles.p, color : COLORS.white }} text = "WORK TELEPHONE"  ref={bounceTwo}/>

          <TextInput
            style={{ ...styles.inputTransparent, color : COLORS.white }}
            // autoCapitalize={false}
            keyboardType='numeric'
            textContentType='telephoneNumber'
            onChangeText = {(text) => validateTelephone(text)}
            // value = {telephone}
            ref = {telephoneRef}
          />
        </View>
        <View style={styles.inputBox}>
          {/* <Text style={styles.inputLabel}>Work Email</Text> */}

          <Bounce style={{  ...styles.p, color : COLORS.white }} text = "WORK EMAIL"  ref={bounceThree}/>
          <TextInput
            style={{ ...styles.inputTransparent, color : COLORS.white }}
            // autoCapitalize={false}
            // secureTextEntry={true}
            textContentType='emailAddress'
            ref={emailRef}
            // value = {email}
            onChangeText = {(text) => validateEmail(text)}
          />
        </View>
        <View style={styles.inputBox}>
          {/* <Text style={styles.inputLabel}>Password</Text> */}
          <Bounce style={{  ...styles.p, color : COLORS.white }} text = "PASSWORD"  ref={bounceFour}/>

          <TextInput
            style={{ ...styles.inputTransparent, color : COLORS.white }}
            // autoCapitalize={false}
            secureTextEntry={true}
            textContentType='password'
            ref={passwordRef}
            // value = {password}
            onChangeText = {(text) => {
              if(!text){
                bounceFour.current.updateText(toggleFour)
                setToggleFour(false)
              }else if(text && toggleFour){
                bounceFour.current.updateText(toggleFour)
                setToggleFour(true)                  
              }
            }}          />
        </View>
        <View style={styles.inputBox}>
          {/* <Text style={styles.inputLabel}>Confirm Password</Text> */}
          <Bounce style={{  ...styles.p, color : COLORS.white }} text = "CONFIRM PASSWORD"  ref={bounceFive}/>

          <TextInput
            style={{ ...styles.inputTransparent, color : COLORS.white }}
            // autoCapitalize={false}
            secureTextEntry={true}
            textContentType='password'
            ref={passwordRRef}
            // value = {password}
            onChangeText = {(text) => {
              if(!text){
                bounceFive.current.updateText(toggleFive)
                setToggleFive(false)
              }else if(text && toggleFive){
                bounceFive.current.updateText(toggleFive)
                setToggleFive(true)                  
              }
            }}  
          />
        </View>
        { error ? <Text style={styles.danger}>{error}</Text> : null }
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
        {/* <Text 
            style={styles.registerText}
        >
          Already have an account?
        </Text>
        <TouchableWithoutFeedback onPress={ () => pressNav("signIn") }>
          <Text style = {styles.a} >Sign In</Text>
        </TouchableWithoutFeedback>
        <TouchableOpacity onPress={ () => pressNav('forgot')}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity> */}
      </View>
    </TouchableWithoutFeedback>
  );
}