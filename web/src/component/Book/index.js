import React, {Component} from 'react'
import {Row, Col, Button, Popover, message} from 'antd'
import './index.less'
import books from '../../constant/bookInfo.js'

class Book extends Component {
    state = {
        books: books
    }

    checkoutBook(index) {
        let books = this.state.books
        //假设book5处于不可用状态,借书则会失败
        let arr = []
        for (let i = 0; i < books.length; i++) {
            if (i == 4 || i != index) {
                arr.push(books[i])
            }
        }
        this.setState({
            books: arr
        })
        if (index === 4) {
            message.info("此书现不可外借!")
        } else {
            message.success('借书成功!')
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
                                                onClick={this.checkoutBook.bind(this, index)}>借书</Button>
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
