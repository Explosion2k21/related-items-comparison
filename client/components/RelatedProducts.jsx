import React from 'react';
import axios from 'axios';
import StarRatings from "react-star-ratings"
import ReactModal from 'react-modal';

export default class RelatedCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      showModal: false
    }

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);

  }

  // componentDidMount() {
  //     axios.get('/api/products/11049')
  //     .then(({data})=>{
  //     this.setState({data : data})
  //    })

  //    console.log('daaattaaa', data)
  //     .catch((error)=>{
  //       console.log(error)
  //     })


  //  }


  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }





  render() {
    // const result = this.state.data;
    // var totalRating = 0;
    // var totalUsers = this.state.data.length;
    // result.map((element) => {
    //   totalRating += element.rating;
    // });
    // // console.log("totalRating",totalRating);
    // console.log("users",totalUsers);
    // var currentRate = totalRating / totalUsers
    // console.log(currentRate);


    return (

      // rendering the related products information    
      <div className='cards-container'>
        <div>
          <span className="far fa-star star" onClick={this.handleOpenModal}></span>
          <ReactModal className='modal'
            isOpen={this.state.showModal}
            contentLabel="Minimal Modal Example"
          >
            <span className="far fa-times-circle" onClick={this.handleCloseModal}></span>
            <h2>Comparing</h2>

            <table className="table">
              <tr>

                <th>Product short Name</th>
                <th></th>
                <th>Product short Name</th>
              </tr>
              <tr>

                <td><i class="fa fa-check"></i></td>
                <td>feature description</td>
                <td><i class="fa fa-check"></i></td>
              </tr>
              <tr>

                <td><i class="fa fa-check"></i></td>
                <td>feature description</td>
                <td><i class="fa fa-check"></i></td>
              </tr>
              <tr>

                <td><i class="fa fa-check"></i></td>
                <td>feature description</td>
                <td><i class="fa fa-check"></i></td>
              </tr>
              <tr>

                <td><i class="fa fa-check"></i></td>
                <td>feature description</td>
                <td><i class="fa fa-check"></i></td>
              </tr>
              <tr>

                <td><i class="fa fa-check"></i></td>
                <td>feature description</td>
                <td><i class="fa fa-check"></i></td>
              </tr>
            </table>
          </ReactModal>

          <img className="image" src={this.props.element.url.url}></img>
        </div>
        <div className='category'>{this.props.element.category}</div>
        <div className='name'>{this.props.element.name}</div>
        {/* <div className='description'>{this.props.element.description}</div> */}
        <span className='price'>${this.props.element.default_price}</span> <br></br>
        <StarRatings
          rating={3.8}
          // rating={this.props.element.rating}
          starRatedColor="orange"
          starDimension="15px"
          starSpacing="1px"
          numberOfStars={5}
          name="rating"
        />

      </div>


    )
  }

}


