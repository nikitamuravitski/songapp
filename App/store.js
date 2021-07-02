import { configureStore } from '@reduxjs/toolkit'
import { reducer as Ideas } from './slices/ideasSlice'
import { reducer as Projects } from './slices/projectsSlice'
import { reducer as Worlds } from './slices/worldsSlice'
const store = configureStore({
  reducer: {
    Ideas,
    Projects,
    Worlds
  }
})

export default store