const addProductBroadcast = function(products){
    console.log(products)
    return ({
        type:'ALL_PRODUCTS',
        payload:products
    })
}
export default addProductBroadcast;