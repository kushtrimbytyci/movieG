const asyncHandler = require('../helpers/asyncHandler')
const errorHandler = require('../helpers/errorHandler')
const bcryptjs = require('bcryptjs')
const UserSchema = require('../Models/Users')


exports.register = asyncHandler(async(req,res,next)=>{
    const {email,password,role} = req.body
    let user = await UserSchema.findOne({email})
    if(user)
    {
        return next(new errorHandler('User exist',401))
    }
    user = await UserSchema.create({email,password,role})
    sendTokenResponse(user,200,res)
})

exports.login = asyncHandler(async(req,res,next)=>{
    const {email,password} = req.body
    if(!email || !password)
    {
        return next(new errorHandler('No email or password',401))
    }

    const user= await UserSchema.findOne({email}).select('+password')
    if(!user)
    {
        return next(new errorHandler('No user',401))
    }
    const comparePasswords = await bcryptjs.compare(password,user.password)

    if(comparePasswords)
    {
        sendTokenResponse(user,200,res)
    }

})
 
exports.getme=asyncHandler(async(req,res,next)=>{
    const user = await UserSchema.findById(req.user.id)
    if(!user)
    {
        return next(new errorHandler("No user",401))
    }

    res.status(200).json({success:true,data:user})
})
 
const sendTokenResponse =(user,statusCode,res)=>
{   
    const token = user.getSignedJwtToken()

    const options ={
        expires:new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE *24*60*60*1000) ,
        httpOnly:true 
    }

    res.status(statusCode).cookie('token',token,options).json({success:true,token})
}