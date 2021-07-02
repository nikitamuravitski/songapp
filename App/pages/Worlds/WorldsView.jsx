import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import { Paper } from '../../components/Paper'
import { Ideas } from '../Ideas'

export const WorldsView = ({ worldUuid }) => {
    let worldsData = useSelector(state => state.Worlds.worldsData)
    if (worldUuid) worldsData = [worldsData[worldUuid]]
    else worldsData = Array.from(Object.values(worldsData))
    return <View>
        <FlatList
            data={worldsData}
            keyExtractor={(item) => item.uuid}
            renderItem={({ item }) => <View>
                <Text>{item.name}</Text>
                <Ideas worldData={item} />
            </View>
            }
        />
    </View>
}
