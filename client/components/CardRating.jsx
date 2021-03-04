import React from 'react';
import axios from 'axios';
import StarRatings from "react-star-ratings"
 class CardRating extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        data : []
      };
    }
  componentDidMount (){
  this.getRating()

   }
    getRating(){
    axios.get(`http://46.101.159.182:3003/related/reviews/${this.props.productId}`).then(({data})=>
    this.setState({data:data}))
    .catch((err)=>{
      console.log(err)
    })
  }
  
  
    render() {
 
  return (
    <div>
     <StarRatings
            rating={3.8}
            starRatedColor="rgb(80, 80, 80)"
            starDimension="15px"
            starSpacing="1px"
            numberOfStars={5}
            name="rating"
          />
    </div>
    );
  }

}
export default CardRating