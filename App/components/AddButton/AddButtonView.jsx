import React from 'react'
import { FAB as Fab } from 'react-native-elements' // eslint fix
import { StyleSheet, View } from 'react-native'

export const AddButtonView = ({ pressHandler, buttonTitle }) => {
  return (
    <View style={styles.wrapper}>
      <Fab title={buttonTitle} onPress={pressHandler} />
    </View>
  )
}
const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 40,
    right: 20
  }
})
