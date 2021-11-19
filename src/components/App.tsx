import React from 'react'
import {StyleSheet, View} from 'react-native'
import {Provider} from 'react-redux'
import config from '../config'

import configureStore from '../store/index'
import Connector from './Connector'

const App = () => {
  const store = configureStore()

  return (
    <Provider store={store}>
      <View style={style.baseView}>
        {/* <WeirdShit /> */}
        <Connector
          tvIp={config.tvIp}
          serverIp={config.serverIp}
          serverPort={config.serverPort}
        />
      </View>
    </Provider>
  )
}

const style = StyleSheet.create({
  baseView: {
    backgroundColor: '#2d2d2d',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default App
