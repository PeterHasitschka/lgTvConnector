import React, {Component, FunctionComponent, useEffect} from 'react'
import {Text, View} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import Api from '../../api'
import {tvRequestConnect} from '../../store/actions/tvStatus'
import {tvStatusSelector} from '../../store/reducers/tvStatus'
import Dashboard from '../Dashboard'
import {ConnectorProps} from './connector.d'

const Connector: FunctionComponent<ConnectorProps> = ({
  tvIp,
  serverIp,
  serverPort,
}) => {
  const connectionState = useSelector(tvStatusSelector).connectionState

  const dispatch = useDispatch()

  useEffect(() => {
    const api = Api()
    api.create(serverIp, serverPort)

    dispatch(tvRequestConnect(tvIp))
  }, [false])
  return (
    <View>
      {(connectionState === 'CONNECTING' && <Text>Connecting...</Text>) || null}
      {(connectionState === 'ERROR_SERVER' && <Text>Server Error</Text>) ||
        null}
      {(connectionState === 'ERROR_TV' && <Text>TV Error</Text>) || null}

      {(connectionState === 'CONNECTED' && <Dashboard />) || null}
    </View>
  )
}

export default Connector
