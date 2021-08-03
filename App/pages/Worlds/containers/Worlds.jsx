import React from 'react'
import { useSelector } from 'react-redux'
import WorldsView from '../components/Worlds'
import { getWorldsData } from '../../../state/worlds'

export default () => {
  let worldsData = useSelector(getWorldsData)

  return <WorldsView uuidList={Object.keys(worldsData)} />
}
