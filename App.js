import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Game from './app/scenes/Game';
import Login from './app/scenes/Login';
import Register from './app/scenes/Register';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();


export default function App() {
   return (
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName="Game" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Game" component={Game} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
