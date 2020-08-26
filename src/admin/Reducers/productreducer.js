const ProductReducer =function AllProductReducer(state = null, action){
    var listProduct = []
    switch (action.type) {
        case "LIST_PRODUCTS":
                return action.payload
                

        case "ADD_PRODUCT":
                let newProduct=[
                 action.payload,...state
                ]
                return newProduct
                

        case "EDIT_PRODUCT":   
                let filteredArray = state.filter((p) => {
                    return p.id !== action.payload.id;
                });
                    
                let updatedProduct = [action.payload, ...filteredArray];
                    return updatedProduct;

        case "SEARCH_PRODUCT":
                return action.payload

        default:
            break;
                
    }
   
    
    return listProduct
};
export default ProductReducer;