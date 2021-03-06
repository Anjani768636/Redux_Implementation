import React from 'react';
import Axios from 'axios';
import './editproduct.css';
import Header from '../../Header/header'
import { withRouter } from 'react-router-dom';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import editProductBroadcast from '../../Actions/editProductBroadcast';


class EditProduct extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            name:'',
            price:0.0,
            imgUrl:'',
            category:'',
            qty:0,
            success:false

        }
    }



    componentWillMount() {
        let editProduct=this.props.products.find((p)=>{
        return p.id === this.props.location.state});
        console.log(this.props.location.state)
                 this.setState({
                    id: editProduct.id,
                    image: editProduct.image,
                    name: editProduct.name,
                    price: editProduct.price,
                    quantity: editProduct.quantity,
                    category: editProduct.category,

                });
        
        
    }

    getName=(event)=>{
        this.setState({name: event.target.value})
    }

    getCategory=(event)=>{
        this.setState({category: event.target.value})
    }

    getURL=(event)=>{
        this.setState({image: event.target.value})
    }

    getPrice=(event)=>{
        this.setState({price: event.target.value})
    }

    getQty=(event)=>{
        this.setState({quantity: event.target.value})
    }

    getID=(event)=>{
        this.setState({id: event.target.value})
    }

    editProductSubmit=(event)=>{

        event.preventDefault()
        let productRequestBody = {
            "name": this.state.name,
            "price": this.state.price,
            "image":this.state.image,
            "category":this.state.category,
            "quantity":this.state.quantity,
            "id":this.state.id
        }

        Axios.put("http://localhost:3000/allProducts/" + this.state.id, productRequestBody)
            .then(response => {
                console.log(response)
                
                this.setState({success:true})
                this.props.editProductB(response.data)
            }, error => {
                console.log(error)
            })

        }
    mainpage(event){
        this.props.history.push('/products')  
    }

    render() { 
        if(this.state.success===true)
        {
            return (
                <div>
                    <Header></Header>
                <center>
                    <h2>Product Details Edited Successfully!!!</h2>
                    <p>Click on OK to redirect to products page.</p>
                    <button type="submit" className="buttonap" onClick={this.mainpage.bind(this)}>OK</button>
                </center>
                </div>
            )
        }
        return ( 
            <div>
                <Header></Header>
            <div className="containerep">
               <div>
                   <form onSubmit={this.editProductSubmit.bind(this)}>
                       <h2>Product Details:</h2>
                       <div className="rowep">
                            <div className="col-25ep">
                                <label className="labelep">*Add Category:</label>
                            </div>
                            <div className="col-75ep">
                                <input className="inputfieldep" type="text" value={this.state.category} id="category" onChange={this.getCategory} required/>
                            </div>
                       </div>

                       <div className="rowep">
                            <div className="col-25ep">
                                <label className="labelep">*Add Image URL:</label>
                            </div>
                            <div className="col-75ep">
                                <input className="inputfieldep" type="text" id="imgUrl" value={this.state.image} onChange={this.getURL} required/>
                            </div>
                       </div>

                       <div className="rowep">
                            <div className="col-25ep">
                                <label className="labelep">*Product Name:</label>
                            </div>
                            <div className="col-75ep">
                                <input className="inputfieldep" type="text" id="name" value={this.state.name} onChange={this.getName} required/>
                            </div>
                       </div>

                       <div className="rowep">
                            <div className="col-25ep">
                                <label className="labelep">*Price:</label>
                            </div>
                            <div className="col-75ep">
                                <input className="inputfieldep" type="0.25" id="price" pattern="^[1-9][0-9]+([\.,][0-9]+)?" title="Numbers greater than 0 and not preceded by 0" value={this.state.price} onChange={this.getPrice} required/>
                            </div>
                       </div>
                       
                       <div className="rowep">
                            <div className="col-25ep">
                                <label className="labelep">*Quantity:</label>
                            </div>
                            <div className="col-75ep">
                                <input className="inputfieldep" type="number" min="1" title="Numbers greater than 0" value={this.state.quantity} onChange={this.getQty} required/>
                            </div>
                       </div>
                       <div>
                            <button className="buttonep">Submit</button>
                       </div>  
                   </form>
               </div>
            </div>
            </div>
         );

    }

}

 function matchDispatchToProps(dispatch){
     return bindActionCreators({
        editProductB: editProductBroadcast
     },dispatch);
     
 }

 function mapStatesToProps(store) {
    console.log(store.allProducts);
    return {
      products: store.allProducts
    };
  }
  export default withRouter (connect(mapStatesToProps, matchDispatchToProps)(EditProduct));