import React, {Component} from 'react'
import {Row, Col, Button, Popover, message} from 'antd'
import './index.less'
import books from '../../constant/bookInfo.js'

class Book extends Component {
    state = {
        books: books
    }

    checkoutBook(item, index) {
        let books = this.state.books
        if (item.state) {
            let arr = books.filter((ele => ele.tag !== index + 1));
            this.setState({
                books: arr
            }, () => {
                message.success('借书成功!')
            })
        } else {
            message.info("此书现不可外借!")
        }
    }

    render() {
        let bookArr = this.state.books
        return (
            <div className='container'>
                <p className="title">
                    图书列表
                </p>
                <Row className="bookRow">
                    {
                        bookArr.map((item, index) => {
                            return <Col span={6}>
                                <div className="bookDetail">
                                    <Popover placement="right" content={item.content} title="图书信息">
                                        <img src={item.url} alt="12"/>
                                    </Popover>
                                    <div className="bookInfo">
                                        书名:{item.name}
                                        <Button type="primary" size="small" className="btn"
                                                onClick={this.checkoutBook.bind(this, item, index)}>借书</Button>
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
