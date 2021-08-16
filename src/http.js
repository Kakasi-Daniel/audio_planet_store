import {database} from './firebase'

export const getArrayProducts = async () =>{
    const response = await database.ref().child('products').get();
    const productsObjects = response.val()

    const productsArray = [];

    for(let key in productsObjects){
        productsArray.push({
            ID: key,
            brand: productsObjects[key].brand,
            full_name: productsObjects[key].fullname,
            photo: productsObjects[key].photo,
            type: productsObjects[key].type,
            price: productsObjects[key].price
        })
    }

    return productsArray;
}
export const getProductByID= async (ID) =>{
    const response = await database.ref().child('products').child(ID).get();
    const product = response.val()

    return product;
}

export const getUserDetailsByID= async (ID) =>{
    const response = await database.ref().child('users').child(ID).child('userDetails').get();
    const details = response.val();

    return details;
}



