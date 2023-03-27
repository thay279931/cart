import { createContext } from "react";
function calculateTotalPrice(cartList) {
    return cartList.map((i) => i.quantity * i.price)
        .reduce((a, b) => a + b, 0);
}
export const cartInit = {
    cartList: [],
}

export const cartReduce = (state, action) => {
    console.log(action);
    const cartList = [...state.cartList]
    //#1先取得當前購物車的目標品項的索引
    const index = cartList.findIndex((item) => item.id === action.payload.id)
    console.log(index);
    switch (action.type) {
        case 'ADD_TO_CART':
            if (index === -1) {
                //還未加入購物車內
                cartList.push(action.payload)
            } else {
                //當前購物的項目與加入的項目一致
                cartList[index].quantity += action.payload.quantity
            }
            // const array = cartList.map((i) => {
            //   return i.quantity * i.price
            // })
            // const total = array.reduce((a, b) => {
            //   return a + b
            // }, 0)
            // console.log(array);
            //reduce
            return {
                ...state,
                cartList,
                total: calculateTotalPrice(cartList),
            }
        case 'CHANG_CART_QUANTITY':
            cartList[index].quantity = action.payload.quantity;
            return {
                ...state,
                cartList,
                total: calculateTotalPrice(cartList),
            }
        case 'REMOVE_CART_ITEM':
            cartList.splice(index, 1)
            return {
                ...state,
                cartList,
                total: calculateTotalPrice(cartList),
            }
        default:
            return state
    }
}

export const CartContext = createContext({})