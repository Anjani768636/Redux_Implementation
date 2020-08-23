const listProductReducer =function listreducer(state = null, action){
    var listProduct = []
    switch (action.type) {
        case "LIST_PRODUCTS":
            
            return action.payload

            // case "NEW_PRODUCT":
            
            //     return action.payload
    
        default:
            break;
    }
    return listProduct
}
export default listProductReducer;