import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";
const Starplus = ()=>{
return(
<>
<h1 className="heading">STARPULS OLD SERIALS</h1>
{Sdata.map((val) => {
return(
<Card
img={val.imgsrc}
title={val.title}
link={val.link}
/>
)
}
)
}
</>
)
}

export default Starplus;