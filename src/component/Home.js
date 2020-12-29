import React, { Component } from 'react'
import Swiper from '../utils/Swiper.js'
import { connect } from 'react-redux'
import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;
export class Home extends Component {
    render() {
        return (
            <Layout>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
              <div className="logo" />
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
              </Menu>
            </Header>
            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
              <div className="site-layout-background" style={{ padding: 24}}>
                <Swiper />
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>My Name is Your Father ღ( ´･ᴗ･` )</Footer>
          </Layout>
        )
    }
}

const mapStateToProps = (state) => ({
})
const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
