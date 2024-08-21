import { useState } from "react";

const Home=function(){
    var [likes, setLikes]= useState(0);
    
    var likeFunction= function(){
    console.log(likes) ;
    setLikes(likes+1);};

    return(
        <div>
        <button onClick={likeFunction}>Like</button>
        <h2>{likes}</h2>
        </div>
    )
};

export default Home;