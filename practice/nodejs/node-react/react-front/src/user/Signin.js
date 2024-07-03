import React, { Component } from "react";
import { MDBInput,MDBBtn,MDBSpinner } from 'mdb-react-ui-kit';
import { Redirect } from "react-router-dom";
import {signin,authenticate} from '../auth'

class Signin extends Component{
    constructor(){
        super()
        this.state={
            email:"",
            password:"",
            error:"",
            redirectToReferer:false,
            loading:false
        }
    }
    handleChange=name=>event=>{
        this.setState({error:""})
        this.setState({[name]:event.target.value})
    }

    

    clickSubmit= event =>{
        event.preventDefault()
        this.setState({loading:true})
        const {email,password}=this.state//destruct
        const user={
            email,
            password
        }
        console.log(user)
        signin(user)
        .then(data=>{
            if(data.error){
                this.setState({error:data.error,loading:false})
            }else{
                //authenticate
                authenticate(data,()=>{
                    this.setState({redirectToReferer:true})
                })
                //redirect
            }
        })
    }
   

    signinForm = (email,password) => (
        <form >
                    <div className='w-25 h-50 mx-auto borderWidth={1} borderRadius={4} align-items-center justify-content-center'>
                        <MDBInput 
                            onChange={this.handleChange("email")} 
                            label='Email address' 
                            id='typeEmail' 
                            type='email'
                            value={email}
                        />
                        <br />
                        <MDBInput 
                            onChange={this.handleChange("password")} 
                            label='Password' 
                            id='typePassword' 
                            type='password' 
                            value={ password}
                        />
                        <br />
                        <MDBBtn block className="align-items-center" onClick={this.clickSubmit}>Submit</MDBBtn>
                    </div>
                </form>
    )

    render(){
        const {email,password,error,redirectToReferer,loading}=this.state//destruct
        if(redirectToReferer){
            return <Redirect to="/" />
        }
        return (
            <div className="align-items-center">
                <h2 className="mt-10 text-center">Sign in</h2>
                <br/>
                <div className="alert alert-danger"
                    style={{display:error ? "" : "none"}}
                >
                    {error}
                </div>
                <div className='d-flex justify-content-center'>
                
                {loading ? (
                    <MDBSpinner role='status'>
                    <span className='visually-hidden'>Loading...</span>
                  </MDBSpinner>
                ):(
                    ""
                )}
                </div>
                <br />
                {this.signinForm(email,password)}
            </div>
        )
        }
}

export default Signin