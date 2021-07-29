import React from 'react'
import IdeasView from '../components/List'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { getIdeasData, setCurrentIdeaUuid } from '../../../state/ideas'
import RecentIdeasView from '../components/Recent'
import { Text } from 'react-native'

export default ({ recent }) => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  let data = useSelector(getIdeasData)
  data = Object.values(data)

  const pressHandler = (params) => {
    navigation.push('Editor', { ...params })
    dispatch(setCurrentIdeaUuid(params.uuid))
  }
  if (recent) {
    data = data.slice(0, 3)
    return <RecentIdeasView data={data} pressHandler={pressHandler} />
  }
  return <IdeasView data={data} pressHandler={pressHandler} />
}
