// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//   name: "MyCart",
//   initialState: [],
//   //every item {product: p,qty:q}
//   reducers: {
//     addToCart: (state, action) => {
//       let found = false;
//       const Newstate=state.map((item) => {
//         if (item.product.id === action.payload.product.id) {
//           found=true;
//           console.log(item.qty + action.payload.qty);
//           return { ...item, qty: item.qty + action.payload.qty };
//         } else {
//           return item;
//         }
//       });

//       if(!found){
//         state.push(action.payload);
//       }else{
//         //state = [...Newstate];
//         state.splice(0, state.length, ...Newstate);
//       }
//     },
//   },
// });
// export const { addToCart } = cartSlice.actions;
// export default cartSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "MyCart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const foundIndex = state.findIndex(
        (item) => item.product.id === action.payload.product.id
      );
      if (foundIndex !== -1) {
        state[foundIndex] = {
          ...state[foundIndex],
          qty: state[foundIndex].qty + action.payload.qty,
        };
      } else {
        state.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      const foundIndex = state.findIndex(
        (item) => item.product.id === action.payload.id
      );
      if (state[foundIndex].qty > 1) {
        state[foundIndex] = {
          ...state[foundIndex],
          qty: state[foundIndex].qty - 1,
        };
      } else {
        const itemId = action.payload.id;
        const itemIndex = state.findIndex((item) => item.product.id === itemId);
        if (itemIndex !== -1) {
         state= state.splice(itemIndex, 1);
        }
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
