import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const Footer= ()=>{
    return(
        <div className="flex flex-col bg-green-300">
             <hr className="border border-4"/>
             <div className="flex justify-between p-4">
                 <h1 className="text-[30px] font-black cursor-pointer">  
                 myCrypto<span className="text-blue-800">Tracker</span>
                 </h1>
                    <div className="flex flex-col ">
                    <h2 className="text-xl font-bold">Contact us</h2>
                        <div className="flex flex-col text-3xl">
                             <IoLogoWhatsapp className="text-green-600" />
                             <FaFacebook className="text-blue-600" />
                             <FaGithub className="text-black-800"/>
                             <FaYoutube className="text-red-600" />
                        </div>
                    </div>
             </div>
        </div>
    )
};

export default Footer;