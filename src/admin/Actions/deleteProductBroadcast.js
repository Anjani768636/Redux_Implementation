const deleteProductBroadcast = function(products){
    return ({
        type:'DELETE_PRODUCT',
        payload:products
    })
}
export default deleteProductBroadcast;