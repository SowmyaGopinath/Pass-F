import React from 'react'
import { Outlet,Navigate } from 'react-router-dom';
import { Login } from '../component/Login';
const authUser = () =>{
    const user ={login : false};

    return user && user.login
}
const Protect = () => {
    const isAuth = authUser();
  return isAuth ? <Outlet/> : <Navigate to ="/" />
}

export default Protect

