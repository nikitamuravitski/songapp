import React from 'react'
import { useSelector } from 'react-redux'
import WorldsView from '../components/Worlds'
import { getWorldsData } from '../../../state/worlds'

export default () => {
  let data = useSelector(getWorldsData)

  return <WorldsView data={Object.keys(data)} />
}
