import React from 'react'
import 'react-native-gesture-handler'
import App from './App'
import { registerRootComponent } from 'expo'
import store from './store'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'react-native-elements'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const Main = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <SafeAreaProvider>
          <App />
        </SafeAreaProvider>
      </ThemeProvider>
    </Provider>
  )
}

export default registerRootComponent(Main)