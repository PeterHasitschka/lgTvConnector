import axios, {AxiosInstance} from 'axios'
import {API_CALL_CMD, API_CALL_CONNECT} from '../constants/api'

let instance: AxiosInstance
const Api = () => {
  const create = (ip: string, port: number) => {
    instance = axios.create({
      baseURL: `http://${ip}:${port}`,
      timeout: 2000,
    })
  }

  const connect = async (tvIp: string) => {
    const res = await instance.post(API_CALL_CONNECT, {
      tvIp,
    })
    return res
  }

  const call = async (cmd: string, data: any) => {
    const res = await instance.post(API_CALL_CMD, {
      cmd,
      data,
    })

    return res
  }

  return {
    create,
    connect,
    call,
  }
}

export default Api
