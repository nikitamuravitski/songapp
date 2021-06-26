import React from 'react'
import { ProjectsView } from './ProjectsView'
import { useNavigation } from '@react-navigation/native';

export const ProjectsContainer = (props) => {
    const navigation = useNavigation();
    const pressHandler = () => {
        navigation.push('Editor')
    }
    return <ProjectsView pressHandler={pressHandler} {...props}/>
}