import HTTP_METHOD from '../constant/httpMethod'
import HTTP_STATUS_CODES from 'http-status-codes'
import {message} from 'antd'

async function errHandler(res) {
    if (res.status === HTTP_STATUS_CODES.BAD_REQUEST) {
        const body = await res.json()
        message.error(body.message)
        return null
    }

    if (res.status === HTTP_STATUS_CODES.FORBIDDEN) {
        // window.location.href = process.env.REACT_APP_CAS_LOGIN_URL
    }

    message.error('服务器出错啦!')
    return null
}

export const get = async (url) => {
    try {
        const res = await fetch(url, {
            method: HTTP_METHOD.GET,
            credentials: 'include',
            headers: new Headers({
                'Content-Type': 'application/json;charset=utf-8',
                'Accept': 'application/json'
            })
        })
        if (!res.ok) {
            return errHandler(res)
        }

        const status = res.status
        const body = await res.json()
        return Object.assign({}, {body}, {status})
    } catch (ex) {
        alert(ex)
    }
}

export const del = async (url) => {
    try {
        const res = await fetch(url, {
            method: HTTP_METHOD.DELETE,
            credentials: 'include'
        })

        if (!res.ok) {
            return errHandler(res)
        }

        const status = res.status
        const body = await res.json()
        return Object.assign({}, {body}, {status})
    } catch (ex) {
        alert(ex)
    }
}

export const post = async (url, user) => {
    try {
        const res = await fetch(url, {
            method: HTTP_METHOD.POST,
            credentials: 'include',
            headers: new Headers({
                'Content-Type': 'application/json;charset=utf-8',
                'Accept': 'application/json'
            }),
            body: JSON.stringify(user)
        })

        if (!res.ok) {
            return errHandler(res)
        }

        const status = res.status
        const body = await res.json()
        return Object.assign({}, {body}, {status})
    } catch (ex) {
        alert(ex)
    }
}

export const update = async (url, data) => {
    try {
        const res = await fetch(url, {
            method: HTTP_METHOD.PUT,
            credentials: 'include',
            headers: new Headers({
                'Content-Type': 'application/json;charset=utf-8',
                'Accept': 'application/json'
            }),
            body: JSON.stringify(data)
        })

        if (!res.ok) {
            return errHandler(res)
        }

        let {status} = res
        let body = status === 204 ? {} : await res.json()
        return Object.assign({}, {body}, {status})
    } catch (ex) {
        alert(ex)
    }
}
