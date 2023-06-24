import axios from 'axios';
import Product from "../models/product";

const firebase_url ='https://react-native-tut-241d2-default-rtdb.firebaseio.com' ; 
const products_url = 'https://fakestoreapi.com/products';
export function storeMyOrder(orderData) {
    axios.post(firebase_url+'/orders.json', orderData)
      .then(response => {
        //console.log('Order stored successfully:', response);
      })
      .catch(error => {
        console.error('Error storing order:', error);
      });
}

export async function fetchMyOrders(){
    const response = await axios.get(firebase_url+'/orders.json');
    //console.log(response.data);
    const orders=[];
    for(const key in response.data){
        const order ={
            id:key,
            title:response.data[key].title,
            price:response.data[key].price,
        };
        orders.push(order);
    }
    return orders;
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