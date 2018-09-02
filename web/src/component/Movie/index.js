import React, {Component} from 'react'
import {Row, Col, Button, Popover, message} from 'antd'
import './index.less'
import movies from '../../constant/movieInfo'

class Movie extends Component {
    state = {
        movies: movies
    }

    checkoutBook(item, index) {
        let movies = this.state.movies
        if (item.state) {
            this.setState({
                movies: movies.filter((ele) => ele.tag !== index + 1)
            }, () => {
                message.success('租赁成功!')
            })
        } else {
            message.info("此电影现不可租赁!")
        }
    }

    render() {
        let movies = this.state.movies
        return (
            <div className='container'>
                <p className="title">
                    电影列表
                </p>
                <Row className="movieRow">
                    {
                        movies.map((item, index) => {
                            return <Col span={6}>
                                <div className="movieDetail">
                                    <Popover placement="right" content={item.content} title="电影信息">
                                        <img src={item.url} alt="12"/>
                                    </Popover>
                                    <div className="movieInfo">
                                        电影名:{item.name}
                                        <Button type="primary" size="small" className="btn"
                                                onClick={this.checkoutBook.bind(this, item, index)}>租赁</Button>
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
