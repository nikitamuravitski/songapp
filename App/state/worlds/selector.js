import { createSelector } from '@reduxjs/toolkit'

const getCurrentWorldUuid = (state) => state.Worlds.currentWorldUuid
export const getWorldsData = (state) => state.Worlds.worldsData
export const getCurrentWorld = createSelector(
  getCurrentWorldUuid,
  getWorldsData,
  (currentWorldUuid, worldsData) => {
    console.log(currentWorldUuid)
    if (currentWorldUuid === null) return null
    return { [currentWorldUuid]: worldsData[currentWorldUuid] }
  }
)
