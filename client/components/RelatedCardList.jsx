import React from 'react';
import axios from 'axios';




export default class RelatedCardList extends React.Component {
    constructor() {
      super();
  
      this.state = {
        data : []
      };
  
    }
  
    componentDidMount() {
      console.log("service mounted");
      axios.get('/products').then((res)=>
      this.setState({data : res.data}))
      .catch((err)=>{
        console.log(err)
      })
  
    }

    render() {
  return (
    <div className='cont'>
            {this.state.data.map((element,index)=>(
          <div className='card'  key={index}>
             <h1>{element.category}</h1>
             <img src='http://cdn.shopify.com/s/files/1/0023/9901/0881/products/K-Hometown-Down-Jacket-Sulpher-Spring_1024x1024.jpg?v=1598641607'/>
    
              <h1>{element.name}</h1>
             <h1>{element.default_price}</h1>
            
             <p>{element.description}</p>
             </div> 
      ))}
          </div>
    );
  }

}