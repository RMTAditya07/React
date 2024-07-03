exports.createPostValidator=(req,res,next)=>{
	req.check('title',"Write a title").notEmpty()
	req.check('title','Title length should be between 4 to 150').isLength({
		min:4,
		max:150
	})
	req.check('body',"Write a body").notEmpty()
	req.check('body','body length should be between 4 to 150').isLength({
		min:4,
		max:150
	})
	//check for errors
	const errors=req.validationErrors()
	//if error show the first one as they happen
	if(errors){
		const firstError = errors.map((error)=>error.msg)[0]
		return res.status(400).json({error:firstError})
	}
	//proceed to next middleware
	next()
}	

exports.userSignupValidator=(req,res,next)=>{
	//name is not null and is between 4- 10 char
	req.check("name","name is mandatory").notEmpty()
	//email is not null,valid and normalized
	req.check("email","Email must be between 4 to 32 char").notEmpty()
	.matches(/.+\@.+\..+/)
	.withMessage("Email must contain @")
	.isLength({
		min:4,
		max:150
	})
	//check for password
	req.check("password","Password is required").notEmpty()
	req.check('password')
	.isLength({
		min:6,
		max: 123
	})
	.withMessage("Password must contain atleast 6 characters")
	.matches(/\d/)
	.withMessage("Password must contain a number")
	//check for errors
	const errors=req.validationErrors()
	//if error show the first one as they happen
	if(errors){
		const firstError = errors.map((error)=>error.msg)[0]
		return res.status(400).json({error:firstError})
	}
	//proceed to next middleware
	next()
}