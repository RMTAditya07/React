import React from "react";
import {Route,Switch} from 'react-router-dom'
import Home from './core/Home'
import Menu from './core/Menu'
import Signin from "./user/Signin";
import Signup from "./user/Signup";
import Profile from "./user/Profile";
const MainRouter = () =>(
    <div>
        <Menu />
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/signin" component={Signin}/>
            <Route exact path="/user/:userId" component={Profile}/>
        </Switch>
    </div>

)

export default MainRouter