import React from 'react';
import axios from 'axios';
import StarRatings from "react-star-ratings"

export default class RelatedCard extends React.Component {
    constructor(props) {
      super(props);
      // this.state={
      //   rateData=[]
      // }
  
    }
    // componentDidMount(){
    //   axios.get('/reviews/rating')
    //   .then(({data})=>{
    //     console.log(data)
    //   this.setState({starData : data})
    //  })
    //   .catch((error)=>{
    //     console.log(error)
    //   })
    // }
    
    

    render() { 
    //   const result = this.state.rateData;
    // var totalRating = 0;
    // var totalUsers = this.state.rateData.length;
    // result.map((element) => {
    //   totalRating += element.rating;
    // });
    // // console.log(totalRating);
    // // console.log(totalUsers);
    // var currentRate = totalRating / totalUsers || 0;
    // console.log(currentRate);


        return (
            <div className='cards-container'>    
            <span className="far fa-star star"></span>
             <img className="image" src={this.props.element.url.url}></img> 
        
 
                <div className='category'>{this.props.element.category}</div>
                <div className='name'>{this.props.element.name}</div>
                {/* <div className='description'>{this.props.element.description}</div> */}
                <span className='price'>${this.props.element.default_price}</span> <br></br>
                <StarRatings
               rating={3.8}
               starRatedColor="rgb(80, 80, 80)"
             starDimension="15px"
                starSpacing="1px"
                numberOfStars={5}
               name="rating"
          />
            
             </div>
          
           
      )}
        
  }


