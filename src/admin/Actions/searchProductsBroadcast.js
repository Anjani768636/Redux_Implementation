const searchProductBroadCast = function(products){
    return ({
        type:"SEARCH_PRODUCT",
        payload:products
    })
}
export default searchProductBroadCast