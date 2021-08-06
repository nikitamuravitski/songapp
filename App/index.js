import React from 'react'
import 'react-native-gesture-handler'
import App from './App'
import { registerRootComponent } from 'expo'
import store from './store'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'react-native-elements'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { MenuProvider } from 'react-native-popup-menu';
const Main = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <SafeAreaProvider>
          <MenuProvider>
            <App />
          </MenuProvider>
        </SafeAreaProvider>
      </ThemeProvider>
    </Provider>
  )
}

export default registerRootComponent(Main)
