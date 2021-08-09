import React from 'react'
import { TouchableOpacity } from 'react-native'
import Section from '../containers/Section'
import DraggableFlatList from 'react-native-draggable-flatlist'
import { useDispatch } from 'react-redux'
import { updateSectionsOrder } from '../../../state/projects'
export default ({
  sectionUuidList
}) => {
  const dispatch = useDispatch()
  return <DraggableFlatList
    data={sectionUuidList}
    keyExtractor={item => item}
    renderItem={({ item, index, drag }) => {
      return (
        <TouchableOpacity onLongPress={drag}>
          <Section
            index={index}
            sectionUuid={item}
          />
        </TouchableOpacity>
      )
    }}
    // onDragBegin={index => }
    onDragEnd={({ data }) => dispatch(updateSectionsOrder(data))}
  />
}
