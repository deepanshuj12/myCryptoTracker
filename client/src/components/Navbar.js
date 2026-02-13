import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../store/userSlice";

function Navbar() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClick() {
    localStorage.removeItem("token");
    dispatch(removeUser());
    navigate("/login");
  }

  return (
    <div className="w-full border shadow-xl">
      <div className="flex justify-between mx-auto items-center px-8 py-4 container">
        <Link to={"/"}>
          <h1 className="text-[30px] font-black cursor-pointer">
            myCrypto<span className="text-blue-800">Tracker </span>
          </h1>
        </Link>

        {user && (
          <div className="flex font-bold text-[20px] gap-6">
            <Link to={"/top10"}>
              <p className="cursor-pointer hover:text-blue-600">Top10</p>
            </Link>
            <Link to={"/trending"}>
              <p className="cursor-pointer hover:text-blue-600">Trending</p>
            </Link>
            <Link to={"/watchlist"}>
              <p className="cursor-pointer hover:text-blue-600">Watchlist</p>
            </Link>
          </div>
        )}

        <div className="flex gap-4">
          {user ? (
            <button
              onClick={handleClick}
              className="bg-blue-400 text-white px-4 py-2 rounded-lg shadow-lg"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to={"/login"}>
                <button className="bg-blue-400 text-white px-4 py-2 rounded-lg shadow-lg">
                  Login
                </button>
              </Link>
              <Link to={"/signin"}>
                <button className="bg-blue-400 text-white px-4 py-2 rounded-lg shadow-lg">
                  Signin
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;

