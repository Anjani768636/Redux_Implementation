const addProductBroadcast = function(products){
    return ({
        type:'NEW_PRODUCT',
        payload:products
    })
}
export default addProductBroadcast;