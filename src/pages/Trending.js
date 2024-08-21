import React from "react";
import { useState, useEffect } from "react";
import Cards from "../components/Cards";
import { BiLoader } from "react-icons/bi";

const Trending= ()=>{
  const[data,setData]=useState([]);

  useEffect(() =>{
  const url =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
  fetch(url)
    .then((response)=>response.json())
    .then((data)=> setData(data))
    .catch((err)=>console.log(err))
  },[]);
        if(data.length===0)
        {
          return(
        <div className="flex text-4xl  h-[100vh] justify-around items-center">
          <BiLoader />
        </div>)}
        else{
         return <Cards data={data}/>
        }
       
};

export default Trending;