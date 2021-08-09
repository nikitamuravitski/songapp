import { createSlice } from '@reduxjs/toolkit'

const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    currentProjectUuid: null,
    projects: ['papa'], // ['projectuuid', ...]
    projectsData: {
      papa: {
        projectUuid: 'papa',
        worldUuid: 'unsorted',
        name: 'papa',
        sectionsOrder: ['section1', 'section2', 'section3'],
        sections: {
          section1: {
            sectionUuid: 'section1',
            type: 'TEXT',
            name: 'Papa has',
            currentVersion: 'version3',
            versions: {
              'version3': {
                versionUuid: 'version3',
                content: '1'
              }
            }
          },
          section2: {
            sectionUuid: 'section2',
            type: 'TEXT',
            name: 'Papa has',
            currentVersion: 'version2',
            versions: {
              'version2': {
                versionUuid: 'version2',
                content: '2'
              }
            }
          },
          section3: {
            sectionUuid: 'section3',
            type: 'TEXT',
            name: 'Papa has',
            currentVersion: 'version1',
            versions: {
              'version1': {
                versionUuid: 'version1',
                content: '3'
              }
            }
          }
        }
      }
    }
  },
  reducers: {
    createProject: (state, action) => {
      const { projectUuid, worldUuid, name, sectionUuid, versionUuid } = action.payload
      const newSection = {
        sectionUuid,
        type: 'TEXT',
        name: 'New section',
        currentVersion: versionUuid,
        versions: {
          [versionUuid]: {
            versionUuid,
            content: ''
          }
        }
      }
      const newProject = {
        projectUuid,
        worldUuid,
        name,
        sectionsOrder: [],
        sections: {}
      }
      state.projects.push(projectUuid)
      state.projectsData[projectUuid] = newProject
      state.projectsData[projectUuid].sections[sectionUuid] = newSection
      state.projectsData[projectUuid].sectionsOrder.push(sectionUuid)
    },
    setCurrentProjectUuid: (state, action) => {
      state.currentProjectUuid = action.payload
    },
    renameProject: (state, action) => {
      const { projectUuid, newName } = action.payload
      state.projectsData[projectUuid].name = newName
    },
    changeVersionContent: (state, action) => {
      const { projectUuid, sectionUuid, versionUuid, content } = action.payload
      state.projectsData[projectUuid].sections[sectionUuid].versions[versionUuid].content = content
    },
    changeSectionName: (state, action) => {
      const { projectUuid, sectionUuid, name } = action.payload
      state.projectsData[projectUuid].sections[sectionUuid].name = name
    },
    addVersion: (state, action) => {
      const { sectionUuid, versionUuid, projectUuid } = action.payload
      const newVersion = {
        versionUuid,
        content: ''
      }
      state.projectsData[projectUuid].sections[sectionUuid].versions[versionUuid] = newVersion
    },
    copyVersion: (state, action) => {
      const { projectUuid, sectionUuid, versionUuid, newVersionUuid } = action.payload
      let contentOfVersionToCopyFrom = state.projectsData[projectUuid].sections[sectionUuid].versions[versionUuid].content
      const newVersion = {
        versionUuid: newVersionUuid,
        content: contentOfVersionToCopyFrom
      }
      state.projectsData[projectUuid].sections[sectionUuid].versions[newVersionUuid] = newVersion
    },
    addSection: (state, action) => {
      const { index, newSectionUuid, projectUuid, versionUuid } = action.payload
      state.projectsData[projectUuid].sectionsOrder.splice(index + 1, 0, newSectionUuid)
      const newSection = {
        sectionUuid: newSectionUuid,
        type: 'TEXT',
        name: 'New section',
        currentVersion: versionUuid,
        versions: {
          [versionUuid]: {
            versionUuid,
            content: ''
          }
        }
      }
      state.projectsData[projectUuid].sections[newSectionUuid] = newSection
    },
    copySection: (state, action) => {
      const { projectUuid, sectionUuid, newSectionUuid, index } = action.payload
      const sectionToCopyFrom = state.projectsData[projectUuid].sections[sectionUuid]
      const newSection = {
        ...sectionToCopyFrom,
        sectionUuid: newSectionUuid
      }
      state.projectsData[projectUuid].sections[newSectionUuid] = newSection
      state.projectsData[projectUuid].sectionsOrder.splice(index, 0, newSectionUuid)
    },
    updateSectionsOrder: (state, action) => {
      const currentProjectUuid = state.currentProjectUuid
      state.projectsData[currentProjectUuid].sectionsOrder = action.payload
    }
    // remove: (state, action) => {
    //   const { uuid } = action.payload
    //   state.ideas = state.ideas.filter(ideaUuid => ideaUuid !== uuid)
    // }
  }
})

export const {
  createProject,
  setCurrentProjectUuid,
  renameProject,

  changeVersionContent,
  changeSectionName,
  addSection,
  addVersion,
  copyVersion,
  copySection,
  updateSectionsOrder

} = projectsSlice.actions
export const { reducer } = projectsSlice
