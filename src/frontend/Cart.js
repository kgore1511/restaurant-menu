import React from 'react'
import axios from 'axios';
export default class Cart extends React.Component {
  state={
   CartItems:[],
   Total:0
  }
  
  
  constructor(props){
    super(props)
  }
  
render()
{
 
  this.state={CartItems:this.props.data.CartItems,
    Total:this.props.data.Total
  }
  
  return <div>
    <h4>Venue Information</h4>
    <h5>Address</h5>
    <div style={{fontSize:'12px'}}>Oranienstrabe 200</div>
    <div style={{fontSize:'12px'}}>10999 Berlin</div>
    <h6>see map</h6>
    <div className='form'>
       <ul className="form-container">
            <li><center><div><table><tr><td><i class="fa fa-shopping-cart fa_custom fa-3x"/></td><td><h3>Cart</h3></td></tr></table></div></center></li>
            
            {this.state.CartItems.length===0 ? <div><center>No Item Added</center></div>:
  
  <div>  
  {this.state.CartItems.map(item=>(
  <div>
  
<table>
  <tr>
    <td className='price' >{item.Item.name}*{item.Qty}</td>       <td className='price1'> {item.Item.price*item.Qty}</td>

</tr>
</table></div>
  ))}
  <div className='total'>
{this.state.CartItems.length===0 || <div>Total            Rs {this.state.Total}</div> }
</div>
<div >
 <button className='proceed'>Proceed</button>
</div>
  </div>
    }
    
            </ul>
            </div>
  </div>
  }
}


