import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'
import TopBar from '../components/TopBar'
import {products} from '../components/Data'
import Card from '../components/Card'
import { Button } from 'react-native';


export default function HomeScreen() {
  const [numColumns, setNumColumns] = useState(2);

  const changeColumns = () => {
    setNumColumns(prevNumColumns => prevNumColumns === 2 ? 1 : 2);
  }

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <Card {...item} />}
      numColumns={numColumns}
      key={numColumns}
      ListHeaderComponent={
        <View>
          <TopBar/>
          
        </View>
      }
    />
  )
}

export function HomeScreen1({ navigation }) {
  return (
    <Button
      title="Go to Details"
      onPress={() => navigation.navigate('Details')}
    />
  );
}