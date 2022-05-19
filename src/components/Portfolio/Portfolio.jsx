import React, { useContext } from "react";
import "./Portfolio.css";
import { motion } from "framer-motion"
import { themeContext } from "../../context";
import ProjectCard from "../ProjectCard/ProjectCard";
import decamovies from '../../img/decamovies.png';
import snipe from '../../img/snipe.png';
import powerdeals from '../../img/powerdeals.png';

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const transition = {
      duration: 1,
      type: "spring",
  };

  return (
      <div className='services' id="portfolio">
          <div className="awesome">
              <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
              <span>Portfolio</span>
              <span>Here are some of my most recent projects.Most of which were built with
                  <br />
                  React.js , Node.js, Express, Typescript, MongoDB and CSS frameworks <br /> such as styled components and Material UI
              </span>
              <a href='https://github.com/Sarmueil?tab=repositories' target="_blank" rel="noopener noreferrer"><button className="button s-button">All Projects</button></a>
              <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
          </div>
          <div className="cards">
              <motion.div
                  initial={{ left: "25rem" }}
                  whileInView={{ left: "16rem" }} 
                  transition={transition}>   
                 <ProjectCard img={decamovies} text="Decamovies" link="https://decamoviesnet.netlify.app/" gitLink= "https://github.com/Sarmueil/DecaMovieWebApp"/>
              </motion.div>
              <motion.div
                  initial={{ left: "-11rem", top: "12rem" }}
                  whileInView={{ left: "-4rem" }}
                  transition={transition} style={{ top: '12rem', left: '-4rem' }}>
                   <ProjectCard img={snipe} text="Snipe it" link="https://projectsnipe.herokuapp.com" gitLink= "https://github.com/Sarmueil/project-snipe-it"/>
              </motion.div>
              <motion.div
                  initial={{ top: "19rem", left: "25rem" }}
                  whileInView={{ left: "17rem" }}
                  transition={transition}>
                  <ProjectCard img={powerdeals} text="Powerdeals" link="https://powerdeals.ng" gitLink= "https://github.com/Sarmueil?tab=repositories"/>
          </motion.div>
          <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
      </div>
      </div >
  )
};

export default Portfolio;