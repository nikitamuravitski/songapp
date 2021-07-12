import React from 'react'
import { useSelector } from 'react-redux'
import { WorldsView } from './WorldsView'
import { getCurrentWorld, getWorldsData } from '../../state/worlds'

export const WorldsContainer = () => {
  let data = useSelector(getCurrentWorld)
  if (data === null) data = useSelector(getWorldsData)
  return <WorldsView data={data} />
}
