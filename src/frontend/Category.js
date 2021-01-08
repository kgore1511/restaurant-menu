import React from 'react'
import axios from 'axios';
export default class Category extends React.Component {
state={
  category:"Indian dishes"
}

constructor(props)
{
  super(props)
}

setCategory=(category)=>{

this.props.data.callBack(category)
}
render()
{
  return <div className='category'>
    <li><a href='#' className='category' onClick={()=>this.setCategory("Indian dishes")}>Indian dishes</a></li>
    <div className='spacing'/>
    <li><a href='#' className='category' onClick={()=>this.setCategory("German dishes")}>German dishes</a></li>
    <div className='spacing'/>
    <li><a href='#'className='category' onClick={()=>this.setCategory("Beverages")}>Beverages</a></li>
    
  </div>
}
}


