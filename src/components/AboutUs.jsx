import React from "react";
import Logo from "../assets/Potter_logo.png"

function AboutUs (){
    return(
        <section className="bg-red-600 min-h-screen text-white py-20">
            <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-16 items-center">
                <div className="flex justify-center">
                    <img src={Logo} alt="School Logo" className="w-[350px] rounded-lg shadow-lg"  />
                </div>
            <div>
                <h1 className="text-5xl font-bold mb-8">
                    About Us
                </h1>
                <h2>
                    A community of creative thinkers, programmers, and innovators at <span className="font-bold">POTTER PRIVATE SCHOOL</span>
                </h2>
                <p>
                    Potters Coding Team is focused on helping young students to learn about Coding, Programming and UI/UX Designer to become the Best in the field
                </p>
            </div>
            </div>
        </section>
    )
}

export default AboutUs