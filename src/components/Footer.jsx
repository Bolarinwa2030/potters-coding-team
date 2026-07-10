import React from "react";
import Logo from "../assets/Potter_logo.png"

function Footer (){
    return (
       <section className="bg-red-600 min-h-screen text-white py-20">
        <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-3 gap-16 items-center">
            <div className="flex justify-center">
                <img src={Logo} alt="School logo" className="w-[150px] rounded-lg shadow-lg " 
                   
                 />
            </div>
            <div>
                <p>Facebook: <span>@Pottersprivateschool </span> </p>
                <p>Instagram: <span>@Pottersprivateschool</span></p>
                <p>Twitter: <span>@Pottersprivateschool </span></p>

            </div>
            <div>
                <p>Home</p>
                <p>About us</p>
                <p>project </p>

            
                
            </div>
        </div>

       </section> 
    )
}
export default Footer