import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Home from './Home'
import Detail from './Detail'

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ title: 'News', headerStyle: {
            backgroundColor: '#000'
          },
          headerTintColor: '#fff',
          headerTitleStyle:{
            fontSize: 24,
            fontWeight: '800'
          }}}/>
      <Stack.Screen name="Detail" component={Detail} options={{ title: 'Today News', headerStyle: {
            backgroundColor: '#000'
          },
          headerTintColor: '#fff',
          headerTitleStyle:{
            fontSize: 20,
            fontWeight: '800'
          }}}/>
    </Stack.Navigator>
  );
}

export default function HeadUpApp() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
