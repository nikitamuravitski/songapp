import React from 'react'
import { useSelector } from 'react-redux'
import { WorldsView } from './WorldsView'
import { getCurrentWorld, getWorldsData } from '../../state/worlds'

export const WorldsContainer = () => {
  let data = useSelector(getCurrentWorld)
  console.log(1, data)
  if (data === null) data = useSelector(getWorldsData)
  console.log(2, data)
  return <WorldsView data={data} />
}
