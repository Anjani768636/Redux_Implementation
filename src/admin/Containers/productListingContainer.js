import React from 'react';
import '../ProductListing/products.css'
import axios from 'axios';
import ProductDetail from '../ProductDetails/productdetails';
import Header from '../Header/header'
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import listProductsBroadcasting from '../Actions/listProductBroadcast'

class ProductList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
   
            noData:false,
            sortvalue:false
        }
    }
   

    componentWillMount() {
        // if(this.props.allProducts.length === 0){
        //     this.getAllProducts()
        // }
        this.getAllProducts()
    }

    getAllProducts = () => {
        axios.get("http://localhost:3000/allProducts").then(response => {
        console.log(response.data)
        this.props.sendAllProducts(response.data)
        //this.setState({products:this.props.allProducts})
        }, error => {
            console.log(error)
        })
    }

    deleteProductById = (id) => {
        console.log(id)
        axios.delete("http://localhost:3000/allProducts/" + id).then(response => {
        this.getAllProducts()
        this.myFunction()
        }, error => {
            console.log(error)
        })
    }

    editProductById = (id) => {
        console.log(id)
        //this.setState({ myid: id })
        this.props.history.push({
            pathname: '/editproduct',
            state: id
        })
    }
    viewProductById = (id) => {
        console.log(id)
        //this.setState({ myid: id })
        this.props.history.push({
            pathname: '/productdesc',
            state: id 
        })
    }

    renderAllProducts = () => {
       return this.props.allProducts.map(product => {
           console.log(product)
           console.log(product.name);
            return (
                <div className="columnpl" style={{display:"inline"}} >
                <div className="cardpl" >  
                    <img src={product.image} alt={product.name}style={{height:"200px",width:"200px"}}/> 
                    <p>{product.name} Rs: {product.price}</p>
                    <p>Qty: {product.quantity}</p>
                    <button className="buttonpl" onClick={this.editProductById.bind(this,product.id)} >Update</button>
                    <button className="buttonpl" onClick={()=>this.deleteProductById(product.id)}>Delete</button>
                    <button className="buttonpl" onClick={()=>this.viewProductById(product.id)}>View Product</button> 
                </div> 
              </div>
            )
        })
    }

    addProduct() {
        this.props.history.push('/addproducts')
    }

    searchHandle(event){
        this.setState({searchtext:event.target.value},()=>{
        console.log(this.state.searchtext)
        const prod=this.state.productsList.filter(p=>{
        return( p.name.toLowerCase().includes(this.state.searchtext.toLowerCase()) ||
        p.category.toLowerCase().includes(this.state.searchtext.toLowerCase()) ||
        p.quantity.toLowerCase().includes(this.state.searchtext.toLowerCase())
        )})
        if(!prod.length){
        this.setState({noData:true})   
        }
        this.setState({products:prod})
        })
    }

    myFunction() {
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      }

      sorting(){
          console.log("inside sorting")
        const newlist=this.state.products;
        if(this.state.sortvalue===false){
            console.log("sort value false")
            newlist.sort((a,b)=>
                a.price - b.price)            
            this.setState({products:newlist})
            console.log(newlist)
            return this.setState({sortvalue:true})
        }
        if(this.state.sortvalue===true){
            console.log("sort value true")
            console.log(newlist)
            this.getAllProducts()
            return this.setState({sortvalue:false})
        }
    }
 
    render() {
        if(this.state.noData){
            this.setState({noData:false})
            return(
                
            <div>
            <Header></Header>
                <div>
                    <div>
                        <form>
                            <div>
                                <label>Search:</label>
                                <input type="text" className="searchbarpl" onChange={this.searchHandle.bind(this)}/>
                            </div> 
                            <div>Product Not Found</div>  
                        </form>
                    </div>
                    
                </div>
        </div>


            );
        }

        return (
         
            <div>
                <Header></Header>
                    <div>
                        <div>
                            <form>
                                <div>
                                    <label>Search:</label>
                                    <input type="text" className="searchbarpl" onChange={this.searchHandle.bind(this)}/>
                                </div> 
                                <div>
                                <button className="buttonpl" onClick={this.sorting.bind(this)}>Sort</button>
                                </div>
                                <div id="snackbar">Product Deleted Successfully!!!</div>  
                            </form>
                        </div>
                        {this.renderAllProducts()}
                    </div>
            </div>
        );
    }
}




function convertStoreToProps(store){
    console.log("store created")
    //console.log(store.allProducts)
    return{
        allProducts:store.allProducts
    }
}

function convertFunctionToPropsToBroadcast(dispatch){
    return bindActionCreators({
        sendAllProducts: listProductsBroadcasting

    }, dispatch)
}

export default withRouter( connect(convertStoreToProps,convertFunctionToPropsToBroadcast) (ProductList));