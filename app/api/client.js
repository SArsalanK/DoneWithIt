import { create } from "apisauce";
import cache from '../utility/cache'
import authStorage from '../auth/storage'

const apiClient = create({ baseURL: 'http://192.168.18.10:9000/api' })
const naviMonitor = response => console.log("BASE URL: " + apiClient.getBaseURL() + "\n" + "API ENDPOINT: " + response.config.url + "\n\n", response)
// apiClient.addMonitor(naviMonitor)

apiClient.addAsyncRequestTransform(async (request) => {
    const authToken = await authStorage.getToken()
    if (!authToken) return
    request.headers['x-auth-token']= authToken
})

const get = apiClient.get
apiClient.get = async (url, params, axiosConfig) => {
    const respone = await get(url, params, axiosConfig)
    if (respone.ok) {
        cache.store(url, respone.data)
        return respone
    }

    const data = await cache.get(url)
    return data ? { ok: true, data } : respone

}

export default apiClient;