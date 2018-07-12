import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import App from './component/app'
import {AppContainer} from 'react-hot-loader'
import {CookiesProvider} from 'react-cookie';

const store = createStore(reducer, applyMiddleware(thunkMiddleware))

const render = Component => {
    ReactDOM.render(
        <CookiesProvider>
            <Provider store={store}>
                <AppContainer>
                    <Component />
                </AppContainer></Provider>
        </CookiesProvider>,
        document.getElementById('root')
    )
}
render(App)

if (module.hot) {
    module.hot.accept('./component/app', () => {
        render(App)
    })
}
