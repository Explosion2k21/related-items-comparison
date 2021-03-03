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


  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }
  
  render() {
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
              <tbody>
              <tr>

                <th>Product short Name</th>
                <th></th>
                <th>Product short Name</th>
              </tr>
              <tr>

                <td><i className="fa fa-check"></i></td>
                <td>feature description</td>
                <td><i className="fa fa-check"></i></td>
              </tr>
              <tr>

                <td><i className="fa fa-check"></i></td>
                <td>feature description</td>
                <td><i className="fa fa-check"></i></td>
              </tr>
              <tr>

                <td><i className="fa fa-check"></i></td>
                <td>feature description</td>
                <td><i className="fa fa-check"></i></td>
              </tr>
              <tr>

                <td><i className="fa fa-check"></i></td>
                <td>feature description</td>
                <td><i className="fa fa-check"></i></td>
              </tr>
              <tr>

                <td><i className="fa fa-check"></i></td>
                <td>feature description</td>
                <td><i className="fa fa-check"></i></td>
              </tr>
              </tbody>
            </table>
          
          </ReactModal>

          <img className="image" src={this.props.element.url.url}></img>
        </div>
        <div className='category'>{this.props.element.category}</div>
        <div className='name'>{this.props.element.name}</div>
        <span className='price'>${this.props.element.default_price}</span> <br></br>
        <StarRatings
          rating={(this.props.rates)/5}
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


