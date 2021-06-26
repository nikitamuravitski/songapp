import React from 'react'
import { View, Text } from 'react-native'
import { Paper } from '../../components/Paper'

export const IdeasView = ({ recent, pressHandler }) => {
    const data = [
        {
            uuid: 'idea.1',
            name: 'Idea 1',
            content: 'jasdfa;sdkfa asd;fkasdf'
        },
        {
            uuid: 'idea.2',
            name: 'Idea 2',
            content: 'jshdfa jasdfi ipfvb ;wer '
        },
        {
            uuid: 'idea.3',
            name: 'Idea 3',
            content: 'Lorem jsdlgksdf  lkdsjfgj '
        }]
    // for rendering 3-4 recent ideas
    // if (recent) {

    const renderList = data.map(idea => <Paper
        uuid={idea.uuid}
        key={idea.name}
        name={idea.name}
        content={idea.content}
        onPressHandler={pressHandler}
    />)

    return (
        <View>
            <Text>Recent Ideas</Text>
            {renderList}
        </View>
    )
    // }
    // // rendering full list
    // return (
    //     <View>
    //         <Text>
    //             Ideas Screen
    //         </Text>
    //     </View>
    // )
}
