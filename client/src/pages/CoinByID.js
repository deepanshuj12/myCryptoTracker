import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CoinById = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    if (user === "") {
    navigate("/");
  } else {
    fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err));
  }}, [id]);

  console.log(data);

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6 bg-slate-300">
        <h1 className="text-3xl font-bold mb-4">{data.name}</h1>
        <img
          className="w-32 h-32 mx-auto mb-4"
          src={data.image?.large}
          alt={data.name}
        />
        <p className="mb-2 text-gray-700">{data.description?.en}</p>
        <p className="text-lg font-semibold">
          Market Cap: ${data.market_data?.market_cap?.usd.toLocaleString()}
        </p>
        <p className="text-lg font-semibold">
          Current Price: ${data.market_data?.current_price?.usd}
        </p>
        {/* Add more details as needed */}
      </div>
    </div>
  );
};

export default CoinById;



