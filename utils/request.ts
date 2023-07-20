import { SearchParameters } from 'ofetch'
export default function () {
  const apiConfig = useRuntimeConfig().app
  const requestConfig = {
    baseURL: apiConfig.apiWebUrl,
    method: 'GET' as const,
    headers: {
      Accept: 'application/json',
      'Cache-Control': 'no-cache',
      Authorization: ''
    }
  }
  return {
    get: async (path: string, params?: any) => {
      try {
        const { data } = await useFetch(path, {
          ...requestConfig,
          ...{ params }
        })
        return Promise.resolve(data.value)
      } catch (e) {
        return Promise.reject(e)
      }
    }
  }
}
