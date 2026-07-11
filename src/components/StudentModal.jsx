import React from "react";

import Fawwaz from "../assets/Fawwaz.png";
import Obaloluwa from "../assets/Obaloluwa.png";
import Adeoluwaju from "../assets/adeoluwaju.png";
import Muizz from "../assets/muizz.png";
import Zeenat from "../assets/zeenat.png";
import Dominion from "../assets/dominion.png";
import Alameen from "../assets/alameen.png";
import Abdulrahman from "../assets/abdulrahman.png";

function StudentModal({ member, onClose }) {
  if (!member) return null;
  return (
    // Dark Background Overlay
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      {/* Modal Container */}
      <div className="bg-white w-[95%] max-w-5xl max-h-[90vh] rounded-xl shadow-2xl relative overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-3xl font-bold text-red-700 hover:text-red-900"
        >
          &times;
        </button>

        {/* Modal Content */}
        <div className="grid md:grid-cols-2">
          {/* Left Side - Student Image */}
          <div className="bg-gray-200 flex items-end justify-center h-[550px]">
            <img
              src={member.image}
              alt={member.name}
              className="w-[420px] h-[500px] object-contain"
            />
          </div>

          {/* Right Side - Student Information */}
          <div className="p-10">
            <h1 className="text-4xl font-bold text-red-700">{member.name}</h1>

            <p className="text-lg text-gray-600 mt-2">{member.role}</p>

            <hr className="my-6" />

            {/* About Student */}
            <h2 className="text-2xl font-semibold text-red-700">About</h2>

            <p className="mt-4 text-gray-700 leading-8">{member.bio}</p>

            {/* Skills */}
            <h2 className="text-2xl font-semibold text-red-700 mt-8">Skills</h2>

            <div className="flex flex-wrap gap-3 mt-4">
              {member.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-red-100 text-red-700 px-4 py-2 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentModal;
