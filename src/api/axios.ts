import axios from "axios";
// import Cookies from "js-cookie"

// export function updateTokens(accessToken: string, refreshToken: string): void {
//     Cookies.set("access_token", accessToken, { secure: true, sameSite: "strict" });
//     Cookies.set("refresh_token", refreshToken, { secure: true, sameSite: "strict" });
// }

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    }
})

// api.interceptors.response.use(response => response, async error => {
//     const origionalRequest = error.config;

//     if (error.resposne && error.response.status === 401 && !origionalRequest._retry) {
//         origionalRequest._retry = true;
//         const refreshToken = Cookies.get("refresh_token");

//         if (refreshToken) {

//             try {
//                 const response = await axios.post(`${import.meta.env.VITE_API_URL}/refresh`, {},
//                     {
//                         headers: {
//                             Authorization: `Bearer ${refreshToken}`,
//                             "Content-Type": "application/json"
//                         }
//                     })

//                 const { accessToken: newAccessToken, refreshToken: newRefreshToken } = response.data
                
//                 updateTokens(newAccessToken, newRefreshToken);

//                 origionalRequest.headers.Authorization = `Bearer ${newAccessToken}`
//                 return api(origionalRequest)

//             } catch (error) {
//                 Cookies.remove("access_token");
//                 Cookies.remove("refresh_token");
//             }

//         }
//         return Promise.reject(error)
//     }
// })

// api.interceptors.request.use((config) => {
//     const token = Cookies.get("access_token")
//     console.log(token)
//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`
//     }
//     return config;
// })

export default api;