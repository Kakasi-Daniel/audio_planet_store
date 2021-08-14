import {createContext, useReducer} from 'react';

const defaultState = {
    basket: [],
    user: null
}

const UserContext = createContext(defaultState)

const reducer = (state,action) =>{

    if(action.type === 'SET_USER'){
        return {
            ...state,
            user: action.user
        }
    }
    if(action.type === 'ADD_TO_BASKET'){
        const products = []
        for(let i = 0;i<action.productsAmmount;i++){
            products.push(action.product)
        }
        return {
            ...state,
            basket: [...state.basket,...products]
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