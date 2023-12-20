import React from "react";
import Header from "./componets/Header";
import Footer from "./componets/Footer";
import Cars from "./componets/Cars"
import Category from "./componets/Category";
import MyComponent from "./componets/MyComponent";
/*Логика добавление корзины работает так что мы создали массив orders,
и мы создали метод addToBasket чтобы взаимодесвтвовать с измениемя
1)создали метод Баскет
2)передаем компонент Карс
3)в компоненте Карс передаем компенент кар и там уже добавляется в в корзину
deleteBasket logic operation
1)Есть метод делетеБаскет передаем в шапку
2)передаем в метод ордер и затем передаем в компонент Ордер в хидер
3)и при нажитии на кномпу удаление удаление происходит по айди
*/
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      orders: [],
      currentCars: [],
      cars: [
        {
          id: 1,
          title: 'Toyota camry 30',
          img: 'camry30.jpg',
          desc: 'Год: 2004, Обьем: 2.4-3, АКПП, Передний привод, Пробег 400 000km',
          chairs: 'sedan',
          price: '5 000 000'
        },
        {
          id: 2,
          title: 'Kia Rio',
          img: 'rio2015.jpg',
          desc: 'Год: 2015, Обьем: 1.6, АКПП, Передний привод, Пробег 190 000km',
          chairs: 'sedan',
          price: '6 000 000'
        },
        {
          id: 3,
          title: 'Lexus ES model',
          img: 'es2008.jpg',
          desc: 'Год: 2008, Обьем: 3.5, АКПП, Передний привод, Пробег 270 000km',
          chairs: 'sedan',
          price: '8 000 000'
        },
        {
          id: 4,
          title: 'Subaru Legacy "BM/BR"',
          img: 'bmbr.jpg',
          desc: 'Год: 2012-2016, Обьем: 2.5, АКПП, Полный привод, Пробег 230 000km',
          chairs: 'sedan',
          price: '6 000 000'
        },
        {
          id: 5,
          title: 'Huyndai Accent',
          img: 'accent.jpg',
          desc: 'Год: 2018, Обьем: 1.6, АКПП, Передний привод, Пробег 100 000km',
          chairs: 'sedan',
          price: '10 000 000'
        },
        {
          id: 6,
          title: 'Huyndai Elantra',
          img: 'elantra.jpg',
          desc: 'Год: 2022, Обьем: 2, АКПП, Передний привод, Пробег 300 000km',
          chairs: 'sedan',
          price: '12 000 000'
        },
        {
          id: 7,
          title: 'Huyndai Ioniq 5',
          img: 'ioniq5.jpg',
          desc: 'Год: 2023, Электрокар, АКПП, Полный привод, Пробег 1 000km',
          chairs: 'electronic',
          price: '20 000 000'
        },
        {
          id: 8,
          title: 'Huyndai Palisade',
          img: 'palisade.jpg',
          desc: 'Год: 2023, Обьем: 3.8, АКПП, Полный привод, Пробег 1 000km',
          chairs: 'vnedodrozhnik',
          price: '40 000 000'
        },
        {
          id: 9,
          title: 'Kia Sportage',
          img: 'sportage.jpg',
          desc: 'Год: 2023, Обьем: 2.5, АКПП, Полный привод, Пробег 3 000km',
          chairs: 'krossover',
          price: '16 000 000'
        }
      ]
    }
      this.state.currentCars=this.state.cars
      this.addToBasket=this.addToBasket.bind(this)
      this.deleteBasket=this.deleteBasket.bind(this)
      this.correctCategory=this.correctCategory.bind(this)
      console.log(this.state.cars)
    }
  render(){
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} deleteBasket={this.deleteBasket}/>
        <Category correctCategory={this.correctCategory}/>
        <Cars cars={this.state.currentCars} Add={this.addToBasket}/>
        <MyComponent/>
        <Footer/>
      </div>
    )
  }
  correctCategory(category){
    if(category === "all"){
      this.setState(
        {currentCars: this.state.cars}
      )
    }
    this.setState(
      {
        currentCars: this.state.cars.filter(el=>el.chairs===category)
      }
    )
  }
  deleteBasket(id){
    this.setState({orders: this.state.orders.filter(el=> el.id !== id)})
  }
  addToBasket(car){
    let arr = false
    this.state.orders.forEach(el=>{
      if(el.id === car.id)
      arr =true
    })
    if(!arr)
    this.setState({orders:[...this.state.orders, car]})
  }
}

export default App; 
