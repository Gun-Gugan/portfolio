import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  { id: 1, icon: <FaGithub />, link: "#" },
  { id: 2, icon: <FaLinkedin />, link: "#" },
  { id: 3, icon: <FaEnvelope />, link: "#" }
];

const SocialLinks = () => {
  return (
    <div className="flex justify-center gap-6 mt-4 text-2xl">
      {socialLinks.map((social) => (
        <a key={social.id} href={social.link} className="text-blue-400 hover:text-blue-500">
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
