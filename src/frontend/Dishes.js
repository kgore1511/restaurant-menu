import React from 'react'
import axios from 'axios';
import Cart from './Cart';
import Cookies from 'js-cookie';

export default class Dishes extends React.Component {

state={
  Items:[],
  SearchValue:'',
  cartItems:[]
}
  componentDidMount() {
    axios.get('/api/')
      .then(res => {
        const response = res.data;
        this.setState({Items:response});
      })
      
  }
clickHandler=(item)=>{
this.setState({cartItems:this.state.cartItems})
this.props.data.callBack(item)
}
searchValue=""
searchHandler=(p)=>{
  
  var x=document.getElementById('search').value||''
  
  this.searchValue=x
  x=x.toUpperCase()
  var arr=[]
  this.state={SearchValue:x,
  Items:this.state.Items,
cartItems:this.state.cartItems
}

  
  
 this.setState({Items:this.state.Items})
}

render()
{ 
  
  var x=0
  this.state={cartItems:this.props.data.CartItems,
    Items:this.state.Items ,
    Category:this.props.data.Category
}


  
  
  return <div><center><input type='text' id='search' name='search' placeholder='Search' onInput={()=>this.searchHandler(this)} ></input></center>
    <h2>{this.state.Category}</h2>
  <div className='color'></div>
    {this.state.Items.length===0 ? <div>Loading...</div>:
  
  <div>
    {this.state.Items.filter(item=>item.name.toUpperCase().startsWith(this.searchValue.toUpperCase())&& item.category===this.state.Category).map(item=>(
<li>
<li className='Name'>{item.name}</li>
<li className='description'>{item.description}</li>
<table>
  
  <tr>
    <td className='price'>Rs {item.price}</td>   {item.isPopular ===1 &&<td className='popular'>Popular</td>} {this.state.cartItems.length>0 && <td></td>} <td className='addButton'><button onClick={()=>this.clickHandler(item)}>+</button></td>
</tr>
</table>
<h2></h2>
</li>
  ))
  
  }
  
  </div>
}   
  </div>
}
}


