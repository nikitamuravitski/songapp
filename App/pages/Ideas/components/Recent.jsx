import React from 'react'
import { Text, FlatList, View } from 'react-native'
import { Paper } from '../../../components/Paper'
export default ({ data, pressHandler }) => {
  return (
    <View>
      <Text>Recent Ideas</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.uuid}
        renderItem={({ item }) => <Paper
          uuid={item.uuid}
          key={item.uuid}
          name={item.name}
          content={item.content}
          pressHandler={pressHandler}
        />}
      />
    </View>
  )
}
