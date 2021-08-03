import { createSelector } from '@reduxjs/toolkit'

export const getCurrentWorldUuid = (state) => state.Worlds.currentWorldUuid
export const getWorldsData = (state) => state.Worlds.worldsData
export const getCurrentWorld = createSelector(
  getCurrentWorldUuid,
  getWorldsData,
  (currentWorldUuid, worldsData) => {
    if (currentWorldUuid === null) return null
    return worldsData[currentWorldUuid]
  }
)
