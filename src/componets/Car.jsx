import React, { Component } from 'react'

export class Car extends Component {
  render() {
    return (
      <div className='car'>
            <img src={"./img/" + this.props.car.img}/>
            <h2>{this.props.car.title}</h2>
            <p>{this.props.car.desc}</p>
            <b>{this.props.car.price}KZT</b>
            <div className='basket' onClick={()=>this.props.Add(this.props.car)}>+</div>
      </div>
    )
  }
}

export default Car