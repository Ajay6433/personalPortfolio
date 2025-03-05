import React from "react";
import Image from "next/image";
import Link from "next/link";

interface NavLinksInterface {
  title: string;
  href: string;
}

const Footer = () => {
  const navLinks: NavLinksInterface[] = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Tech Stack",
      href: "#tech-stack",
    },
    {
      title: "Projects",
      href: "#projects",
    },
    {
      title: "Contact",
      href: "#contact",
    },
  ];

  return (
    <div className="block md:px-7 p-2">
      <div className=" md:flex md:justify-between items-center h-36 lg:h-24 text-[16px] text-[#42446E]">
        <Link href="/" className="flex items-center">
          <Image
            src={"/images/ajayKhan.png"}
            alt="Logo"
            width={110}
            height={80}
            className="w-24 md:w-28 lg:w-32"
          />
        </Link>
        <div className=" md:flex justify-between items-center">
          <div className="md:flex justify-between items-center px-4 gap-6">
            <span className="block">
              <a href="tel:+91 9717965986" className=" hover:underline">
                +91 9717965986
              </a>
            </span>
            <span className="block">
              <a
                href="mailto:Ajaykhan6433@gmail.com"
                className="hover:underline"
              >
                Ajaykhan6433@gmail.com
              </a>
            </span>
          </div>
          <div className="flex items-center p-4 gap-3">
            <span >
            <a
                href="https://github.com/Ajay6433"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                <Image
                  src={"/images/github.svg"}
                  alt="Nextjs Logo"
                  width={20}
                  height={20}
                  className="w-[24px] md:w-[24px] lg:w-[28px]"
                />
              </a>
            </span>
            <span>
            <a
                href=" https://www.linkedin.com/in/ajay6433/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                <Image
                  src={"/images/linkedin.svg"}
                  alt="Nextjs Logo"
                  width={20}
                  height={20}
                  className="w-[24px] md:w-[24px] lg:w-[28px]"
                />
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="h-[1px] bg-gray-800 w-full m-auto rounded-lg"></div>

      <div className="flex justify-between">
        {/* Desktop Navigation (lg+) */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-12 p-4">
          {navLinks.map(({ title, href }) => (
            <Link
              href={href}
              key={title}
              className="text-base font-medium text-[#4A5568] hover:-translate-y-1 transition-all duration-200 hover:text-purple-600"
            >
              {title}
            </Link>
          ))}
        </div>

        {/* Tablet Navigation (md-lg) */}
        <div className="hidden md:flex lg:hidden items-center gap-4 p-4">
          {navLinks.slice(0, 4).map(({ title, href }) => (
            <Link
              href={href}
              key={title}
              className="text-sm font-medium text-[#4A5568] hover:-translate-y-1 transition-all duration-200 hover:text-purple-600"
            >
              {title}
            </Link>
          ))}
        </div>
        <div>
          <p className="p-3">
            <span className="flex justify-center items-center gap-2 mb-2">
              Coded with{" "}
              <a
                href="https://nextjs.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                <Image
                  src={"/images/nextjs.png"}
                  alt="Nextjs Logo"
                  width={20}
                  height={20}
                  className="w-[24px] md:w-[24px] lg:w-[28px]"
                />
              </a>{" "}
              and{" "}
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                <Image
                  src={"/images/tailwindcss.png"}
                  alt="Nextjs Logo"
                  width={20}
                  height={20}
                  className="w-[24px] md:w-[24px] lg:w-[28px]"
                />
              </a>
            </span>
            <span className="block md:flex"> ❤️ by Ajay Khan © 2025</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
