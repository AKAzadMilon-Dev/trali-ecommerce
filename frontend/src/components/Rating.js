import React from 'react'
import { BsStarFill,BsStarHalf,BsStar } from "react-icons/bs";

const Rating = ({rating}) => {
  return (
    <div>
        <div className={rating>=1?<BsStarFill/>:rating>=.5?<BsStarHalf/>:<BsStar/>}></div>
        <div className={rating>=2?<BsStarFill/>:rating>=1.5?<BsStarHalf/>:<BsStar/>}></div>
        <div className={rating>=3?<BsStarFill/>:rating>=2.5?<BsStarHalf/>:<BsStar/>}></div>
        <div className={rating>=4?<BsStarFill/>:rating>=3.5?<BsStarHalf/>:<BsStar/>}></div>
        <div className={rating>=5?<BsStarFill/>:rating>=4.5?<BsStarHalf/>:<BsStar/>}></div>

    </div>
  )
}

export default Rating