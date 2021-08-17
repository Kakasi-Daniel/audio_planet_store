import {createContext, useReducer} from 'react';

const defaultState = {
    basket: [],
    basketItems: 0,
    basketTotal: 0,
    user: null
}

const storeToLocal = (basketToStore,basketItemsToStore,basketTotalToStore) =>{
    const toLocalStorage = {
        basket: basketToStore,
        basketItems: basketItemsToStore,
        basketTotal: basketTotalToStore
    }

    localStorage.setItem('stored', JSON.stringify(toLocalStorage));
}

const UserContext = createContext(defaultState)

const reducer = (state,action) =>{

    if(action.type === 'SET_USER'){
        return {
            ...state,
            user: action.user
        }
    }

    if(action.type === 'SET_FROM_LOCAL'){
        return {
            ...state,
            ...action.store
        }
    }
    if(action.type === 'ADD_TO_BASKET'){

        let notFoundInBasket = true;

        let productToAdd = {}
        let newProducts = [...state.basket]

        state.basket.forEach((product,index) => {
            if(product.productID === action.product.productID){
                notFoundInBasket = false;
                productToAdd = {
                    ...product,
                    productAmmount: product.productAmmount + action.ammount
                }
                newProducts[index] = {...productToAdd};
            }
        })

       if(notFoundInBasket){
           productToAdd = {
            ...action.product,
            productAmmount: action.ammount
           }
           newProducts.push(productToAdd);
       }

        let newBasketItems = 0;
        let newBasketTotal = 0;
        newProducts.forEach(product =>{
            newBasketItems += product.productAmmount;
            newBasketTotal += (product.productAmmount * product.productPrice);
        })

        
        storeToLocal(newProducts,newBasketItems,newBasketTotal);

        return {
            ...state,
            basket: newProducts,
            basketItems: newBasketItems,
            basketTotal: newBasketTotal
        }
    }

    if(action.type === "DECREASE_ONE"){

        let productToAdd = {}
        let newProducts = [...state.basket]
        let ammountToRemove = 0;

        state.basket.forEach((product,index) => {
            if(product.productID === action.productID){
               if(product.productAmmount > 1){
                    productToAdd = {
                        ...product,
                        productAmmount: product.productAmmount -1
                    }
                    newProducts[index] = productToAdd;

               }else{
                  newProducts.splice(index,1);
               }
               ammountToRemove = product.productPrice;
            }
            
        })

        const newBasketItems = state.basketItems - 1;
        let newBasketTotal = state.basketTotal - ammountToRemove;
        if(newBasketItems === 0){
            newBasketTotal = 0;
        }

        storeToLocal(newProducts,newBasketItems,newBasketTotal);

        return {
            ...state,
            basketTotal: newBasketTotal,
            basketItems: newBasketItems,
            basket: newProducts
        }
    }

    if (action.type === "REMOVE_FROM_BASKET"){

        let ammountToRemove = 0;
        let itemsToRemove = 0
        let newProducts = [...state.basket]

        state.basket.forEach((product,index) => {
            if(product.productID === action.productID){
              ammountToRemove = product.productPrice * product.productAmmount;
              itemsToRemove = product.productAmmount;
              newProducts.splice(index,1);
            }
        })

        const newBasketItems = state.basketItems - itemsToRemove;
        let newBasketTotal = state.basketTotal - ammountToRemove;
        if(newBasketItems === 0){
            newBasketTotal = 0;
        }

        storeToLocal(newProducts,newBasketItems,newBasketTotal);

        return {
            ...state,
            basket: newProducts,
            basketTotal: newBasketTotal,
            basketItems: newBasketItems
        }

    }

    if (action.type === "DELETE_BASKET"){

        
        storeToLocal([],0,0);

        return {
            ...state,
            basket: [],
            basketTotal: 0,
            basketItems: 0
        }

    }

    return defaultState;
}

export const ContextWrapper = props =>{
    return (
        <UserContext.Provider value={useReducer(reducer,defaultState)} >
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContext;