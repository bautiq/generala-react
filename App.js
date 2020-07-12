import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

import Registration from './app/scenes/Registration';
import Login from './app/scenes/Login';


export default function App() {
   return (
    <View style={styles.container}>
      <Login/>
     </View>
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
