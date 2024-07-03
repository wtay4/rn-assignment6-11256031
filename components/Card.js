import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

export default function Card(props) {
  return (
    <View>
      <Image source={props.Image}/>
      <Text style = {{font:'bold'}}>{props.Text}</Text>
      <Text>{props.name}</Text>
      <Text style = {{color: 'rgba(224,145,112,255)'}}>{props.price}</Text>
    </View>
  )
}