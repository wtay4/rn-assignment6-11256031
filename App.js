import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import HomeScreen from './screens/HomeScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function () {
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}></Text>
      <HomeScreen/>
    </View>
  )
  
}

const Styles = StyleSheet.create ({
  container: {
    margin: 25,
  },
  text:{
    marginTop:30
  }
})
const Stack = createStackNavigator();

export  function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}