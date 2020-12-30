import React, { Component } from 'react'
import { connect } from 'react-redux'
import CardData from '../../mock/CardData.js'
import { Card } from 'antd';

const { Meta } = Card;
export default  class CardCenter extends Component {
    render() {
        return (
                <div className="CardList">
                    {
                        CardData.CardData.map((item,key)=>{
                            return <Card onClick={()=>{this.props.CardClick(item)}} hoverable style={{ width: "240px" }} cover={<img alt="example" src={item.image} />} key={key}>
                                <Meta title={item.title} description={item.description} />
                            </Card>
                        })
                    }
                </div>
        )
    }

}
const mapStateToProps = (state) => {
    // console.log(state,'state')
    return {
        state
    }
}
const mapDispatchToProps =(dispatch)=> {
    return{
        CardClick(item){
            dispatch({type:"CARDDATA",data:item})
        }
    }
}

CardCenter = connect(mapStateToProps, mapDispatchToProps)(CardCenter)

