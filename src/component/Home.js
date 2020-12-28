import React, { Component } from 'react'
import Swiper from '../utils/Swiper.js'
import { connect } from 'react-redux'
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;
export class Home extends Component {
    render() {
        return (
                <Layout>
                <Header>Header</Header>
                <Layout>
                    <Content><Swiper /></Content>
                </Layout>
                <Footer>Footer</Footer>
                </Layout>
        )
    }
}

const mapStateToProps = (state) => ({
})
const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
