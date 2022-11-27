import React from 'react';
import { Outlet,Navigate } from 'react-router-dom';

const ProtectedRoutes = () => {

    const token=localStorage.getItem("token")

    if(token!=="" && token!==null){
        console.log(token)
        return <Outlet/>
    }else{
        return <Navigate to={"/LogIn"}/>
    }
    
};

export default ProtectedRoutes;