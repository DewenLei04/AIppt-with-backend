import axios from './config'

// export const SERVER_URL = 'http://localhost:5000'
// export const SERVER_URL = (import.meta.env.MODE === 'development') ? '/api' : 'https://server.pptist.cn'
export const SERVER_URL = '/api'
// 开发环境使用外部资源，生产环境使用本地资源
export const ASSET_URL = (import.meta.env.MODE === 'development') ? 'https://asset.pptist.cn/data' : '/mocks'
// 图片资源URL - 开发环境使用外部CDN，生产环境使用本地
export const IMAGE_URL = (import.meta.env.MODE === 'development') ? 'https://asset.pptist.cn' : '/mocks'

export default {
  getMockData(filename: string): Promise<any> {
    return axios.get(`./mocks/${filename}.json`)
  },

  getFileData(filename: string): Promise<any> {
    return axios.get(`${ASSET_URL}/${filename}.json`)
  },

  AIPPT_Outline(
    content: string,
    language: string,
    model: string,
  ): Promise<any> {
    return fetch(`${SERVER_URL}/tools/aippt_outline`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content,
        language,
        model,
        stream: true,
      }),
    })
  },

  AIPPT(
    content: string,
    language: string,
    model: string,
  ): Promise<any> {
    return fetch(`${SERVER_URL}/tools/aippt`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content,
        language,
        model,
        stream: true,
      }),
    })
  },
}