import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Colors from "./Colors";
import Navbar from "./Navbar";
import Spinner from "./Spinner";
import Starplus from "./Starplus";
import Zeetv from "./Zeetv";
const App = () =>{
const [loading, setLoading]= useState(true)
useEffect(()=>{
setLoading(true)
setTimeout(()=>{
setLoading(false)
},1000)
},[])
return(
<>
{
loading? 
<Spinner color={"white"} loading={loading} size={10}/>
:
<div>
<Navbar/>
<Routes>
<Route path="/" Component={Starplus}/>
<Route path="/colors" Component={Colors}/>
<Route path="/zeetv" Component={Zeetv}/>
</Routes>
</div>
}
</>
)
};
export default App;

