import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Dishes from './frontend/Dishes';
import Category from './frontend/Category';
import Cart from './frontend/Cart';
export default  class App extends React.Component
{
  state={
    CartItems:[],
    Total:0,
    Category:"Indian dishes"
  }
constructor(props)
{
  super(props)
}

categoryCallBack(category){

this.setState({Category:category})
}

callBack(item){
  
  
  const found=this.state.CartItems.find(cartitem=>cartitem.Item.name===item.name)
  if(found){
  
    var newItem={
      Item:found.Item,
      Qty:1+(found.Qty)
    }
    const index=this.state.CartItems.lastIndexOf(found)
    
    this.state.CartItems[index]=newItem
    
    
    
    this.state={CartItems:[...this.state.CartItems]}
    var total=0
    this.state.CartItems.map(item=>(
      total+=item.Item.price*item.Qty
    ))
    this.setState({CartItems:[...this.state.CartItems],
    Total:total
    })
  }
  else{
    var newItem= {
      Item:item,
      Qty:1
    }
    this.state={CartItems:[...this.state.CartItems ,newItem]}
    var total=0
    this.state.CartItems.map(item=>(
      total+=item.Item.price*item.Qty
    ))
    
    //this.state={cartItems:[...this.state.cartItems,newItem]}
    this.setState({CartItems:[...this.state.CartItems],
      Total:total
    })
  }
  
  
}

render()
{
 
  
  
  return  <div>
    <header>
      
      <div className='a'>
      <a href='#' style={{padding:'5px'}}>Menu</a>
      <a href='#' style={{padding:'5px'}}>Reservation</a>
        <a href='#' style={{padding:'5px'}}>Call to action</a>
       <a href='#' style={{padding:'5px',color:'black'}}>Log in</a>
      </div>
    </header>
    <img src='/images/menu.png' className='image'></img>
  <Router>
	<Switch> 
              <Route path='/' >
<div class="grid-container">
<div><Category data={
  {
  callBack:this.categoryCallBack.bind(this),
}
}/></div>
<div><Dishes data={
  {Message:this.state.Message,
  callBack:this.callBack.bind(this),
  CartItems:this.state.CartItems,
  Category:this.state.Category
}
}/></div>
<div><Cart data={
  {CartItems:this.state.CartItems,
  Total:this.state.Total
  }
}/></div>
</div>
</Route>  
            </Switch> 
</Router>
</div>
}
}


