import React from 'react';
import SignIn from './Login/signIn'
import SignUp from './Login/signUp';
import Products from './Containers/ProductListing/products';
import AddProduct from './Containers/AddProducts/addproducts';
import Dashboard from './Containers/Dashboard/dashboard';
import EditProduct from './Containers/EditProduct/editproduct';
import ProductDesc from './Containers/ProductDetails/productdesc';
import { Route, Switch } from 'react-router-dom';
class RootComponent extends React.Component {
    state={ }
    render(){
        return(
            <div>
               <Switch>
               <Route exact path="/" component={()=><SignIn/>} ></Route> 
               <Route path='/signUp' component={()=><SignUp/>}></Route> 
               <Route path='/products' component={()=><Products/>}></Route> 
               <Route path='/productdesc' component={()=><ProductDesc/>}></Route>  
               <Route path='/addproducts' component={()=><AddProduct/>}></Route> 
               <Route path='/editproduct' component={()=><EditProduct/>}></Route>   
               <Route path='/dashboard' component={()=><Dashboard/>}></Route>   
               </Switch>  
            </div>
        );
    }
}
export default RootComponent;