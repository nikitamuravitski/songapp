import React, { useEffect } from 'react'

import { View, Text, FlatList } from 'react-native'
import { useDispatch } from 'react-redux'
import Ideas from '../../Ideas/containers/List'
import { setCurrentWorldUuid } from '../../../state/worlds'

export default ({ uuidList }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    return () => dispatch(setCurrentWorldUuid(null))
  }, [])

  return (
    <View>
      <FlatList
        data={uuidList}
        keyExtractor={(item) => item.uuid}
        renderItem={({ item }) => (
          <View>
            <Text>{item}</Text>
            <Ideas worldUuid={item} />
          </View>
        )}
      />
    </View>
  )
}
