import React from "react";
const Card = (props)=>{
return(
<>
<div className="cards">
<div className="card">
<img src={props.img} alt="mypic" className="card-img"/>
<div className="card_info">
<div className="card_category">{props.title}</div>
<a href={props.link}>
<button>WATCH NOW</button>
</a>
</div>
</div>
</div>
</>
)
}
export default Card;
