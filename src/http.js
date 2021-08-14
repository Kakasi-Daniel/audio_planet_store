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
