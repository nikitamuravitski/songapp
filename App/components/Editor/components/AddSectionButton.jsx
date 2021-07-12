import React from 'react'
import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import uuid from 'react-native-uuid'
import { useDispatch } from 'react-redux'
import { addSection } from '../../../state/projects'

export const AddSectionButton = ({ index, projectUuid }) => {
  const dispatch = useDispatch()
  const newSectionUuid = `section.${uuid.v4()}`

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => dispatch(addSection({ index, newSectionUuid: newSectionUuid, projectUuid }))}
    >
      <Image source={require('../../../assets/add.png')} style={{ width: 14, height: 14 }} />
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'flex-end',
    paddingBottom: 8,
    alignItems: 'center',
    width: 30,
    height: 20,
    bottom: -20,
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
    zIndex: -1,
    elevation: 0
  }
})
