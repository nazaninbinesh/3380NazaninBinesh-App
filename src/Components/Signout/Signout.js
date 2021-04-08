import React, { useState, useEffect } from 'react';
import Signin from '../Signin/Signin';
import {Link} from 'react-router-dom';

function Signout(){
 
    return(        
        <div className="container">
            <h3 className="mt-5">You are successfully signed out.{sessionStorage.removeItem('token')}</h3>
            <Link to='/'>
                <p>Back to Login page</p>
            </Link>
        </div>                                            
        
    )
}

export default Signout;