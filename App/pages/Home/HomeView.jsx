import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { Ideas } from '../Ideas'
import RecentList from '../Projects/containers/List'

export const HomeView = () => {
  return (
    <ScrollView style={styles.container}>
      <RecentList recent />
      {/* <Ideas recent /> */}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
