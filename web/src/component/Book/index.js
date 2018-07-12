import React, {Component} from 'react'
import {Row, Col, Button, Popover} from 'antd'
import './index.less'
import book from '../../image/1.jpg'

class Book extends Component {

    render() {
        const content = (
            <div>
                <p>书名:成风破浪</p>
                <p>作者:三毛</p>
                <p>出版日期:2000.1.2</p>
                <p>位置:39行3列</p>
            </div>
        )
        let bookArr = [book, book, book, book, book, book, book, book, book]
        return (
            <div className='container'>
                <p className="title">
                    图书列表
                </p>
                <Row className="bookRow">
                    {
                        bookArr.map(item=> {
                            return <Col span={6}>
                                <div className="bookDetail">
                                    <Popover placement="right" content={content} title="图书信息">
                                        <img src={item} alt="12"/>
                                    </Popover>
                                    <div className="bookInfo">
                                        书名:成风破浪
                                    </div>

                                </div>
                            </Col>
                        })
                    }
                </Row>
            </div>
        )
    }
}

export default Book
