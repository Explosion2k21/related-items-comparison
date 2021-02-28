const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;
const axios = require('axios')
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));
 require('dotenv').config()



 app.get("/products" , (req, res)=>{
// console.log(process.env.API_KEY)
  axios
  // .get(" https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/11001/styles", {
    .get(" https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products", {
    headers: {
      Authorization: process.env.API_KEY,
    },
  })
  .then((result) => {
    res.send(result.data)
  });
  
})


app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
