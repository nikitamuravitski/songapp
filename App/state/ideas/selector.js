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
