import axios from 'axios';
import Product from "../models/product";

const firebase_url  ; 
const products_url = 'https://fakestoreapi.com/products';
//firebase_url+ '/testing.json'
//firebase_url+'/orders.json'
export function storeMyOrder(orderData,email) {
   const newUrl = firebase_url+'/' + email+'.json';
   console.log(newUrl);
    axios.put(newUrl, orderData)
      .then(response => {
        console.log('Order stored successfully:', response);
      })
      .catch(error => {
        if (error.response) {
          console.log("Error response:", error.response.data);
          console.log("Error status code:", error.response.status);
          console.log("Error headers:", error.response.headers);
        } else {
          console.log("Error message:", error.message);
        }
      });
}

export async function fetchMyOrders(email){
  const newUrl = firebase_url+'/' + email+'.json';
    const response = await axios.get(newUrl)
    .catch(error => {
      if (error.response) {
        console.log("Error response:", error.response.data);
        console.log("Error status code:", error.response.status);
        console.log("Error headers:", error.response.headers);
      } else {
        console.log("Error message:", error.message);
      }
    });
    //console.log(response.data);
    return response.data;
}
export async function fetchProducts(){
  const response = await axios.get(products_url);
    const products=[];
    for(const element in response.data){
        const product = {
         "id" : response.data[element].id,
         "title": response.data[element].title,
         "description": response.data[element].description,
         "price":response.data[element].price,
         "imageUrl":response.data[element].image,
         "category": response.data[element].category,
         "rating": response.data[element].rating.rate,
         "count":response.data[element].rating.count,
        }
        products.push(product);
    }
    return products;
}
