import React from 'react'
import { View, Text } from 'react-native'
import { Paper } from '../../components/Paper'

export const ProjectsView = ({ recent, pressHandler }) => {
    const data = [
        {
            name: 'Project 1',
            content: {
                sections: ['asdfja jasdlk jasdfkl ', 'cpovbirncvbpowen']
            }
        },
        {
            name: 'Project 2',
            content: {
                sections: ['sadhiu oidkjfgjio oidfg ', 'jsdfgjlkj jd dgj']
            }
        }
    ]
    if (recent) {
        const renderList = data.map(project => <Paper 
            key={project.name} 
            name={project.name} 
            content={project.content.sections[0] + project.content.sections[1]} // gibberish for now
            onPressHandler={pressHandler}
            />)
        return (
            <View>
                <Text>Recent Projects</Text>
                {renderList}
            </View>
        )
    }
    return (
        <View>
            <Text>
                Projects Screen
            </Text>
        </View>
    )
}
