const jwt=require('JsonWebToken')
require('dotenv').config()
const expressJwt=require('express-jwt')
const User=require('../models/user')

exports.signup=async(req,res)=>{
	const userExists=await User.findOne({email:req.body.email})
	if(userExists) return res.status(403).json({
		error:"Email already exists"
	})
		const user=await new User(req.body)
		await user.save()
		res.status(200).json({message : "Signed in succesfully!!"})
}

exports.signin=(req,res)=>{
	//find user based on email
	const {email,password}=req.body
	User.findOne({email},(err,user)=>{
		//if error or no user
		if(err || !user){
			return res.status(401).json({
				error:"NO such user exists! please signup."
			})
		}
		//if user is found make sure the email and password match
		//create authenticate method in model and use here
		if(!user.authenticate(password)){
			return res.status(401).json({
				error:"email and password do not match!"
			})
		}
		//generate a token with user id and secret
		const token=jwt.sign({_id:user._id},process.env.JWT_SECRET)

		//persist the token as 't' in cookie with expiry date
		res.cookie("t",token,{expire:new Date()+9999})

		//return response with user and token to frontend client
			// const {_id, name, email}=user
			// return res.json({token, user:{user._id, user.email, user.name}})
		const {_id, name, email: _email} = user;
		return res.json({token, user:{_id, email: _email,name}});
	})
	
}

exports.signout=(req,res)=>{
	res.clearCookie("t")
	return res.json({
		message : "Signed out successfully"
	})
}


exports.requireSignin = expressJwt({
	//if the token is valid,express jwt appends the verified users id
	//in an auth key to the request object
	secret:process.env.JWT_SECRET,
	userProperty:"auth"
})	
