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
        sectionsOrder: ['section6', 'section2', 'section3', 'section4', 'section5', 'section1'],
        sections: {
          section1: {
            sectionUuid: 'section1',
            type: 'TEXT',
            name: 'Papa has',
            content: 'May be me msl of;dsk og'
          },
          section2: {
            sectionUuid: 'section2',
            type: 'TEXT',
            name: 'Papa has',
            content: 'May be me msl of;dsk og'
          },
          section3: {
            sectionUuid: 'section3',
            type: 'TEXT',
            name: 'Papa has',
            content: 'May be me msl of;dsk og'
          },
          section4: {
            sectionUuid: 'section4',
            type: 'TEXT',
            name: 'Papa has',
            content: 'May be me msl of;dsk og'
          },
          section5: {
            sectionUuid: 'section5',
            type: 'TEXT',
            name: 'Papa has',
            content: 'May be me msl of;dsk og'
          },
          section6: {
            sectionUuid: 'section6',
            type: 'TEXT',
            name: 'Papa has',
            content: 'May be me msl of;dsk og'
          }
        }
      }
    } // {projectUuid: {uuid: string, name: string, content: object }}
  },
  reducers: {
    setCurrentProjectUuid: (state, action) => {
      state.currentProjectUuid = action.payload
    },
    changeSectionContent: (state, action) => {
      const { projectUuid, sectionUuid, content } = action.payload
      state.projectsData[projectUuid].sections[sectionUuid].content = content
    },
    changeSectionName: (state, action) => {
      const { projectUuid, sectionUuid, name } = action.payload
      state.projectsData[projectUuid].sections[sectionUuid].name = name
    },
    createProject: (state, action) => {
      const { projectUuid, worldUuid, name, sectionUuid } = action.payload
      const newSection = {
        sectionUuid,
        type: 'TEXT',
        name: 'New section',
        content: ''
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
    addSection: (state, action) => {
      const { index, newSectionUuid, projectUuid } = action.payload
      state.projectsData[projectUuid].sectionsOrder.splice(index + 1, 0, newSectionUuid)
      const newSection = {
        sectionUuid: newSectionUuid,
        type: 'TEXT',
        name: 'New section',
        content: ''
      }
      state.projectsData[projectUuid].sections[newSectionUuid] = newSection
    }
    // remove: (state, action) => {
    //   const { uuid } = action.payload
    //   state.ideas = state.ideas.filter(ideaUuid => ideaUuid !== uuid)
    // }
  }
})

export const { createProject, changeSectionContent, changeSectionName, addSection, setCurrentProjectUuid } = projectsSlice.actions
export const { reducer } = projectsSlice
