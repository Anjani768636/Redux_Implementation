const ProductReducer =function AllProductReducer(state = null, action){
    var listProduct = []
    switch (action.type) {
        case "LIST_PRODUCTS":
                return action.payload

        case "NEW_PRODUCT":
                let newProduct=[
                 action.payload,...state
                ]
                return newProduct

        case "PRODUCT_UPDATE":   
                let filteredArray = state.filter((p) => {
                    return p.id !== action.payload.id;
                });
                    
                let updatedProduct = [action.payload, ...filteredArray];
                    return updatedProduct;
    }
    
    return listProduct
};
export default ProductReducer;