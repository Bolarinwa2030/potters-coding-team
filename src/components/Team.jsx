import React from "react";
import { useState } from "react";
import StudentModal from "./StudentModal";

// Images
import Fawwaz from "../assets/Fawwaz.png";
import Obaloluwa from "../assets/Obaloluwa.png";
import Adeoluwaju from "../assets/adeoluwaju.png";
import Muizz from "../assets/muizz.png";
import Zeenat from "../assets/zeenat.png";
import Dominion from "../assets/dominion.png";
import Alameen from "../assets/alameen.png";
import Abdulrahman from "../assets/abdulrahman.png";

function Team() {
  // Team Members Data
  const members = [
    {
      image: Fawwaz,
      name: "AKINWALE FAWWAZ",
      role: "UI/UX DESIGNER",
      bio: "I Am  Akinwale fawwaz,I am in potters private school, Iam in science depertment, I handeld the about us page ",
      skills: ["HTML", "CSS", "React", "UI/UX"],
    },

    {
      image: Obaloluwa,
      name: "OGUNBOWALE OBALOLUWA",
      role: "UI/UX DESIGNER",
      bio: "My name is Obaloluwa,I'm a student of Potters Private School,I am in Science Department,I handled the Hero section and navbar with my colleagues",
      skills: ["HTML", "CSS", "React", "UI/UX"],
    },

    {
      image: Adeoluwaju,
      name: "ADEDIJI ADEOLUWAJU",
      role: "UI/UX DESIGNER",
      bio: "My name I Adediji Adeoluwaju,I Am In sss1, I Am In Science Department. I Handled The Hero Sectiom And Navbar",
      skills: ["HTML", "CSS", "React", "UI/UX"],
    },

    {
      image: Muizz,
      name: "ADENIYI ABDUL MUIZZ",
      role: "UI/UX DESIGNER",
      bio: "My name is adeniyi abdul muizz, I am a student of potters private school, I am in science department, I handled the about us page with my colleagues",
      skills: ["HTML", "CSS", "React", "UI/UX"],
    },

    {
      image: Zeenat,
      name: "ODERINDE ZEENAT",
      role: "UI/UX DESIGNER",
<<<<<<< HEAD
      bio: "My name is Oderinde Zeenat, I am a student of Potters Private School. I handled the Hero section and navbar with my colleagues.",
=======
      bio: "MY NAME IS ODERINDE ZEENAT 'I AM IN JSS2.MY BEST COLOUR IS PINK 'MY BEST FOOD IS RICE AND BEANS",
>>>>>>> c5e0ebe7f71f8476b922b6cf94f1b5ef9c1856da
      skills: ["HTML", "CSS", "React", "UI/UX"],
    },

    {
      image: Dominion,
      name: "ADEBIYI DOMINION",
      role: "UI/UX DESIGNER",
      bio: "..........",
      skills: ["HTML", "CSS", "React", "UI/UX"],
    },

    {
      image: Alameen,
      name: "OKEWUSI AL-AMEEN",
      role: "UI/UX DESIGNER",
      bio: "..........",
      skills: ["HTML", "CSS", "React", "UI/UX"],
    },

    {
      image: Abdulrahman,
      name: "ODERINDE ABDULRAHMAN",
      role: "UI/UX DESIGNER",
      bio: "..........",
      skills: ["HTML", "CSS", "React", "UI/UX"],
    },
  ];

  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section className="bg-gray-100 py-20">
      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-5xl font-bold text-red-700">TEAM CODING</h1>

        <p className="text-red-600 mt-3 text-lg">
          Meet Our Amazing Student of POTTERS CODING TEAM
        </p>
      </div>

      {/* Team Grid */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
        {members.map((member, index) => (
          <div key={index} className="flex justify-center">
            {/* Entire Card Container */}
            <div
              className="w-[320px] cursor-pointer transition duration-300 hover:scale-105"
              onClick={() => setSelectedMember(member)}
            >
              {/* Gray Image Container */}
              <div className="bg-gray-200 h-[420px] flex items-end justify-center overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-[440px] h-[400px] object-contain"
                />
              </div>

              {/* Red Info Box */}
              <div className="bg-red-700 text-white text-center py-6 -mt-1">
                <h2 className="font-bold text-xl">{member.name}</h2>

                <p className="mt-2 text-sm">{member.role}</p>

                <p className="italic mt-2 text-sm">POTTERS Coding Team</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedMember && (
        <StudentModal
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </section>
  );
}

export default Team;
