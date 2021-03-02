const express = require('express');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 3001;
const axios = require('axios')
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));
 



 app.get("/api/products/:product_id" , async(req, res)=>{
   var data=[]
 await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${req.params.product_id}/related`, {
    headers: {
      Authorization: process.env.API_KEY,
    },
    _id:req.params.id
  })
  .then( async (related) => {
    console.log(related.data);

    for(var i=0 ; i< related.data.length ; i++ ) {
      await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${related.data[i]}`, {
        headers: {
          Authorization: process.env.API_KEY,
        }
      }) 
      .then(product => data.push(product.data))
      .catch((err)=>console.log(err))

       
     await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${related.data[i]}/styles`, {
      headers: {
        Authorization: process.env.API_KEY,
      },

     }) .then(style=>{
       if(style.data.results[0].photos){
         data[i].url=style.data.results[0].photos[0]
       }
     })
    }
  
})
    .catch(err=>console.log(err))
     res.send(data)
     })


 
 
// app.get("/reviews/rating" , (req, res)=>{
//   console.log(req.params)
//     try{
//     const {data}=  await
//         axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews?product_id=11048`, {
//           headers: {
//             Authorization: process.env.API_KEY,
//           },
//         })
//         console.log(data);
//         res.send(data)
//     } 
//       catch(err){
//         res.send(err)
//       }  
//     })





app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
