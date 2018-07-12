import React, {Component} from 'react'
import {Button} from 'antd'
import './index.less'

class Home extends Component {
    render() {
        return (
            <div className='App'>
                <p className="text">
                    Welcome Biblioteca Library!
                </p>
                <p className="btn">
                    <Button type="primary">查看图书</Button>
                </p>
            </div>
        )
    }
}

export default Home
