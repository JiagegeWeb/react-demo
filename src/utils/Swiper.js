import React, { Component } from 'react'
import { Carousel } from 'antd';
import img1 from '../static/img/1.jpg'
import img2 from '../static/img/2.jpg'
import img3 from '../static/img/3.jpg'
import img4 from '../static/img/4.jpg'
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
            <h3 style={contentStyle}>
              {/* <img src="../static/img/1.jpg" alt="" /> */}
              <img src={img1} alt="" />
            </h3>
          </div>
          <div className="divStyle">
            <h3 style={contentStyle}>
            <img src={img2}alt="" />
            </h3>
          </div>
          <div className="divStyle">
            <h3 style={contentStyle}>
            <img src={img3}alt="" />
            </h3>
          </div>
          <div className="divStyle">
            <h3 style={contentStyle}>
            <img src={img4}alt="" />
            </h3>
          </div>
      </Carousel>
    )
  }
}
