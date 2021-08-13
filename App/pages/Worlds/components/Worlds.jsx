import React, { useEffect } from 'react'

import { View, Text, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Ideas from '../../Ideas/containers/List'
import { setCurrentWorldUuid } from '../../../state/worlds'
import { StyleSheet } from 'react-native'

export default ({ uuidList }) => {
  const dispatch = useDispatch()

  // useEffect(() => {
  //   return () => dispatch(setCurrentWorldUuid(null))
  // }, [])

  return (
    <View>
      <FlatList
        data={uuidList}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.name}>{item}</Text>
            <Ideas worldUuid={item} />
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  name: {
    paddingTop: 10,
    paddingLeft: 20
  }
})