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
export const getIdeasList = ideasUuidArray => state => {
  console.log(ideasUuidArray, state)
  if (!ideasUuidArray.length) return null
  const ideasList = ideasUuidArray.map(uuid => state.Ideas.ideasData[uuid])
  return ideasList
}

