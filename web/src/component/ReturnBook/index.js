import React, {Component} from 'react'
import {Form, Icon, Input, Button, message} from 'antd'
import './index.less'

const FormItem = Form.Item

class ReturnBook extends Component {
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err) => {
            if (!err) {
                message.success("还书成功!")
            } else {
                message.error("还书失败!")
            }
        });

    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div className='returnBook'>
                <Form>
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{required: true, message: '请输入用户名!'}],
                        })(
                            <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                   placeholder="用户名"/>
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('number', {
                            rules: [{required: true, message: '请输入图书编号!'}],
                        })(
                            <Input prefix={<Icon type="profile" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                   placeholder="图书编号"/>
                        )}
                    </FormItem>
                    <FormItem>
                        <Button type="primary" onClick={this.handleSubmit.bind(this)}>
                            提交
                        </Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}

export default Form.create()(ReturnBook)
