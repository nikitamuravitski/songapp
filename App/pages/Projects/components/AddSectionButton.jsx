import React from 'react'
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native'


export default ({ index, addButtonPressHandler }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => addButtonPressHandler(index)}
  >
    <Image source={require('../../../assets/add.png')} style={{ position: 'relative', width: 12, height: 12 }} />
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'flex-end',
    paddingBottom: 6,
    alignItems: 'center',
    width: 30,
    height: 30,
    bottom: 3,
    right: 40,

    backgroundColor: 'white',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.22,
    shadowRadius: 3.22,

    elevation: 2
  }
})
