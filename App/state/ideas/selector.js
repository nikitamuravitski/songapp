import { createSelector } from '@reduxjs/toolkit'

export const getCurrentIdeaUuid = (state) => state.Ideas.currentIdeaUuid
export const getIdeasData = (state) => state.Ideas.ideasData
export const getCurrentIdea = createSelector(
  getCurrentIdeaUuid,
  getIdeasData,
  (currentIdeaUuid, ideasData) => {
    if (currentIdeaUuid === null) return null
    return ideasData[currentIdeaUuid]
  }
)
export const getIdeasList = worldUuid => state => {
  if (!worldUuid) return null
  const ideasUuidList = state.Ideas.ideas[worldUuid]
  const ideasList = ideasUuidList.map(uuid => state.Ideas.ideasData[uuid])
  console.log(ideasList)
  return ideasList
}
const getRecentIdeasUuids = state => state.Ideas.recentIdeasUuidList
export const getRecentIdeasList = createSelector(
  getRecentIdeasUuids,
  getIdeasData,
  (recentIdeasUuidList, ideasData) => {
    const recentIdeasList = recentIdeasUuidList.map(uuid => ideasData[uuid])
    return recentIdeasList
  }
)