import React from "react";
import { MdStarPurple500 } from "react-icons/md";
import { MdStarRate } from "react-icons/md";
import { IoIosTrendingUp } from "react-icons/io";
import { IoIosTrendingDown } from "react-icons/io";
import { BiCoinStack } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { handleAdd } from "../store/watchlistSlice";




const Card= ({item, checker})=>{
  const watchlist = useSelector((store) => store.watchlist);

  const dispatch = useDispatch();

  function watchlistadd() {
    dispatch(handleAdd(item));

    
  }
  const handleFirst= ()=>{
    watchlistadd();
  }
  const handleSecond= ()=>{
    <MdStarRate />
  }
  const handleClick = () => {
    handleFirst();
    handleSecond();}
  
  
    return (
        <div className="bg-blue-100 flex flex-col w-full my-4 rounded-md shadow-lg border-1 gap-4">
            <div className="flex items-center gap-4">
            <Link to={`/coins/${item.id}`}>
              <img className="w-[50px]" src={(checker==="Top10")? item.thumb:item.image} alt="img"/></Link>
              <div className="flex-col w-full">
                  <h2>{item.name}</h2>
                  <h2 className="text-gray-400">{item.symbol}</h2>
              </div>
             <button onClick={handleClick}><MdStarPurple500  className="text-3xl" /></button>
            </div>
            <div className="flex w-full">
  
                    {checker === "Top10" ? "" : (
                        <>
      {item.price_change_24h > 0 ? (
                        <>
          <h2 className="border font-semibold rounded-xl border-green-700 bg-green-100 p-2">
            &#36;{item.price_change_24h}
          </h2>
          <h2 className="border font-extrabold rounded-3xl text-green-700 border-green-700 bg-green-100 p-2">
            <IoIosTrendingUp />
          </h2>
        </>
      ) : (
        <>
          <h2 className="border font-semibold rounded-xl border-red-700 bg-red-100 p-2">
            &#36;{item.price_change_24h}
          </h2>
          <h2 className="border font-extrabold text-red-700 rounded-3xl border-red-700 bg-red-100 p-2">
            <IoIosTrendingDown />
          </h2>
        </>
      )}
    </>
  )}
</div>
            <h2 className="text-[25px] font-bold text-green-600">
             &#36; { checker==="Top10"? 
             
            ( Math.round(item.data.price *1000000)/1000000)
           :
            item.current_price}
      </h2>
       <div className="flex flex-col gap-1">
        <h2 className="text-[14px]">
          Market Capacity: 
          {checker === "Top10" ? item.data.market_cap : item.market_cap}
        </h2>
        <h2 className="text-[14px]">
          Total volume:
          {checker === "Top10" ? item.data.total_volume : item.total_volume}
        </h2>
      </div>

        
        </div>
    )
};

export default Card;