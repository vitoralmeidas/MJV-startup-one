import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginPage from './Components/LoginPage'
import HomePage from './Components/HomePage'
import RegistrationPage from './Components/RegistrationPage'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LoginPage'>
        <Stack.Screen name='Login' component={LoginPage} />
        <Stack.Screen name='RegistrationPage' component={RegistrationPage} />
        <Stack.Screen name='HomePage' component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
