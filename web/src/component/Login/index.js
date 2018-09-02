import React, {Component} from 'react'
import {Form, Icon, Input, Button, Checkbox} from 'antd'
import {connect} from 'react-redux'
import {withRouter} from "react-router-dom"
import {login} from '../../action/User'
import './index.less'

const FormItem = Form.Item

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isAgree: true
        }
    }

    handleSubmit() {
        const isAgree = this.state.isAgree
        this.props.form.validateFields((err, values) => {
            console.log(values)
            if (!err && isAgree) {
                this.props.login({
                    email: values.email,
                    password: values.password,
                    remember: values.remember,
                })
            }
        })
    }

    componentWillReceiveProps({user}) {
        if (user.email !== "") {
            this.props.history.push('/menu')
        }
    }

    handleIsAgree(e) {
        const value = e.target.checked
        this.setState({
            isAgree: value
        })

    }

    render() {
        const {getFieldDecorator} = this.props.form
        return (
            <div className='Login'>
                <Form className='login-form'>
                    <div className='login-title'>登录平台</div>
                    <FormItem>
                        {getFieldDecorator('email', {
                            rules: [{required: true, message: '请输入邮箱!'}]
                        })(
                            <Input prefix={<Icon type='user' style={{color: 'rgba(0,0,0,.25)'}}/>}
                                   placeholder='邮箱' type='text'/>
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{required: true, message: '请输入密码!'}]
                        })(
                            <Input prefix={<Icon type='lock' style={{color: 'rgba(0,0,0,.25)'}}/>}
                                   placeholder='密码' type='password'/>
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true
                        })(
                            <Checkbox className='login-remember'>记住我</Checkbox>
                        )}

                        <Checkbox className='protocol'
                                  defaultChecked={this.state.isAgree}
                                  onChange={this.handleIsAgree.bind(this)}>我已同意<a
                            href='#'>用户协议</a></Checkbox>
                        <span className="isAgree">{this.state.isAgree ? "" : "请确认是否同意用户协议!"}</span>
                        <Button type='primary' onClick={this.handleSubmit.bind(this)} htmlType="submit"
                                className='login-form-button'>
                            登录
                        </Button>
                        <div className='login-footer'>
                            <a className='login-form-forgot' href='#'>忘记密码</a>
                            <a href="#">注册</a>
                        </div>
                    </FormItem>

                </Form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user
})

const mapDispatchToProps = dispatch => ({
    login: userData => dispatch(login(userData)),
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Form.create()(Login)))
