import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { StyleSheet } from 'react-native'

export default function TopBar() {
  return (
    <>
    <View style = {Styles.container}>
      <Image source={require('../assets/Menu.png')} />
      <Image source={require('../assets/Logo.png')}/>
      <View style = {Styles.smallcontainer}> 
        <Image source={require('../assets/Search.png')}/>
        <Image source={require('../assets/shoppingBag.png')}/>
      </View>
    </View>
    <View style = {Styles.container}>
        <Text style = {Styles.storysize}>OUR STORY</Text>
       <View style = {Styles.smallcontainer}> 
            <Image source={require('../assets/Listview.png')} />
            <Image source={require('../assets/Filter.png')} />
        </View>
    </View>
    </>

  )
}
const Styles = StyleSheet.create({
    container: {
        flexDirection :'row',
        justifyContent : 'space-between'
    },
    smallcontainer: {
        flexDirection :'row',
        gap : 10,
    },
    storysize: {
        fontSize : 17
    }


})