import React, {Component} from 'react'
import {Button} from 'antd'
import './index.less'

class Home extends Component {

    handleClick() {
        this.props.history.push("/login");
    }

    render() {
        return (
            <div className='App'>
                <p className="text">
                    Welcome Biblioteca Library!
                </p>
                <p className="btn">
                    <Button type="primary" onClick={this.handleClick.bind(this)}>登录</Button>
                </p>
            </div>
        )
    }
}

export default Home
