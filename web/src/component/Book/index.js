import React, {Component} from 'react'
import {Row, Col, Button, Popover, message} from 'antd'
import './index.less'
import book from '../../image/1.jpg'

class Book extends Component {
    state = {
        books: [book, book, book, book, book, book, book, book, book]
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
        const content = (
            <div>
                <p>书名:成风破浪</p>
                <p>作者:三毛</p>
                <p>出版日期:2000.1.2</p>
                <p>位置:39行3列</p>
            </div>
        )
        let bookArr = this.state.books
        return (
            <div className='container'>
                <p className="title">
                    图书列表
                </p>
                <Row className="bookRow">
                    {
                        bookArr.map((item, index)=> {
                            return <Col span={6}>
                                <div className="bookDetail">
                                    <Popover placement="right" content={content} title="图书信息">
                                        <img src={item} alt="12"/>
                                    </Popover>
                                    <div className="bookInfo">
                                        书名:成风破浪
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
