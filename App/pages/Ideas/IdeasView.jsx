import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import { Paper } from '../../components/Paper'

export const IdeasView = ({ recent, pressHandler, worldData }) => {

  let ideasData = useSelector(state => state.Ideas.ideasData)
  let ideasDataFlat = Array.from(Object.values(ideasData))
  let recentIdeasData = ideasDataFlat.slice(0, 3)
  // for rendering 3-4 recent ideas
  if (worldData) {
    let ideasList = worldData.ideas
    let data = ideasList.map(uuid => {
      return ideasData[uuid]
    })
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
          pressHandler={pressHandler} />}
      />
    </View>
  }
  if (recent) {
    return <View>
      <Text>Recent Ideas</Text>
      <FlatList
        data={recentIdeasData}
        keyExtractor={(item) => item.uuid}
        renderItem={({ item }) => <Paper
          uuid={item.uuid}
          key={item.uuid}
          name={item.name}
          content={item.content}
          type='IDEA'
          pressHandler={pressHandler} />} />
    </View>
  } else {
    return <View>
      <FlatList
        data={ideasDataFlat}
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
}
