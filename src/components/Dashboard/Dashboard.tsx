import React, {Fragment, useEffect} from 'react'
import {Pressable, StyleSheet, Text, View} from 'react-native'
import {DefaultRootState, useDispatch, useSelector} from 'react-redux'
import {
  tvRequestConnect,
  tvRequestGetCurrentChannel,
  tvRequestSetChannel,
} from '../../store/actions/tvStatus'
import {tvStatusSelector} from '../../store/reducers/tvStatus'
import {Channel, TvStatusState} from '../../store/reducers/types'

const TvControl = () => {
  const currentChannel = useSelector(tvStatusSelector).currentChannel
  const isConnected =
    useSelector(tvStatusSelector).connectionState === 'CONNECTED'

  const dispatch = useDispatch()
  useEffect(() => {
    if (isConnected) {
      dispatch(tvRequestGetCurrentChannel())
    }
  }, [isConnected])

  const onChannelUpClick = () => {
    dispatch(tvRequestSetChannel((currentChannel as Channel).number + 1))
  }
  const onChannelDownClick = () => {
    dispatch(tvRequestSetChannel((currentChannel as Channel).number - 1))
  }

  return (
    <View style={styles.base}>
      <Text style={styles.text}>Aktueller Kanal:</Text>
      <Text style={[styles.text, styles.textLarge]}>
        {(currentChannel && currentChannel.name) || '-'}{' '}
      </Text>

      {currentChannel && (
        <View style={styles.buttons}>
          <View style={{marginVertical: 10}}>
            <Pressable style={styles.button} onPress={onChannelUpClick}>
              <Text style={styles.buttonText}>+</Text>
            </Pressable>
          </View>
          <View style={{marginVertical: 10}}>
            <Pressable style={styles.button} onPress={onChannelDownClick}>
              <Text style={styles.buttonText}>-</Text>
            </Pressable>
          </View>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  base: {
    alignContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Exo2-Regular',
    fontSize: 20,
    color: '#eeeeee',
    marginBottom: 20,
  },

  textLarge: {
    fontFamily: 'Exo2-Bold',
    color: '#BEDB4D',
  },

  buttons: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
  },

  button: {
    backgroundColor: '#BEDB4D',
    width: '100%',
  },

  buttonText: {
    padding: 20,
    fontFamily: 'Exo2-Boold',
    fontSize: 40,
    textAlign: 'center',
    color: '#2d2d2d',
  },
})

export default TvControl
