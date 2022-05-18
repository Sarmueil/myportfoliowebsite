import React, { useContext } from "react";
import "./Portfolio.css";
import { motion } from "framer-motion"
import { themeContext } from "../../context";
import ProjectCard from "../ProjectCard/ProjectCard";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const transition = {
      duration: 1,
      type: "spring",
  };

  return (
      <div className='services' id="services">
          <div className="awesome">
              <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
              <span>Portfolio</span>
              <span>Hello, I am Samuel Adedoyin Adebisi. I am a Software Engineer and UI/UX Designer.
                  <br />
                  Most of my time, i design and build responsive, production ready user interfaces <br /> and amazing websites
              </span>
              <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
          </div>
          <div className="cards">
              <motion.div
                  initial={{ left: "25rem" }}
                  whileInView={{ left: "14rem" }} 
                  transition={transition}>   
                 <ProjectCard />
              </motion.div>
              <motion.div
                  initial={{ left: "-11rem", top: "12rem" }}
                  whileInView={{ left: "-4rem" }}
                  transition={transition} style={{ top: '12rem', left: '-4rem' }}>
                   <ProjectCard />
              </motion.div>
              <motion.div
                  initial={{ top: "19rem", left: "25rem" }}
                  whileInView={{ left: "15rem" }}
                  transition={transition}>
                  <ProjectCard />
          </motion.div>
          <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
      </div>
      </div >
  )
};

export default Portfolio;