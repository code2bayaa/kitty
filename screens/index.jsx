/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useCallback, useEffect, useMemo } from 'react';
// import type {PropsWithChildren} from 'react';
import {
  // SafeAreaView,
  // ScrollView,
  // StatusBar,
  // StyleSheet,
  Text
  // useColorScheme,
  // View
} from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// import AppNavigation from './middleware/navigation';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

import { NavigationContainer } from '@react-navigation/native';
// import LinearGradient from 'react-native-linear-gradient';
import { LogBox, Platform, View } from 'react-native';

//screen jsx

import Home from './home';
import CreateAccount from './createAccount';
import SignIn from './signIn';
import Account from './account';
import Jobs from './jobs';

import styles, { COLORS } from './../styles';
// import useSession from './../hooks/useSession';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; //screen layout
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'; //icons

import {
  faUser,
  faPaperPlane,
  faCalendar,
  faSquareCaretRight,
  faIdBadge,
} from '@fortawesome/free-regular-svg-icons';

import {
  faUser as faUserSolid,
  faPaperPlane as faPaperPlaneSolid,
  faCalendar as faCalendarSolid,
  faSquareCaretRight as faSquareCaretRightSolid,
  faIdBadge as faIdBadgeSolid,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';

//CONNECT STATE SESSION
import { connect } from 'react-redux';
import { updateMyState } from '../constants/redux/action';

const Tab = createBottomTabNavigator();
const android = Platform.OS === 'android';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);



function Main({ session, updateMyState }) {

  // let { logIn, updateSession } = useCallback(() => { useSession() },[])
//   let { logIn, updateSession } = useSession()

  // let [startUser, setStartUser ] = useState({})


  // const go = useCallback(
  //   () => {
  //     updateSession()
  // },[updateSession])

//   useEffect(
//     () => {
//       updateSession()
//     },[]
//   )
  

  // let startUser = useMemo(
  //   () => {
  //     updateSession()
  //   },[updateSession]
  // )
      console.log('user ')
      console.log(session)
  //     return logIn
  //   },[logIn]
  // )  
  // //     // async function go(){
       
  //             console.log('start')
  //      console.log(startUser)
  //      return logIn
  //     //  setStartUser(logIn)
  //     //  console.log('start')
  //     //  console.log(logIn)
  //     // }
  //     // go()
  // },[logIn])
  // updateSession()

  // useEffect(
  //   () => {
  //     async function go(){
  //       await updateSession()
  //       console.log(await logIn)
  //     }
  //     go()
      
  //   },[updateSession, logIn]
  // )
  
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => menuIcons(route, focused),
          tabBarStyle: { backgroundColor: '#000' },
          tabBarItemStyle: {
            marginTop: android ? 10 : 0,
          },
        })}
      >
        <Tab.Screen name="home" component={Home} /> 
        <Tab.Screen name="register"  component={CreateAccount} />
        { session && session.user ?  
          <Tab.Screen name="account" initialParams={{ log : session }} component={Account} />
          :
          <Tab.Screen name="signIn" component={SignIn} />
        }
        
        <Tab.Screen name="jobs" component={Jobs} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const menuIcons = (route, focused) => {
  let iconDisplay = focused ? (
    <FontAwesomeIcon icon={faPaperPlaneSolid} size={25} color={COLORS.theme} />
  ) : (
    <FontAwesomeIcon icon={faPaperPlane} size={25} color={COLORS.white} />
  );

  // console.log(route.name)
  if (route.name === 'account') {
    iconDisplay = focused ? (
      <FontAwesomeIcon icon={faUserSolid} size={25} color={COLORS.theme} />
    ) : (
      <FontAwesomeIcon icon={faUser} size={25} color={COLORS.white} />
    );
  } else if (route.name === 'register') {
    iconDisplay = focused ? (
      <FontAwesomeIcon icon={faIdBadgeSolid} size={25} color={COLORS.theme} />
    ) : (
      <FontAwesomeIcon icon={faIdBadge} size={25} color={COLORS.white} />
    );
  } else if (route.name === 'signIn') {
    iconDisplay = focused ? (
      <FontAwesomeIcon
        icon={faSquareCaretRightSolid}
        size={25}
        color={COLORS.theme}
      />
    ) : (
      <FontAwesomeIcon icon={faSquareCaretRight} size={25} color={COLORS.white} />
    );
  } else if (route.name === 'jobs') {
    iconDisplay = focused ? (
      <FontAwesomeIcon
        icon={faCalendarSolid}
        size={25}
        color={COLORS.theme}
      />
    ) : (
      <FontAwesomeIcon icon={faCalendar} size={25} color={COLORS.white} />
    );
  }

  let buttonClass = focused ? 'bg-white' : '';
  return (
    <View style = {{ flex : 1, borderRadius : 2, margin : '1%', ...styles.center }}>
      {iconDisplay}
      <Text style = {{color : COLORS.white }}>{ route.name }</Text>
    </View>
  );
}

// export default Main;
const mapStateToProps = (state) => ({
    session: state.session,
  });
  
  // const mapDispatchToProps = { updateMyState };
  
  export default connect(mapStateToProps, { updateMyState })(Main);