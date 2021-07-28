import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import RecentIdeasList from '../../Ideas/containers/List'
import RecentProjectsList from '../../Projects/containers/List'

export default () => {
  return (
    <ScrollView style={styles.container}>
      <RecentProjectsList recent />
      <RecentIdeasList recent />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
