import React, { Component } from "react";
import { MDBInput,MDBBtn } from 'mdb-react-ui-kit';
import {signup} from "../auth"

class Signup extends Component{
    constructor(){
        super()
        this.state={
            name:"",
            email:"",
            password:"",
            error:"",
            opem:false
        }
    }
    handleChange=name=>event=>{
        this.setState({error:""})
        this.setState({[name]:event.target.value})
    }

    clickSubmit= event =>{
        event.preventDefault()
        const {name,email,password}=this.state//destruct
        const user={
            name,
            email,
            password
        }
        //console.log(user)
        signup(user)
        .then(data=>{
            if(data.error) this.setState({error:data.error})
                else this.setState({
                    error:"",
                    name:"",
                    email:"",
                    password:""  ,
                    open:true

                })
        })
    }
    

    signupForm = (name,email,password) => (
        <form>
                    <div className='w-25 h-50 mx-auto borderWidth={1} borderRadius={4}'>
                        <MDBInput className='mb-4'
                            onChange={this.handleChange("name")} 
                            label='Name' 
                            id='typeText' 
                            type='text'
                            value={name} 
                        />
                        <br />
                        <MDBInput className='mb-4'
                            onChange={this.handleChange("email")} 
                            label='Email address' 
                            id='typeEmail' 
                            type='email'
                            value={email}
                        />
                        <br />
                        <MDBInput className='mb-4'
                            onChange={this.handleChange("password")} 
                            label='Password' 
                            id='typePassword' 
                            type='password' 
                            value={ password}
                        />
                        <br />
                        <MDBBtn type='submit' block onClick={this.clickSubmit}>Submit</MDBBtn>
                    </div>
                </form>
    )

    render(){
        const {name,email,password,error,open}=this.state//destruct
        return (
            <div>
                <h2 className="text-center">Signup</h2>
                <br/>
                <div className="alert alert-danger"
                    style={{display:error ? "" : "none"}}
                >
                    {error}
                </div>
                <div className="alert alert-info"
                    style={{display:open ? "" : "none"}}
                >
                    New account is created Succesfully! Please Signin.
                </div>
                {this.signupForm(name,email,password)}
            </div>
        )
        }
}

export default Signup