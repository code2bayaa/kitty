import React, {useRef, useState, useEffect, useCallback, useMemo, createRef } from 'react';
import {
  Button,
  DrawerLayoutAndroid,
  Text,
  // StyleSheet,
  TouchableOpacity,
  // ImageBackground,
  TextInput,
  ScrollView,
  View,
  
} from 'react-native';
import DatePickerIOS from '@react-native-community/datetimepicker'
import { useRoute, RouteProp  } from '@react-navigation/native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMarsAndVenus, faMedal, faNavicon, faSliders, faBars, faSquarePollVertical  } from '@fortawesome/free-solid-svg-icons';
// import LottieView from 'lottie-react-native';
// import Gif from 'react-native-gif';
// import gifSmoke from '../../assets/smoke.gif'
import RNModal from 'react-native-modal'
// import Video from 'react-native-video';
import { URL } from '@env'

// Import your GIFs as JSON files (you can use Lottie's online converter)
// import gifAnimation from './animations/gifAnimation.json';


// import useSession from '../../hooks/useSession'
import Employer from './walls/employer'
import Employee from './walls/employee'
import styles, { COLORS } from '../../styles'
import Profile from '../employee/profile';
import Delete from '../employee/delete'
import Applications from '../employee/applications';
import ProfileEmployer from '../employer/profile';
import Jobs from '../employer/jobs';
import DeleteEmployer from '../employer/delete';
import Create from '../employer/create';
import useFetch from '../../hooks/useFetch';

// import { Line } from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';
// import useLazy from '../../hooks/useLazy';

const App = () => {

    // Define your route parameter type
  // type RootStackParamList = {
  //   account: { log: { details : { user } } }; // Replace YourScreenName with your actual screen name
  // };

  // // In your component file, use the RouteProp type
  // type accountRouteProp = RouteProp<RootStackParamList, 'account'>; // Replace YourScreenName with your actual screen name

  // // Inside your component function
  // const route = useRoute<accountRouteProp>();
  // //PROPS
  const route = useRoute();
  const { log } = route.params;

  const drawer = useRef<DrawerLayoutAndroid>(null);
  // const [drawerPosition, setDrawerPosition] = useState<'left' | 'right'>(
  //   'left',
  // );
  const [drawerPosition, setDrawerPosition] = useState(
    'left',
  );

  const [employeeNav, setEmployeeNav] = useState('profile')
  const [employerNav, setEmployerNav] = useState('profile')
  const [modal, setModal] = useState(false)
  const [modalKey, setModalKey] = useState('education')
  const [modalScroll, setModalScroll] = useState([])
  const { loading, fetchData } = useFetch()
  const [feedback, setFeedback] = useState({})
  const [type, setType] = useState({})
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date())

  const [institution, setInstitution] = useState('')
  const [address, setAddress] = useState('')
  const [title, setTitle] = useState('')
  const [grade,setGrade] = useState('')
  const [name, setName] = useState('')
  const [telephone, setTelephone] = useState('')
  const [email, setEmail] = useState('')
  // const [telephone, setTelephone] = useState('')

  const startDateChange = (newDate) => {
    setStartDate(newDate);
  };
  const endDateChange = (newDate) => {
    setEndDate(newDate)
  }
  // const employeeProfile = createRef();

  const changeDrawerPosition = () => {
    if (drawerPosition === 'left') {
      setDrawerPosition('right');
    } else {
      setDrawerPosition('left');
    }
  };


  const changePage = (page) => {
    console.log(page)
    setEmployeeNav(page)
  }

  const changeEmployer = (page) => {
    console.log(page)
    setEmployerNav(page)
  }

  const signOut = () => {
    console.log('signOut')
    return 1
  }
  const navigationView = () => (
    
    <View style={[ styles.wall]}>
      {/* <LottieView
        source = { gifSmoke }
        //  style = { {  ...styles.coverWall }} 
         autoPlay
         loop
      />       */}
      
      {/* <Video
        source={ gifSmoke }
        style={{ width: 300, height: 200 }}
        // controls={true}
      /> */}

      {/* <Gif
        source={ gifSmoke } // Replace with your GIF file
        style={[{position: 'absolute', top : 0, left : 0}, styles.coverWall]}
      /> */}
      <LinearGradient
        colors={['#FF4B2B', '#FF4B2B', '#FF416C']} style={[styles.wall,styles.center]}
      >
        {/* <Text style={styles.paragraph}>I'm in the Drawer!</Text> */}
        <TouchableOpacity
            onPress={() => drawer.current?.closeDrawer()}
            style = {[ { position : 'absolute', top : 5, right : 100, color : COLORS.white} ]}
          >
            <FontAwesomeIcon icon={ faSliders } size={30} color={COLORS.white} />
          </TouchableOpacity>
        {
          (log.details.user === 'employer') ?
            <Employer changePage = {changePage} signOut = {signOut}/>
          :
            <Employee changePage = {changePage} signOut = {signOut} />
        }
      </LinearGradient>
      {/* </ImageBackground> */}
      {/* </LottieView> */}
    </View>
  );

  const navBar = (page) => {
    switch(page){
      // case 'profile' :
      //   return <Profile plotProfile = {plotProfile}/>
      // break;
      case 'applications' :
        return <Applications/>
      break;
      case 'delete' : 
        return <Delete />
      break;
      default : 
        return <Profile plotProfile = {plotProfile}/>
    }
    
  }

  const navBarEmployer = (page) => {
    switch(page){
      // case 'profile' :
      //   return <ProfileEmployer/>
      // break;
      case 'create' :
        return <Create/>
      break;
      case 'jobs':
        return <Jobs />
      break;
      case 'delete' : 
        return <DeleteEmployer />
      break;
      default : 
        return <ProfileEmployer/>
    }
  }

  const showModal = ({ value, key }) => {
    setModal(true)
    console.log({ value, key })
    // console.log(checkStringify(modal_data)) //should return true
    // let dataModal = () => {
    //   console.log('key ' + key)

    // }

    // let modalString = dataModal()
    // console.log(dataModal())

    // setModalData()

    setModalKey(key)
    if(checkStringify(value)){
      setModalScroll(JSON.parse(value))
    }
    // console.log(modalString)
    // setModalData(modalString)
    // if(checkStringify(modal_data)){

    // }
    // setModalData(modal_data)
  }

  // const setFeedbacks = useCallback(
  //   (key) => {
  //     // setFeedback((feed) => {
  //     //   return [feed, {[key] : ''}]
  //     // })
  //     useEffect(() => {
  //       setFeedback({})
  //     },[setFeedback])
  //     // setFeedback({})
  //     console.log(key)
  //   },
  //   []
  // )
  const changeProfile = async(input, key) => {
    console.log(type)
    // console.log(employeeProfile)
    setFeedback((feed) => {
      return {...feed, [key] : 'editing'}
    })

    const record = (log.details.user === 'employer') ? 'profile-edit-employer' : 'profile-edit'

    const sendData = { 
      "method" : 'POST',
      url : `${ URL }/jobs/php/index.php`,
      query : JSON.stringify({ [record] : true, 'data' : input, 'cell' : key })
    }

    const data = await fetchData(sendData)
    if(data && data.success){
      setFeedback((feed) => {
        return {...feed, [key] : ''}
      })
      setType((text) => {
        return {...text, [key] : input}
      })
    }
  }

  const addInfo = async({ type }) => {

    console.log(type)
    let sendData = {}

    if(type === 'education'){
      sendData = { 
          'table' : 'education',
          'data' : {'institution' : institution, 'grade' : grade, 'start' : startDate, 'end' : endDate }        
      }
    }else if(type === 'referees'){
      sendData = {
        'table' : 'referees',
        'data' : { 'institution' : institution, 'title' : title, 'name' : name, 'address' : address, 'email' : email, 'telephone' : telephone }         
      }
    }else{
      sendData = {
        'table' : 'work',
        'data' : { 'name' : name, 'address' : address, 'start' : startDate, 'end' : endDate }          
      }
    }

    const { success, data } = await fetchData({ 
      "method" : 'POST',
      url : `${ URL }/jobs/php/index.php`,
      query : JSON.stringify(sendData)
    })

    if(success){
      setInstitution('')
      setTitle('')
      setName('')
      setEmail('')
      setTelephone('')
      setAddress('')
      setGrade('')
      setStartDate(new Date())
      setEndDate(new Date())
      setModalScroll(scroll => data )
    }
  }

  const checkStringify = (text) => (typeof(text) == "string") && (text.indexOf('\"') > -1) && (((text.indexOf('{') > -1) && (text.indexOf('}') > -1) && (text.indexOf(':') > -1)) || ((text.indexOf('[') > -1) && (text.indexOf(']') > -1) && (text.indexOf(']') > -1) > (text.indexOf('[') > -1)))
  
  const plotProfile = (profile) => {

    const all_plots = []
    for(const key in profile){
      const check = Number(key)
      if(isNaN(check)){
        // console.log(profile[key])
        all_plots.push({ key, value : profile[key]})
                
      }
    }
    all_plots.shift()

    console.log(feedback)
    /*

    if in array [documents, work, referees, education]
      >> profile__.key = any of the above
      >> value is JSON format
      >> profile__.value == [
        {"institution":"CHAVAKALI","grade":"A","start":"2023-10-11","end":"2023-11-04"},
        {"institution":"MOI","class":"second honors","start":"2023-10-04","end":"2023-10-28"}
      ]
    */
    return all_plots.map( profile__ => {

      if(profile__.key == 'county')
        console.log(profile__.value)
      // console.log(profile__.key.includes(['documents', 'education', 'referees', 'work']))
      return <View style = {[styles.minimumWall, styles.center]} key = {profile__.key} id = {profile__.key}>
        <FontAwesomeIcon icon={ faMedal } size={30} color={COLORS.common} />
        <Text style = {styles.h2}>{profile__.key}</Text>
        {

          (['documents', 'education', 'referees', 'work'].includes(profile__.key))?
            <Button
              title = "View"
              onPress={() => showModal({ value : profile__.value, key : profile__.key})}
              style = { styles.loginMain }
            />
          : 
            <TextInput
              style={{ backgroundColor : COLORS.gray2, width : 160, left : -10, height : 40, color : COLORS.common }}
              onChangeText = {(input) => 
                changeProfile(input,profile__.key)
              }
              value = { (type.hasOwnProperty(profile__.key)) ? type[profile__.key] : profile__.value.toString() }
            />
        }
        <Text>{ (feedback.hasOwnProperty(profile__.key)) ? feedback[profile__.key] : '' }</Text>
        
      </View>   
    })

  }


  return (
    <View style = {styles.coverWall}>
      <RNModal
        isVisible = {modal}
      > 
          {/* <View style = {[styles.centerStandardWall, { backgroundColor : '#fff'}]}> */}          
          {

            (modalKey === 'education') ? (
              <View style = {[styles.mediumWall, styles.center]}>
                <TextInput
                  style={{ ...styles.inputTransparent, color : COLORS.common }}
                  placeholder='INSTITUTION'
                  onChangeText = {(text) => {
                    setInstitution(text)
                  }}
                />
                <TextInput
                    style={{ ...styles.inputTransparent, color : COLORS.common }}
                    placeholder='GRADE'
                    onchangeText = {(text) => {
                      setGrade(text)
                    }}
                />
                <Text style = {styles.inputBox}>START DATE : { startDate.toDateString() }</Text>
                <DatePickerIOS
                  date={ startDate }
                  onDateChange={startDateChange}
                  mode="date"
                />
                <Text style = {styles.inputBox}>END DATE : { endDate.toDateString() }</Text>
                <DatePickerIOS
                  date={ endDate }
                  onDateChange={endDateChange}
                  mode="date"
                />    
                <Button
                  title="ADD"
                  style = {styles.loginMain}
                  onPress={() => addInfo({ type : 'education' })}
                />      
              </View>
            )
            
            :
            (modalKey === 'referees') ? (
              <View style = {[styles.mediumWall, styles.center]}>
                <TextInput
                    style={{ ...styles.inputTransparent, color : COLORS.common }}
                    placeholder='INSTITUTION'
                    onchangeText = {(text) => {
                      setInstitution(text)
                    }}
                />
                <TextInput
                    style={{ ...styles.inputTransparent, color : COLORS.common }}
                    placeholder='ADDRESS'
                    onchangeText = {(text) => {
                      setAddress(text)
                    }}
                />
                <Text style = {styles.inputBox}>START DATE : { startDate.toDateString() }</Text>
                <DatePickerIOS
                  date={startDate}
                  onDateChange={startDateChange}
                  mode="date"
                />    
                <Text style = {styles.inputBox}>END DATE : { endDate.toDateString() }</Text>
                <DatePickerIOS
                  date={endDate}
                  onDateChange={endDateChange}
                  mode="date"
                />       
                <Button
                  title="ADD"
                  style = {styles.loginMain}
                  onPress={() => addInfo({ type : 'referees'})}
                />    
              </View> 
              )
            :  
              (modalKey === 'referees') ? (
                <View style = {[styles.mediumWall, styles.center]}>

                </View>
              )
            :
              (
              <View style = {[styles.mediumWall, styles.center]}>                   
                <TextInput
                    style={{ ...styles.inputTransparent, color : COLORS.common }}
                    placeholder='INSTITUTION'
                    onchangeText = {(text) => {
                      setInstitution(text)
                    }}
                />
                <TextInput
                    style={{ ...styles.inputTransparent, color : COLORS.common }}
                    placeholder='TITLE'
                    onchangeText = {(text) => {
                      setTitle(text)
                    }}
                />
                <TextInput
                  style={{ ...styles.inputTransparent, color : COLORS.common }}
                  placeholder='NAME'
                  onchangeText = {(text) => {
                    setName(text)
                  }}
                />
                <TextInput
                  style={{ ...styles.inputTransparent, color : COLORS.common }}
                  placeholder='TELEPHONE'
                  onchangeText = {(text) => {
                    setTelephone(text)
                  }}
                />
                <TextInput
                  style={{ ...styles.inputTransparent, color : COLORS.common }}
                  placeholder='EMAIL'
                  onchangeText = {(text) => {
                    setEmail(text)
                  }}
                />
                <TextInput
                  style={{ ...styles.inputTransparent, color : COLORS.common }}
                  placeholder='ADDRESS'
                  onchangeText = {(text) => {
                    setAddress(text)
                  }}
                />
                <Button
                  title="ADD"
                  style = {styles.loginMain}
                  onPress={() => addInfo({ type : 'work' })}
                />  
              </View>
              )
                                              
          }
        {/* </View>
        <View> */}
          {
            modalScroll.map( (profile, k) => 
              <View style = {[styles.horizontalWallDisplay,{ top : '10%' }, ((k%0) ? { backgroundColor : COLORS.gray } : { backgroundColor : COLORS.white })]} key = {k} id = {k}>
                {
                  Object.entries(profile).forEach(([key, value]) => 
                    <View style = {[styles.minimumWall,((k%0) ? { backgroundColor : COLORS.white } : { backgroundColor : COLORS.gray })]} key = {key} id = {key}>

                      <Text style = {styles.h2}>{ key }</Text>
                      <Text style = {styles.p}>{ value }</Text>
                    </View>
                  )
                }

              </View>
            )
          }
        {/* </View>
        // </View> */}

      </RNModal>
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition={drawerPosition}
        renderNavigationView={navigationView}
        >

          {/* <Text style={styles.paragraph}>Drawer on the {drawerPosition}!</Text>
          <Button
            title="Change Drawer Position"
            onPress={() => changeDrawerPosition()}
          />
          <Text style={styles.paragraph}>
            Swipe from the side or press button below to see it!
          </Text>
          <Button
            title="Open drawer"
            onPress={() => drawer.current?.openDrawer()}
          /> */}
          <View style = {{ ...styles.right, left : -45}}>
            <TouchableOpacity
              onPress={() => drawer.current?.openDrawer()}
            >
              <FontAwesomeIcon icon={ faNavicon } size={ 30 } color={ COLORS.common } />
            </TouchableOpacity>
          </View>
          <ScrollView style = {[styles.wall, {  color : COLORS.common, padding : 0, flex : 1}]}>

            {
              (log.details.user === 'employer') ? //If user is employer/employee
                navBarEmployer(employerNav)
              :
                navBar(employeeNav)
            } 
          </ScrollView>

      </DrawerLayoutAndroid>
    </View>
  );
};


export default App;