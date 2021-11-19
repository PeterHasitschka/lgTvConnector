export interface Channel {
  name: string
  number: number
}

export type ConnectionState =
  | false
  | 'CONNECTING'
  | 'ERROR_SERVER'
  | 'ERROR_TV'
  | 'CONNECTED'

export interface TvStatusState {
  connectionState: ConnectionState
  pairingKey: string | false
  currentChannel: Channel | false
}
