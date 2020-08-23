const editProductBroadcast = function(products){
    return({
        type:'EDIT_PRODUCT',
        payload:products
    })
}
export default editProductBroadcast;