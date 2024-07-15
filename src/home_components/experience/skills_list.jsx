import "./skills_list.css";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaGithub,
  FaAws,
} from "react-icons/fa";
import { RiFlutterFill } from "react-icons/ri";
import { TbBrandVite } from "react-icons/tb";
import { PiFileJsxDuotone } from "react-icons/pi";
import { SiExpress, SiMysql, SiPostman } from "react-icons/si";
import { FaGitAlt, FaGitlab } from "react-icons/fa6";
import {
  BiLogoTypescript,
  BiLogoNodejs,
  BiLogoPostgresql,
  BiLogoMongodb,
} from "react-icons/bi";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";

const skills = [
  { name: "React", icon: <FaReact style={{ color: "#61dafb" }} /> },
  { name: "CSS ", icon: <FaCss3 style={{ color: "#264de4" }} /> },
  {
    name: "JavaScript",
    icon: <IoLogoJavascript style={{ color: "#f0db4f" }} />,
  },
  { name: "Bootstrap", icon: <FaBootstrap style={{ color: "#7952b3" }} /> },
  {
    name: "TypeScript",
    icon: <BiLogoTypescript style={{ color: "#3178c6" }} />,
  },
  { name: "HTML 5", icon: <FaHtml5 style={{ color: "#e44d26" }} /> },
  { name: "Flutter", icon: <RiFlutterFill style={{ color: "#02569b" }} /> },

  { name: "NodeJS", icon: <BiLogoNodejs style={{ color: "#3c873a" }} /> },
  { name: "Express JS", icon: <SiExpress style={{ color: "#3c873a" }} /> },
  { name: "MySQL", icon: <SiMysql style={{ color: " " }} /> },
  {
    name: "PostgreSQL",
    icon: <BiLogoPostgresql style={{ color: "lightblue" }} />,
  },
  {
    name: "MongoDB",
    icon: <BiLogoMongodb style={{ color: "#47a244" }} />,
  },
  {
    name: "Git",
    icon: <FaGitAlt style={{ color: "#F05032" }} />,
  },
  {
    name: "GitHub",
    icon: <FaGithub style={{ color: "#333" }} />,
  },
  {
    name: "GitLab",
    icon: <FaGitlab style={{ color: "#E15A46" }} />,
  },
  {
    name: "AWS",
    icon: <FaAws style={{ color: "#F0DB4F" }} />,
  },
  {
    name: "Firebase",
    icon: <IoLogoFirebase style={{ color: "#ffca28" }} />,
  },

  { name: "JSX", icon: <PiFileJsxDuotone style={{ color: "#f0db4f" }} /> },
  { name: "Vite", icon: <TbBrandVite style={{ color: "#646cff" }} /> },
  { name: "Postman", icon: <SiPostman style={{ color: "#FF5722" }} /> },
];

export default function SkillsList() {
  return (
    <div className="skills-container">
      {skills.map((skill, index) => (
        <div key={index} className="skill-item">
          {skill.icon}
          <span>{skill.name}</span>
        </div>
      ))}
    </div>
  );
}
