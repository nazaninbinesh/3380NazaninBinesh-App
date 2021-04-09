import React,{useEffect, useState} from 'react';
import {productsList} from '../../Services/Services'

function Products(){
   
    useEffect(()=>{
        productsList();
    })
    return(
        <h1>Products list page</h1>
    )
}

export default Products;