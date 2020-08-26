const addProductBroadcast = function(products){
    console.log(products)
    return ({
        type:'ADD_PRODUCTS',
        payload:products
    })
}
export default addProductBroadcast;