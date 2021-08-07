import { createSelector } from '@reduxjs/toolkit'

export const getCurrentProjectUuid = (state) => state.Projects.currentProjectUuid
export const getProjectsData = (state) => state.Projects.projectsData
export const getCurrentProject = createSelector(
  getCurrentProjectUuid,
  getProjectsData,
  (currentProjectUuid, projectsData) => {
    if (currentProjectUuid === null) return null
    return projectsData[currentProjectUuid]
  }
)

export const getProjectData = projectUuid => state => state.Projects.projectsData[projectUuid]
