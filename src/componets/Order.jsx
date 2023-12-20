import React, { Component } from 'react'
import { MdDelete } from "react-icons/md";
//
export class Order extends Component {
  render() {
    return (
      <div className='car'>
        <img src={"./img/" + this.props.car.img}/>
            <h2>{this.props.car.title}</h2>
            <b>{this.props.car.price}KZT</b>
            <MdDelete className='delete' onClick={()=>this.props.deleteBasket(this.props.car.id)}/>
      </div>
    )
  }
}

export default Order