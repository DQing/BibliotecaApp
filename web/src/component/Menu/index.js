import React, {Component} from 'react'
import {Layout, Menu, Icon} from 'antd';
import Book from '../Book'
import ReturnBook from '../ReturnBook'
import Movie from '../Movie'
import User from '../User'
import './index.less'
const {Header, Sider, Content} = Layout;

class Menus extends Component {
    state = {
        collapsed: false,
        key: 1
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    logout() {
        this.props.history.push("/");
    }

    selectMenu({key}) {
        this.setState({
            key
        })
    }

    render() {
        const menuArr = [<Book/>, <ReturnBook/>, <Movie/>, <User/>]
        const {key} = this.state
        return (
            <div className="menu-container">
                <Layout>
                    <Sider
                        trigger={null}
                        collapsible
                        collapsed={this.state.collapsed}
                    >
                        <div className="logo"/>
                        <Menu theme="dark" mode="inline" onClick={this.selectMenu.bind(this)}
                              defaultSelectedKeys={['1']}>
                            <Menu.Item key="1">
                                <Icon type="user"/>
                                <span>书籍列表</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="video-camera"/>
                                <span>还书</span>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon type="upload"/>
                                <span>电影列表</span>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Icon type="user"/>
                                <span>个人信息</span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{background: '#fff', padding: 0}}>
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                            />
                            <span className="quit" onClick={this.logout.bind(this)}><span
                                className="text">退出</span><Icon type="logout"/></span>
                        </Header>
                        <Content style={{margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280}}>
                            {
                                menuArr[key - 1]
                            }
                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}
export default Menus
