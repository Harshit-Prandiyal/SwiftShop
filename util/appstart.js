import { fetchMyOrders } from "./http";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
function fetchFromFirebase(email) {
  const data = fetchMyOrders(email);
  return data;
}
export async function initiateStart(products, email) {
  console.log(email);
  let newmail = "";
  for (const i in email) {
    if (email[i] !== ".") {
      newmail += email[i];
    }
  }
  let convertedObject = { cart: [], Favourites: [], orders: [] ,name:""};
  const data = await fetchFromFirebase(newmail);

  console.log(data);
  //console.log(data.Favourites);
  let favPayload = [];
  let cartPayload = [];
  let orderPayload = [];
  for (const i in data.Favourites) {
    const id = data.Favourites[i].id;
    for (const j in products) {
      if (products[j].id === id) {
        favPayload.push(products[j]);
      }
    }
  }
  convertedObject.Favourites = favPayload;

  for (const i in data.cart) {
    const id = data.cart[i].id;

    for (const j in products) {
      if (products[j].id === id) {
        //console.log(id, " item found");
        cartPayload.push({ product: products[j], qty: data.cart[i].qty });
      }
    }
  }

  convertedObject.cart = cartPayload;
  for (const i in data.orders) {
    let temp = [];
    for (const j in data.orders[i].cart) {
      const id = data.orders[i].cart[j].id;

      for (const k in products) {
        if (products[k].id === id) {
          //console.log(id, " item found");
          temp.push({
            product: products[k],
            qty: data.orders[i].cart[j].qty,
          });
        }
      }
    }
    orderPayload.push({
      cart: temp,
      date: data.orders[i].date,
      time: data.orders[i].time,
      total: data.orders[i].total,
    });
  }

  convertedObject.orders = orderPayload;
  convertedObject.name = data.name;
  //console.log(data.name);

  console.log(convertedObject);
  return convertedObject;
}
