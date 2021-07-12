import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import { Paper } from '../../components/Paper'

export const ProjectsView = ({ recent, pressHandler }) => {
  let projectsData = useSelector(state => state.Projects.projectsData)
  projectsData = Array.from(Object.values(projectsData))
  const recentProjectsData = projectsData.slice(0, 3)
  if (recent) {
    return (
      <View>
        <Text>Recent Projects</Text>
        <FlatList
          data={recentProjectsData}
          keyExtractor={(item) => item.projectUuid}
          renderItem={({ item }) => {
            return (
              <Paper
                worldUuid={item.worldUuid}
                uuid={item.projectUuid}
                key={item.projectUuid}
                name={item.name}
                content={item.sections[Object.keys(item.sections)[0]].content}
                type='PROJECT'
                pressHandler={pressHandler}
              />
            )
          }}
        />
      </View>
    )
  } else {
    return (
      <View>
        <FlatList
          data={projectsData}
          keyExtractor={(item) => item.projectUuid}
          renderItem={({ item }) => <Paper
            worldUuid={item.worldUuid}
            uuid={item.projectUuid}
            key={item.projectUuid}
            name={item.name}
            content={item.sections[Object.keys(item.sections)[0]].content}
            type='PROJECT'
            pressHandler={pressHandler}
                                    />}
        />
      </View>
    )
  }
}
