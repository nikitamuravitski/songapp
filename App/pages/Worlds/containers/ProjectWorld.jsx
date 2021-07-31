import React from 'react'
import { useSelector } from 'react-redux'
import WorldsView from '../components/ProjectWorld'
import { getCurrentWorld } from '../../../state/worlds'

export default () => {
  let world = useSelector(getCurrentWorld)
  return <WorldsView name={world.name} worldUuid={world.uuid} />
}
