import React,{Component} from "react";
import { Redirect } from "react-router-dom";
import {isAuthenticated} from "../auth"
import {read} from './apiUser'

class Profile extends Component{
    constructor(){
        super()
        this.state={
            user:"",
            requireToSignin:false
        }
    }

    

    init = userId =>{
        const token=isAuthenticated().token
        read(userId,token)
        .then(data =>{
            if(data.error){
                this.setState({redirectToSignin:true})
            }else{
                this.setState({user:data})
            }
    
        })
    }
componentDidMount(){
    const userId=this.props.match.params.userId
    this.init(userId)
    
}

    render(){
        const redirectToSignin=this.state.redirectToSignin
        if(redirectToSignin) return <Redirect to="/signin" />

        return(
            <div className="container">
                <h2 className="mt-5 mb-5">Profile</h2>
                <p>Hello {isAuthenticated().user.name}</p>
                <p>Hello {isAuthenticated().user.email}</p>
                <p>{`Joined ${new Date(
                    this.state.user.created).toDateString()}`}</p>
            </div>
        )
    }
}

export default Profile