import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import Loadingui from "../components/Loadingui";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Top10 = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    if (user === "") {
      navigate("/");
    } else {
      const url = "https://api.coingecko.com/api/v3/search/trending";
      
      fetch(url)
        .then(response => response.json())
        .then(result => {
          setData(result.coins.map(coin => coin.item));
        })
        .catch(error => console.error("Error fetching data:", error));
    }
  }, [user, navigate]);

  return data.length === 0 ? (
    <Loadingui />
  ) : (
    <div className="container w-full mx-auto">
      <Cards data={data} checker={"Top10"} />
    </div>
  );
};

export default Top10;



