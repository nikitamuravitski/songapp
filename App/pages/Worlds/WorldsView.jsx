import React, { useEffect } from 'react'

import { View, Text, FlatList } from 'react-native'
import { useDispatch } from 'react-redux'
import { Ideas } from '../Ideas'
import { setCurrentWorldUuid } from '../../state/worlds'

export const WorldsView = ({ data }) => {
  data = Object.values(data)
  console.log(data)
  const dispatch = useDispatch()
  useEffect(() => () => {
    dispatch(setCurrentWorldUuid({ worldUuid: null }))
  }, [])
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.uuid}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Ideas data={item} /> {/* here i need to pass smth to Ideas to show Ideas of Particular Worlds */}
          </View>
        )}
      />
    </View>
  )
}
