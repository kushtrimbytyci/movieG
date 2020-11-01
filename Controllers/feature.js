const mongoose = require('mongoose')
const asyncHander = require('../helpers/asyncHandler')
const errorHandler = require('../helpers/errorHandler')
const FeatureSchema = require('../Models/Feautered')

exports.getFeatures = asyncHander(async(req,res,next)=>{
    const feature = await FeatureSchema.find().limit(5)
    if(!feature) {
        return next(new errorHandler('No feature found',401))
    }
    res.status(200).json({success:true,data:feature})
})

