import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

export default function Card(props) {
  return (
    <View>
      <Image source={props.Image}/>
      <Text>{props.Text}</Text>
      <Text>{props.name}</Text>
    </View>
  )
}