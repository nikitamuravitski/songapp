import { configureStore } from '@reduxjs/toolkit'
import { reducer as Ideas } from './state/ideas'

import { reducer as Projects } from './state/projects'
import { reducer as Worlds } from './state/worlds'
const store = configureStore({
  reducer: {
    Ideas,
    Projects,
    Worlds
  }
})

export default store
