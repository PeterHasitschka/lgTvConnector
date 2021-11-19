import Api from '.'
import {API_CMD_GETCURRENTCHANNEL, API_CMD_SETCHANNEL} from '../constants/api'
import {Channel} from '../store/reducers/types'

export const callGetCurrentChannel = async (): Promise<Channel | false> => {
  const {result} = (await Api().call(API_CMD_GETCURRENTCHANNEL, null)).data
  if (result) {
    return {
      name: result.name,
      number: result.number,
    }
  }
  return false
}
export const callSetChannel = async (channelNumber: number): Promise<void> => {
  await Api().call(API_CMD_SETCHANNEL, channelNumber)
  return
}
