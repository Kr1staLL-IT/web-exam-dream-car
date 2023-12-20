import React, { Component } from 'react'

export class Category extends Component {
    constructor(props){
        super(props)
        this.state={
           categories: [
            {
                key: 'all',
                name: 'Все'
            },
            {
                key: 'sedan',
                name: 'Седан'
            },
            {
                key: 'krossover',
                name: 'Кроссовер'
            },
            {
                key: 'vnedodrozhnik',
                name: 'Внедорожник'
            },
            {
                key: 'electronic',
                name: 'Электрокар'
            }
           ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el=>(
            <div key ={el.key} onClick={()=>this.props.correctCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Category