import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import { Paper } from '../../components/Paper'

export const IdeasView = ({ pressHandler, data }) => {
  return <View>
    <FlatList
      data={data}
      keyExtractor={(item) => item.uuid}
      renderItem={({ item }) => <Paper
        uuid={item.uuid}
        key={item.uuid}
        name={item.name}
        content={item.content}
        type='IDEA'
        pressHandler={pressHandler} />} />
  </View>
}

