import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import HomeScreen from './screens/HomeScreen'


export default function () {
  return (
    <View>
      <Text style = {Styles.text}>then, are you mad?</Text>
      <HomeScreen/>
    </View>

  )
}

const Styles = StyleSheet.create ({
  text:{
    marginTop:30
  }
})