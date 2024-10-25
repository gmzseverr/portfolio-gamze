import React from "react";

function AboutMe() {
  return (
    <div className="bg-ligtBeige md:px-32 py-32 px-10 md:py-22 flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-start px-10 ">
        <div className="">
          <h2 className="font-anton px-5 text-2xl">HI I'M GAMZE</h2>
          <div className="font-cutiveMono">
            <p className="p-5">
              I've been exploring the world of software development for less
              than a year. While I'm still relatively new, I'm passionate and
              eager to learn. My journey into coding started after pursuing
              education in various other fields, but I found my true excitement
              in software.
            </p>
            <p className="px-5 pb-5">
              I'm especially drawn to frontend development because it combines
              my love for design with the creativity of building interactive
              user experiences. Design has always been a personal interest, so
              working on the frontend really excites me—it feels like the
              perfect way to blend logic and aesthetics.
            </p>
            <p className="px-5 ">
              I'm constantly pushing myself to improve and grow, and I'm ready
              to tackle new challenges in the tech world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
