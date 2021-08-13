import React from 'react'
import { Text, FlatList, View, StyleSheet } from 'react-native'
import { Paper } from '../../../components/Paper'
import EmptyIdeas from './EmptyIdeas'

export default ({ data, pressHandler }) => {
  return (
    <View>
      <Text style={styles.name}>Recent Ideas</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.uuid}
        // numColumns={2}
        renderItem={({ item }) => <Paper
          uuid={item.uuid}
          key={item.uuid}
          name={item.name}
          content={item.content}
          pressHandler={pressHandler}
        />}
        ListEmptyComponent={<EmptyIdeas />}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  name: {
    paddingLeft: 20
  }
})