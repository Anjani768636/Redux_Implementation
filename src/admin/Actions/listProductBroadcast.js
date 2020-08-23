const listProductBroadcast = function(products){
    return({
        type:'LIST_PRODUCTS',
        payload:products
    })
}
export default listProductBroadcast;