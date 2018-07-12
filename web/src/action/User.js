import HTTP_STATUS_CODE from 'http-status-codes'
import * as request from '../constant/fetchRequest'
import message from "antd/es/message/index";

export const refreshUser = (data) => ({
    type: 'USER_DETAIL',
    data
})
export const login = (userData) => {
    return dispatch => {
        (async() => {
            const res = await request.post('../api/users', userData)
            if (res && res.status === HTTP_STATUS_CODE.OK) {
                return dispatch(refreshUser(res.body))
            }
        })()
    }
}

export const getUser = (id) => {
    return dispatch => {
        (async() => {
            const res = await request.get(`../api/user/${id}`)
            if (res && res.status === HTTP_STATUS_CODE.OK) {
                return dispatch(refreshUser(res.body))
            }
        })()
    }
}
export const initUser = (value) => {
    return dispatch => {
        return dispatch(refreshUser(value))
    }
}