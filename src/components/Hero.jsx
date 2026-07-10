import React from 'react'
import HeroImage from '../assets/hero.png'

function Hero() {
  return (
 <section className="bg-gray-100 min-h-screen">
    <div className="max-w-7xl mx-auto px-10 py-20 grid md:grid-cols-2 items-center gap-10">
        <div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-red-600 leading-tight">
                Where Young Coders <br/> Become Future Tech <br/> Leaders
            </h1>
            <p className="mt-6 text-2xl font-medium text-gray-800">
                A Community Of Creative Thinkers,Programmers,And Inovators At 
                <span className="font-bold text-red-600">
                    {' '}POTTERS PRIVATE SCHOOL
                </span>
            </p>
            <p className="mt-4 text-lg text-gray-600">
                From Coding Fundermental To Real-World Projects,Our Students Gain Pratical Experience,Collaborate On Exciting Challenges, And Develop The Confidence To Turn Ideas Into Digital Solutions.
            </p>

            <div className="mt-10 flex gap-5">
                <button className="bg-red-600 text-white  px-8 py-3 rounded-xl font-semibold hover:bg-red-700">
                    Join Us
                </button>

                <button className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-xl font-semibold hover:bg-red-600 hover:text-white">
                    Explore Projects
                </button>
        
        </div>
            </div>
        <div className="flex justify-center">
            <img src={HeroImage} alt="Coding Team" className="w-full max-w-xl" />
        </div>
        </div>
 </section>
  )
}

export default Hero