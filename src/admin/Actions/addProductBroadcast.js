const addProductBroadcast = function(products){
    console.log(products)
    return ({
        type:'NEW_PRODUCT',
        payload:products
    })
}
export default addProductBroadcast;