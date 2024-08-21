import { Link } from "react-router-dom";

function Navbar() {
    return (
    <div className="flex border bg-green-500 shadow-xl justify-between items-center px-8 ">
       
    <Link to={"/"}><p><h1 className="text-[50px] font-black cursor-pointer">  
    myCrypto<span className="text-blue-800">Tracker</span>
    </h1></p></Link>
    <navitem className="flex gap-6">
    <Link to={"/top10"}><p className="text-sm font-semibold cursor-pointer mt-1 hover:text-white ">Top 10</p></Link>
    <Link to={"/trending"}><p className="text-sm font-semibold cursor-pointer mt-1 hover:text-white">Trending</p></Link>
    <Link to={"/watchlist"}><p className="text-sm font-semibold cursor-pointer mt-1 hover:text-white" >Watchlist</p></Link> </navitem></div>
    
    );
  }
  
  
  export default Navbar;
  