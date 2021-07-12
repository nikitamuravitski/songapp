import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { Paper } from '../../../components/Paper'

export default ({ pressHandler, projects }) => {
  return (
    <View>
      <Text>All Projects</Text>
      <FlatList
        data={projects}
        keyExtractor={item => item.projectUuid}
        renderItem={({ item }) => {
          return (
            <Paper
              worldUuid={item.worldUuid}
              uuid={item.projectUuid}
              name={item.name}
              content='test content'
              type='PROJECT'
              pressHandler={pressHandler}
            />
          )
        }}
      />
    </View>
  )
}
