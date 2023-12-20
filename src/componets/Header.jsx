import React, {useState} from 'react'
import { FaCar } from "react-icons/fa6";
import { SlBasket } from "react-icons/sl";
import Order from './Order';
const showOrder =(props)=>{
  let general =0
  props.orders.forEach(el=>general+=Number.parseInt(el.price))
  return(<div>
      {props.orders.map(el=>(
                    <Order deleteBasket={props.deleteBasket} key={el.id} car={el}/>
                  ))}
      <p className='general'>Сумма: {general} 000 000KZT</p>
      </div>
    )

}
const showNothing=()=>{
  return(<div className='nothing'>
    <h2>Ничего нет</h2>
  </div>)
}
//firstcar для отслеживания изменении false defoult
//Facar,SlBasket Bootstrap React add
export default function Header(props) {
  let [firstcar, setfirstcar]=useState(false)
  return (
    <header>
        <div>
            <span className='logo'>Dream Car</span>
            <ul className='nav'>
              <li>Про Dream Car</li>
              <li>Контакты</li>
              <li>Машины</li>
            </ul>
            <FaCar/>
            <SlBasket onClick={()=>setfirstcar(firstcar =!firstcar)} className={`basket-style ${firstcar && 'active'}`}/>

            {firstcar && (
              <div className='shop-car'>
                  {props.orders.length>0 ?
                  showOrder(props): showNothing()}
                </div>
            )}
        </div>
        <div className='present'>
            
        </div>
    </header>
  )
}
