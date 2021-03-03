import React from 'react';
import axios from 'axios';
import Carousel from 'react-elastic-carousel'
import RelatedCard from './RelatedProducts.jsx'
import Outfits from './Outfits.jsx'
import Comparing from './Comparing.jsx'

export default class RelatedCardList extends React.Component {
    constructor() {
      super();
  
      this.state = {
        data : [],
        rating:[],
      };
     
  
    }

    // Getting the related products for a specific product 
     fetchData(){
      axios.get(`/api/products/11048`)
      .then(({data})=>{
        console.log ("data", data)
      this.setState({data : data})
     })
      .catch((error)=>{
        console.log(error)
      })
    }
   //getting ratings 
  ratingReviews(){
      axios.get(`/reviews/11048`)  
      .then(({data})=>{
        console.log('ratingdata',data)
      this.setState({rating:data})
     })
      .catch((error)=>{
        console.log(error)
      })

    }

    componentDidMount() {
      this.fetchData()
      this.ratingReviews()
    }
  
    

    render() {
      // rendering a carousel with 4 cards
      const breakPoints = [
        { width: 1, itemsToShow: 4 },
        { width: 550, itemsToShow: 4, itemsToScroll: 2 },
        { width: 768, itemsToShow: 4 },
        { width: 1200, itemsToShow: 4 }
      ];
    
     var result=[]
     var ratings=0
     var counter=0 
     this.state.rating.map((element)=>{
       if(element.results.length===0){
         result.push(0)
         ratings=0
         counter=0
       }
       element.results.map((e,i)=>{
         ratings+=e.rating
         counter +=1
         if(counter ===5 ) {
           result.push(ratings)
           ratings=0
           counter=0
         }
       })
     })

  return (
   
         <div>
          <div>
            {/* related products carousel */}
            <h1>Related Products</h1> <br></br>
            <Carousel breakPoints={breakPoints}>
              {this.state.data.map((element,index)=>{
                 return <RelatedCard element={element}  rates={result[index]}  key={index}/>
              })}
              
              </Carousel>
              </div>
         {/*  carousel for added Outfits */}
          <div>
            <h1>Our outfits</h1> <br></br>
            <Carousel breakPoints={breakPoints}>
              {this.state.data.map((element,index)=>{
                 return <Outfits element={element}  key={index}/>
              })}
              
              </Carousel>
              
          </div>
          <Comparing/>

        

        
          
           </div>
        
)}

 }