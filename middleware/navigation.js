import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

// import { createStackNavigator } from '@react-navigation/stack';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import expo from "expo-router";

import { LogBox, Platform, View } from 'react-native';

import Home from '../screens/home';
import CreateAccount from '../screens/createAccount';
import SignIn from '../screens/signIn';
import Account from '../screens/account'
import Jobs from '../screens/jobs'

// import themeColors from '../theme';
import styles, { COLORS } from '../styles'
import userSession from '../../hooks/useSession'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import  FontAwesome  from 'react-native-fontawesome';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

// import { fas } from '@fortawesome/free-brands-svg-icons';
// console.log(fas)

import { faUser, faPaperPlane, faCalender, faSquareCaretRight, faIdBadge } from '@fortawesome/free-regular-svg-icons'

import { faUser as faUserSolid, faPaperPlane as faPaperPlaneSolid, faCalender as faCalenderSolid, faSquareCaretRight as faSquareCaretRightSolid, faIdBadge as faIdBadgeSolid, faUsers } from '@fortawesome/free-solid-svg-icons'

console.log('count nav center..')

// const Stack = createNativeStackNavigator ();
// const { definitions } = library
// const { coffee, heart } = definitions.fas
// console.log(coffee)



const Tab = createBottomTabNavigator();
const android = Platform.OS == 'android';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);


function AppNavigation(){
  return (
    // <LinearGradient
    //   colors={['#FF4B2B', '#FF4B2B', '#FF416C']} // Define your gradient colors
    //   style={ { ...styles.loginMain , marginTop : 650} }
    // >
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => menuIcons(route, focused),
          tabBarStyle: { backgroundColor : '#000' },
          tabBarItemStyle: {
            // marginTop: android? 30: 0,
            
          }
        })}
        
        >
          <Tab.Screen name="home" component={ Home } />
          <Tab.Screen name="create" component={ CreateAccount } />
          <Tab.Screen name="signIn" component={ SignIn } />
          <Tab.Screen name = "account" component = { Account } />
          <Tab.Screen name = "jobs" component = { Jobs } />
      </Tab.Navigator>
    </NavigationContainer>
    // </LinearGradient>
  )
}

const menuIcons = (route, focused)=> {
  // console.log(one)
  // console.log(two)
  let iconDisplay = focused ? <FontAwesomeIcon icon = { faPaperPlaneSolid } size = {30} color={COLORS.theme} />: <FontAwesomeIcon icon = { faPaperPlane } size = {30}  color={COLORS.gray} />
  

  if (route.name === 'account'){
    iconDisplay =  focused? <FontAwesomeIcon icon = { faUserSolid } size = {30}  color={ COLORS.theme } /> : <FontAwesomeIcon icon = { faUser } size = {30}  color={COLORS.gray} />
  }else if(route.name === 'create'){
    iconDisplay =  focused? <FontAwesomeIcon icon = { faIdBadgeSolid } size = {30}  color={ COLORS.theme } /> : <FontAwesomeIcon icon = { faIdBadge } size = {30}  color={ COLORS.gray } />
  }else if(route.name==='signIn'){
    iconDisplay =  focused? <FontAwesomeIcon icon = { faSquareCaretRightSolid } size = {30}  color={ COLORS.theme } /> : <FontAwesomeIcon icon = { faSquareCaretRight } size = {30}  color={ COLORS.gray } />
  }else if(route.name === 'jobs'){
    iconDisplay = focused ? <FontAwesomeIcon icon = { faSquareCaretRightSolid } size = { 30 } color = { COLORS.theme }/> : <FontAwesomeIcon icon = { faSquareCaretRightSolid } size = { 30 } color = { COLORS.gray }/>
  }

  
  // <FontAwesomeIcon icon={SolidIcons.smile} />
  // <FontAwesome icon={RegularIcons.smileWink} />
  // <FontAwesome icon={BrandIcons.github} />
  // <FontAwesome icon = {LightIcons.UserOutline } />

  let buttonClass = focused? "bg-white": "";
  return (
    <View className={"flex items-center rounded-full p-3 shadow " + buttonClass}>
      { iconDisplay }
    </View>
  )
}

// function AppNavigation() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator style = {styles.body}>
//         <Stack.Screen name ="HOME" component={ Home } />
//         <Stack.Screen name="nav" component={ HomeTabs } />
//         <Stack.Screen name="SIGN IN" component={ SignIn } />
//         <Stack.Screen name="CREATE" component={ CreateAccount } />
//         <Stack.Screen name = "ACCOUNT" component = {Account } />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

export default AppNavigation

// export default function AppNavigation() {
//   console.log('HELLO HOME')
//   // console.log(expo)
//     return (
//       // <NavigationContainer>
//       //    <Stack.Navigator initialRouteName = "home" screenOptions={{
//       //     contentStyle: {backgroundColor: 'white'}
//       //   }}>
//       //         <Stack.Screen name="home"  component={Home} />
//       //         <Stack.Screen name="nav"component={HomeTabs} />
//       //   </Stack.Navigator>
//       // </NavigationContainer>
//       // <Text>Hey You</Text>
//       // <Home/>
//       <Stack initialRouteName="home">
//         <Stack.Screen name = "nav" component = { HomeTabs } />
//       </Stack>
//       // <Text>HEY</Text>
//       // <MyStack/>
//     )
    
//   }