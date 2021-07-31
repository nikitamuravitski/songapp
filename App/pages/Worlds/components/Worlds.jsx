import React, { useEffect } from 'react'

import { View, Text, FlatList } from 'react-native'
import { useDispatch } from 'react-redux'
import Ideas from '../../Ideas/containers/List'
import { setCurrentWorldUuid } from '../../../state/worlds'

export default ({ data }) => {
  const dispatch = useDispatch()
  // useEffect(() => {
  //   return dispatch(setCurrentWorldUuid(null))
  // }, [])


  //**** for some reason it rewrites currentWorldUuid earlier than selector picks it up ****//
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.uuid}
        renderItem={({ item }) => (
          <View>
            <Text>{item}</Text>
            <Ideas worldUuid={item} />
            {/* here i need to pass smth to Ideas to show Ideas of Particular Worlds */}
          </View>
        )}
      />
    </View>
  )
}
