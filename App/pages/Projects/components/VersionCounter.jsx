import React from 'react'
import { StyleSheet } from 'react-native'
import { View } from 'react-native'

const Circle = ({ highlighted }) => {

  return <View
    style={[styles.circle, highlighted ? styles.highlighted : null]}
  />
}

export default ({ versionsList, currentVersionUuid }) => {
  if (versionsList.length < 2) return null
  const circles = versionsList.map(version => {
    if (version.versionUuid === currentVersionUuid) return <Circle highlighted={true} />
    return <Circle />
  })
  return <View style={styles.container}>
    {circles}
  </View>
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'absolute',
    right: 10,
    bottom: 10
  },
  circle: {
    margin: 5,
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: '#dadada'
  },
  highlighted: {
    backgroundColor: '#646464'
  }
})