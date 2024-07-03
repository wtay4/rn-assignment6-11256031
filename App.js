import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


export default function () {
  return (
    <View>
      <Text style = {Styles.text}>then, are you mad?</Text>
    </View>
  )
}

const Styles = StyleSheet.create ({
  text:{
    marginTop:30
  }
})