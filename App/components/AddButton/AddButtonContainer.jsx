import React from 'react'
import { useEffect } from 'react'
import { AddButtonView } from './AddButtonView'
import { useNavigation } from '@react-navigation/native';
import {v5 as uuid} from 'uuid'

export const AddButtonContainer = (props) => {
    const navigation = useNavigation();
    const pressHandler = () => {
        navigation.navigate('Editor', { name: 'New Idea', uuid: 'uuid' })
    }
    return <AddButtonView pressHandler={pressHandler} {...props}/>
}