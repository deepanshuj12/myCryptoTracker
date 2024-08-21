import React from "react";
import { useState,useEffect } from "react";
import { BiLoader } from "react-icons/bi";
import Cards from "../components/Cards";

const Top10= ()=> {
    const [data,setData]= useState([]);

    useEffect(()=>{
    const url="https://api.coingecko.com/api/v3/search/trending/?precision=3";
    fetch(url)
    .then((response)=>response.json())
    .then((data)=>setData(data))
    .catch((err)=>console.log(err));
    },[]);
      
    if(data.length===0)
        {
          return(
        <div className="flex text-4xl  h-[100vh] justify-around items-center">
          <BiLoader />
        </div>)}
        else{
         return <Cards data={data.coins} checker="Top10"/>
        }
};

export default Top10;