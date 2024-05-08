const express=require("express");
const router=express.Router({mergeParams:true});
const wrapAsync=require("../utils/wrapAsync.js");
const ExpressError=require("../utils/ExpressError.js");
const Review=require("../models/reviews.js");
const Listing=require("../models/listing.js");
const{validateReview, isLoggedIn,isAuthor}=require("../middleware.js");
const reviewController=require("../controllers/reviews.js")

//REVIEW ROUTE
router.post("/",isLoggedIn, validateReview, wrapAsync(reviewController.createReview));

//REVIEW DELETE ROUTE
router.delete("/:reviewId",isLoggedIn,isAuthor,wrapAsync(reviewController.destroyReview));

module.exports=router;