import axios from "axios";

import {baseURL} from "../constants";

const axiosService = axios.create({baseURL})

const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODJlN2Q1M2M3MTQ3OTFmZj' +
    'czZmU4NzA3ODdmMDgxNSIsInN1YiI6IjU3ZWE0NjY0OTI1MTQxMTA4OTAwOGZjNCIsInNjb3BlcyI6Wy' +
    'JhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lEEivZliSc_G_UGJbP8p1LRlPXWu3U9erTCsUnRWP_U'
axiosService.interceptors.request.use(res => {
    if (accessToken) {
        res.headers.Authorization = `Bearer ${accessToken}`
    }
    return res
})

export {axiosService}