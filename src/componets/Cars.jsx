import React, { Component } from 'react'
import Car from "./Car"
export class Cars extends Component {
  render() {
    return (
      <main>
        {this.props.cars.map(el=>
                (
                    <Car key={el.id} car={el} Add={this.props.Add}/>
                )
            )
        }
      </main>
    )
  }
}

export default Cars