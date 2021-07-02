import React from 'react'
import { ProjectsView } from './ProjectsView'
import { useNavigation } from '@react-navigation/native';

export const ProjectsContainer = (props) => {
    const navigation = useNavigation();
    const pressHandler = (params) => {
        navigation.push('Project', {
            screen: 'Project Page',
            params: { ...params }
        })
    }
    return <ProjectsView pressHandler={pressHandler} {...props} />
}