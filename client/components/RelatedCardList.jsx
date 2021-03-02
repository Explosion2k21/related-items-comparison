import React from 'react';
import axios from 'axios';
import Carousel from 'react-elastic-carousel'
import RelatedCard from './RelatedProducts.jsx'
import Outfits from './Outfits.jsx'




export default class RelatedCardList extends React.Component {
    constructor() {
      super();
  
      this.state = {
        data : []
      };
      
  
    }
    componentDidMount() {
      axios.get('/api/products/11049')
      .then(({data})=>{
        console.log ("data", data)
      this.setState({data : data})
     })
      .catch((error)=>{
        console.log(error)
      })
      
    }
    

    render() {
      const breakPoints = [
        { width: 1, itemsToShow: 4 },
        { width: 550, itemsToShow: 4, itemsToScroll: 2 },
        { width: 768, itemsToShow: 4 },
        { width: 1200, itemsToShow: 4 }
      ];
  return (
   
         <div>
          <div>
            <h1>Related Products</h1> <br></br>
            <Carousel breakPoints={breakPoints}>
              {this.state.data.map((element,index)=>{
                 return <RelatedCard element={element}  key={index}/>
              })}
              
              </Carousel>
         
         
          </div>

          <div>
            <h1>Our outfits</h1> <br></br>
            <Carousel breakPoints={breakPoints}>
              {this.state.data.map((element,index)=>{
                 return <Outfits element={element}  key={index}/>
              })}
              
              </Carousel>
         
         
          </div>
          
           </div>
        
)}

 }