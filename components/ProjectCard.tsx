import React from "react";
import Image from "next/image";
import { BackgroundGradient } from "./ui/background-gradient";
import Link from "next/link";
import projectsData from "../projects.json"; // Import JSON data

const ProjectCard = () => {
  const textColors = [
    "text-red-500",
    "text-blue-500",
    "text-green-500",
    "text-yellow-500",
    "text-purple-500",
    "text-pink-500",
    "text-gray-500",
    "text-indigo-500",
  ];

  // Function to pick a random text color
  const getRandomColor = () =>
    textColors[Math.floor(Math.random() * textColors.length)];
  return (
    <div
      id="projects"
      className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center"
    >
      {projectsData.map((project) => (
        <BackgroundGradient
          key={project.id}
          className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white h-full dark:bg-zinc-900"
        >
          <Image
            src={project.image}
            alt="jordans"
            height="400"
            width="400"
            className="object-contain"
          />
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            {project.title}
          </p>

          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {project.description}
          </p>
          {/* Rendering hastags */}
          <div className="flex flex-wrap gap-2 mt-3">
            {project.hashtags.map((tag, index) => (
              <span
                key={index}
                className={`px-3 py-1 rounded-full text-xs dark:bg-zinc-700 ${getRandomColor()}`}
              >
                {tag}
              </span>
            ))}
            {/* Buttons for Preview & GitHub */}
            <div className="flex justify-around mt-4 w-full">
              <Link href={project.previewLink} target="_blank">
                <button className="px-3 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-md hover:shadow-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-1">
                  🚀 Live Preview
                </button>
              </Link>
              <Link href={project.githubLink} target="_blank">
                <button className="px-3 py-2 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 text-white font-semibold shadow-md hover:shadow-lg hover:from-gray-700 hover:to-black transition-all duration-300 transform hover:-translate-y-1">
                  💻 GitHub
                </button>
              </Link>
            </div>
          </div>
        </BackgroundGradient>
      ))}
    </div>
  );
};

export default ProjectCard;
