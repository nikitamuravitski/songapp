import React from 'react'
import { View, FlatList } from 'react-native'
import { Paper } from '../../../components/Paper'
import EmptyIdeas from './EmptyIdeas'

export default ({ pressHandler, data }) => {

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.uuid}

        renderItem={({ item }) => <Paper
          uuid={item.uuid}
          key={item.uuid}
          name={item.name}
          content={item.content}
          type='IDEA'
          pressHandler={pressHandler}
        />}
        ListEmptyComponent={<EmptyIdeas />}
      />
    </View>
  )
}
