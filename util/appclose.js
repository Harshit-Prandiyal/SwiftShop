import { storeMyOrder } from "./http";
function convertToFirebaseCart(cart){
    let FirebaseCart =[];
    for(const i in cart){
        FirebaseCart.push({id : cart[i].product.id,qty:cart[i].qty});
    }
    return FirebaseCart;
}
export function initiateClose(cart,orders,favourites,user){
    let newmail = "";
  for (const i in user.email) {
    if (user.email[i] !== ".") {
      newmail += user.email[i];
    }
  }
    //preparing cart object
    let FirebaseCart =convertToFirebaseCart(cart);
    //console.log(FirebaseCart);

    //preparing favourites object
    let FirebaseFavourites =[];
    for(const i in favourites){
        FirebaseFavourites.push({id : favourites[i].id});
    }
    //console.log(FirebaseFavourites);

    //preparing orders object
    let FirebaseOrders =[];
    for(const i in orders){
        let temp = convertToFirebaseCart(orders[i].cart); 
        let order={cart:temp,date:orders[i].date,time:orders[i].time,total:orders[i].total};
        FirebaseOrders.push(order);
    }
    
    //console.log(FirebaseOrders);
    storeMyOrder( {name : user.name, cart : FirebaseCart,Favourites: FirebaseFavourites,orders: FirebaseOrders  } ,newmail);
}