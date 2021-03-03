import React from 'react';
import StarRatings from "react-star-ratings"


export default class Outfits extends React.Component {
    constructor(props) {
      super(props);

  
    }
    

    render() {
        return (
            <div className='cards-container'>   
            {/* hardcoded card info  */}
        <div>
            <span className="far fa-times-circle circle"></span>
            {/* hardcoded image */}
             <img className="image" src="https://www.smallwoods.org.uk/assets/Uploads/Documents/ac72cd8e0a/product-default-img__FitMaxWzEwMDAsODAwXQ.jpg"></img> 
        </div>
 
                <div className='category'>Category</div>
                <div className='category'>name</div>
                <span className='price'>$100</span> <br></br>
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