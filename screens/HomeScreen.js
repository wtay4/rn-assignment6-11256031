import { View, Text, FlatList, Button } from 'react-native'
import React, { useState } from 'react'
import TopBar from '../components/TopBar'
import {products} from '../components/Data'
import Card from '../components/Card'

export default function HomeScreen() {
  const [numColumns, setNumColumns] = useState(2);

  const changeColumns = () => {
    setNumColumns(prevNumColumns => prevNumColumns === 2 ? 1 : 2);
  }

  return (
    <View>
      <TopBar/>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Card {...item} />}
        numColumns={numColumns}
        key={numColumns}
      />
    </View>
  )
}