import React from "react";
import Card from "./Card";
import Sdata3 from "./Sdata3";
const Zeetv = ()=>{
return(
<>
<h1 className="heading">ZEETV OLD SERIALS</h1>
{Sdata3.map((val) => {
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

export default Zeetv;