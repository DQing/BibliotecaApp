import React, {Component} from 'react'
import {Row, Col} from 'antd'
import {connect} from 'react-redux'
import {withRouter} from "react-router-dom"
import './index.less'

class User extends Component {
    render() {
        const {name, age, gender, email, address, phone} = this.props.user
        return (
            <div className='User'>
                <Row>
                    <Col span={6}>
                        姓名:{name}
                    </Col>
                    <Col span={6}>
                        年龄:{age}
                    </Col>
                    <Col span={6}>
                        地址:{address}
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>
                        性别:{gender}
                    </Col>
                    <Col span={6}>
                        邮箱:{email}
                    </Col>
                    <Col span={6}>
                        电话号码:{phone}
                    </Col>
                </Row>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    user: state.user
})

const mapDispatchToProps = () => ({})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(User))
