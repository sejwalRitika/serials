import React from "react";
import Card from "./Card";
import Sdata2 from "./Sdata2";
const Colors = ()=>{
return(
<>
<h1 className="heading"> COLORS OLD SERIALS</h1>
{Sdata2.map((val) => {
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
export default Colors;