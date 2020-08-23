const viewProductBroadcast = function(products){
    return({
        type:'EDIT_PRODUCT',
        payload:products
    })
}
export default viewProductBroadcast;