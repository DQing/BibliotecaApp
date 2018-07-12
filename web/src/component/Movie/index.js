import React, {Component} from 'react'
import {Row, Col, Button, Popover, message} from 'antd'
import './index.less'
import book from '../../image/1.jpg'

class Movie extends Component {
    state = {
        movies: [book, book, book, book, book, book, book, book, book]
    }

    checkoutBook(index) {
        let movies = this.state.movies
        //假设book5处于不可用状态,借书则会失败
        let arr = []
        for (let i = 0; i < movies.length; i++) {
            if (i == 4 || i != index) {
                arr.push(movies[i])
            }
        }
        this.setState({
            movies: arr
        })
        if (index === 4) {
            message.info("此电影现不可租赁!")
        } else {
            message.success('租赁成功!')
        }
    }

    render() {
        const content = (
            <div>
                <p>电影名称:成风破浪</p>
                <p>导演:三毛</p>
                <p>上映日期:2000.1.2</p>
                <p>位置:39行3列</p>
            </div>
        )
        let movies = this.state.movies
        return (
            <div className='container'>
                <p className="title">
                    电影列表
                </p>
                <Row className="bookRow">
                    {
                        movies.map((item, index)=> {
                            return <Col span={6}>
                                <div className="bookDetail">
                                    <Popover placement="right" content={content} title="电影信息">
                                        <img src={item} alt="12"/>
                                    </Popover>
                                    <div className="bookInfo">
                                        电影名:成风破浪
                                        <Button type="primary" size="small" className="btn"
                                                onClick={this.checkoutBook.bind(this, index)}>租赁</Button>
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

export default Movie
