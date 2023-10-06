/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useCallback, useEffect } from 'react';
// import type {PropsWithChildren} from 'react';
import {
  // SafeAreaView,
  // ScrollView,
  // StatusBar,
  // StyleSheet,
  // Text,
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
import LinearGradient from 'react-native-linear-gradient';
import { LogBox, Platform, View } from 'react-native';

import Home from './screens/home';
import CreateAccount from './screens/createAccount';
import SignIn from './screens/signIn';
import Account from './screens/account';
import Jobs from './screens/jobs';

import styles, { COLORS } from './styles';
import useSession from './hooks/useSession';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

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

console.log('count nav center..');

const Tab = createBottomTabNavigator();
const android = Platform.OS === 'android';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);



function App() {

  // let { logIn, updateSession } = useCallback(useSession(),[])
  let { logIn, updateSession } = useSession()


  // useEffect(
  //   () => {  
    updateSession()
// },[])
  
  console.log('user ')
  console.log(logIn)
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
        <Tab.Screen name="create" component={CreateAccount} />
        
        { logIn && logIn.user ?  
          <Tab.Screen name="account" component={Account} />
          :
          <Tab.Screen name="signIn" component={SignIn} />
        }
        
        <Tab.Screen name="jobs" component={Jobs} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const menuIcons = (route: any, focused: boolean) => {
  let iconDisplay = focused ? (
    <FontAwesomeIcon icon={faPaperPlaneSolid} size={30} color={COLORS.theme} />
  ) : (
    <FontAwesomeIcon icon={faPaperPlane} size={30} color={COLORS.gray} />
  );

  // console.log(route.name)
  if (route.name === 'account') {
    iconDisplay = focused ? (
      <FontAwesomeIcon icon={faUserSolid} size={30} color={COLORS.theme} />
    ) : (
      <FontAwesomeIcon icon={faUser} size={30} color={COLORS.gray} />
    );
  } else if (route.name === 'create') {
    iconDisplay = focused ? (
      <FontAwesomeIcon icon={faIdBadgeSolid} size={30} color={COLORS.theme} />
    ) : (
      <FontAwesomeIcon icon={faIdBadge} size={30} color={COLORS.gray} />
    );
  } else if (route.name === 'signIn') {
    iconDisplay = focused ? (
      <FontAwesomeIcon
        icon={faSquareCaretRightSolid}
        size={30}
        color={COLORS.theme}
      />
    ) : (
      <FontAwesomeIcon icon={faSquareCaretRight} size={30} color={COLORS.gray} />
    );
  } else if (route.name === 'jobs') {
    iconDisplay = focused ? (
      <FontAwesomeIcon
        icon={faCalendarSolid}
        size={30}
        color={COLORS.theme}
      />
    ) : (
      <FontAwesomeIcon icon={faCalendar} size={30} color={COLORS.gray} />
    );
  }

  let buttonClass = focused ? 'bg-white' : '';
  return (
    <View style = {{ flex : 1, borderRadius : 2, margin : '1%' }}>
      {iconDisplay}
    </View>
  );
}

export default App;
