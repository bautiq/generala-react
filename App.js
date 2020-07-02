import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

import Registration from './app/scenes/Registration';
import Login from './app/scenes/Login';
import Dado from './app/components/Dado';
import Game from './app/scenes/Game';


export default function App() {
   return (
    
      <Game/>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#36485f",
    paddingLeft: 60,
    paddingRight: 60
  },
});
