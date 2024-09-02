import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const CoinById= ()=>{
    const {id}=useParams();
    const[data,setData]=useState({});

    useEffect(()=>{
        fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
        .then((response)=>response.json())
        .then(response=>setData(response))
        .catch((err)=>console.error(err))
    },[]);
       
     console.log(data);
    return(<div>CoinByID</div>);

}
export default CoinById;