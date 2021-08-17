import {database,auth} from './firebase'

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

export const sendUserDetails = (phone,county,city,address,postal) =>{
    database.ref('users/' + auth.currentUser.uid+"/userDetails").set({
        phone: phone,
        county: county,
        city: city,
        address: address,
        postal: postal
      }, (error) => {
        if (error) {
          console.log('updateing user detail failed' + error)
        } else {
          console.log("user details saved")
        }
      });
}



export const sendOrder = (basket,totalItems,totalAmmount,date,orderDetails,orderID) =>{
    database.ref('users/' + auth.currentUser.uid+"/orders/"+orderID).set({
       basket,
       totalItems,
       totalAmmount,
       orderDetails,
       date
      }, (error) => {
        if (error) {
          console.log('error at sending orde' + error)
        } else {
          console.log("orderSent")
        }
      });
}

export const sendOrderNoAccount = (basket,totalItems,totalAmmount,date,orderDetails,orderID) =>{
    database.ref('orders/'+orderID).set({
       basket,
       totalItems,
       totalAmmount,
       orderDetails,
       date
      }, (error) => {
        if (error) {
          console.log('error at sending orde' + error)
        } else {
          console.log("orderSent")
        }
      });
}

export const getUserOrdersByID = async (ID) =>{
  const response = await database.ref().child('users').child(ID).child('orders').get();
  const orders = response.val();

  const ordersArray = []

  for(let key in orders){
    ordersArray.push({
      orderID: key,
      total: orders[key].totalAmmount,
      date: orders[key].date,
    })
  }

  return ordersArray;
}

export const getOrderByID = async (uid,orderID) =>{
  const response = await database.ref().child('users').child(uid).child('orders').child(orderID).get();
  const order = response.val();


  return order;
}



