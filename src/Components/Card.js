import React from "react";

function Card(){
    return(
        <div>
            <div>{items.map((item,index)=>{
                return (<div><h2>{item.name}</h2></div>)
            })}</div>
        </div>
    )
}
export default Card;