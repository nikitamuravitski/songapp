import React, { useCallback } from 'react'
import {
  View,
  Text,
  FlatList,
  StyleSheet
} from 'react-native'
import { Paper } from '../../../components/Paper'

export default ({ pressHandler, projects, name }) => {
  const getContent = useCallback((project) => {
    let sectionUuid = project.sectionsOrder[0]
    let versionUuid = project.sections[sectionUuid].currentVersion
    let content = project.sections[sectionUuid].versions[versionUuid].content
    return content
  }, [])
  return (
    <View>
      <Text style={styles.name}>{name}</Text>
      <FlatList
        data={projects}
        keyExtractor={item => item.projectUuid}
        renderItem={({ item }) => {
          return (
            <Paper
              worldUuid={item.worldUuid}
              uuid={item.projectUuid}
              name={item.name}
              content={getContent(item)}
              type='PROJECT'
              pressHandler={pressHandler}
            />
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  name: {
    paddingLeft: 20,
    paddingTop: 10
  }
})