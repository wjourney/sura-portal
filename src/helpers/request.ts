export interface IFetchConfig {
  server?: string
  resource?: string
  payload?: object
  params?: object
  method?: 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT'
  token?: string
  contentType?: string
  headers?: object
  credentials?: string
  timeout?: number
}

export const baseUrl = {
  localhost: 'http://localhost:3001'
}

const processPayloadWithContentType = (payload: any, contentType: any) => {
  switch (contentType) {
    case 'application/json': {
      return JSON.stringify(payload)
    }
    default: {
      return payload
    }
  }
}
git 
const queryParamsStringify = (params: object | undefined) => {
  let queryString = ''
  if(params){
    Object.entries(params).forEach((param)=>{
      
    })
  }
}

 export const request = ({
  server = baseUrl.localhost,
  resource,
  method = 'GET',
  params,
  payload,
  contentType,
  headers = {},
  timeout = 1000 * 60 // 1 minute for default timeout
}: IFetchConfig) => {

  const url = `${server}${resource ? `/${resource}` : ''}`

  if (payload) {
    if (!contentType) {
      contentType = 'application/json'
    }
    payload = processPayloadWithContentType(payload, contentType)
  }

  if (contentType) {
    headers = {
      ...headers,
      'Content-Type': contentType
    }
  }

  const controller = new AbortController()
  const signal = controller.signal

  if (timeout) {
    setTimeout(() => {
      controller.abort()
    }, timeout)
  }

  let status: number
  return fetch(url, { method, body: payload, headers, signal, contentType } as any)
  .then((response) => {
    status = response.status
    return (response.json())
  })
  .then((body) => {
    return body
  })
  .catch((err) => {
    throw err
  })
}