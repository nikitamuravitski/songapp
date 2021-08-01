import React from 'react'
import IdeasView from '../components/List'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentIdeaUuid, getIdeasList, getRecentIdeasList } from '../../../state/ideas'
import RecentIdeasView from '../components/Recent'


export default ({ worldUuid, recent }) => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  let ideasList = useSelector(getIdeasList(worldUuid)) // [idea3, idea4]
  let recentIdeasList = useSelector(getRecentIdeasList)
  console.log(recentIdeasList)
  const pressHandler = (params) => {
    navigation.push('Editor', { ...params })
    dispatch(setCurrentIdeaUuid(params.uuid))
  }
  if (recent) {
    // for now, needs to be properly reworked by date
    return <RecentIdeasView data={recentIdeasList} pressHandler={pressHandler} />
  }
  return <IdeasView data={ideasList} pressHandler={pressHandler} />
}
