import React, { useContext } from "react";
import "./Portfolio.css";
import { motion } from "framer-motion"
import { themeContext } from "../../context";
import ProjectCard from "../ProjectCard/ProjectCard";
import decamovies from '../../img/decamovies.png';
import gridhouse from '../../img/gridhouse.png'
import powerdeals from '../../img/powerdeals.png'

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
              <a href='https://github.com/Sarmueil?tab=repositories' target="_blank"><button className="button s-button">All Projects</button></a>
              <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
          </div>
          <div className="cards">
              <motion.div
                  initial={{ left: "25rem" }}
                  whileInView={{ left: "16rem" }} 
                  transition={transition}>   
                 <ProjectCard img={decamovies} text="Decamovies"/>
              </motion.div>
              <motion.div
                  initial={{ left: "-11rem", top: "12rem" }}
                  whileInView={{ left: "-4rem" }}
                  transition={transition} style={{ top: '12rem', left: '-4rem' }}>
                   <ProjectCard img={gridhouse} text="Gridhouse"/>
              </motion.div>
              <motion.div
                  initial={{ top: "19rem", left: "25rem" }}
                  whileInView={{ left: "17rem" }}
                  transition={transition}>
                  <ProjectCard img={powerdeals} text="Powerdeals"/>
          </motion.div>
          <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
      </div>
      </div >
  )
};

export default Portfolio;