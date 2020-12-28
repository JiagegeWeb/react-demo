import React, { Component } from 'react'
import { Carousel } from 'antd';
const contentStyle = {
  height: '100%',
  color: '#fff',
  lineHeight: '802px',
  textAlign: 'center',
  background: '#364d79',
};
export default class Swiper extends Component {
  render() {
    return (
        <Carousel autoplay className="SwiperBox">
          <div className="divStyle">
            <h3 style={contentStyle}>1</h3>
          </div>
          <div className="divStyle">
            <h3 style={contentStyle}>2</h3>
          </div>
          <div className="divStyle">
            <h3 style={contentStyle}>3</h3>
          </div>
          <div className="divStyle">
            <h3 style={contentStyle}>4</h3>
          </div>
      </Carousel>
    )
  }
}
