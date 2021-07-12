import React from 'react'
import { IdeasView } from './IdeasView'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { getIdeasData, setCurrentIdeaUuid } from '../../state/ideas'
import { RecentIdeasView } from './RecentIdeasView'

export const IdeasContainer = ({ recent }) => {
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
