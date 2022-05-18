import React, { useContext } from "react";
import './Services.css'
import Card from '../Card/Card';
import Code from '../../img/codeB.png';
import ReactIcon from '../../img/react.png'
import Figma from '../../img/figma.png'
import Resume from './resume.pdf';   
import { themeContext } from "../../context";
import { motion } from "framer-motion"

const Services = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const transition = {
        duration: 1,
        type: "spring",
    };

    return (
        <div className='services' id="services">
            <div className="awesome">
                <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
                <span>Services</span>
                <span>Hello, I am Samuel Adedoyin Adebisi. I am a Software Engineer and UI/UX Designer.
                    <br />
                    Most of my time, i design and build responsive, production ready user interfaces <br /> and amazing websites
                </span>
                <a href={Resume} download><button className="button s-button">Download CV</button></a>
                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>
            <div className="cards">
                <motion.div
                    initial={{ left: "25rem" }}
                    whileInView={{ left: "14rem" }} 
                    transition={transition}>
                    <Card emoji={Figma} heading={"UI/UX Design"} detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"} />
                </motion.div>
                <motion.div
                    initial={{ left: "-11rem", top: "12rem" }}
                    whileInView={{ left: "-4rem" }}
                    transition={transition} style={{ top: '12rem', left: '-4rem' }}>
                    <Card emoji={ReactIcon} heading={"Front End Development"} detail={"Html, Css, Saas, Tailwind Css, ChakraUI, Material UI JavaScript, React, Next.js Redux, Context API "} />
                </motion.div>
                <motion.div
                    initial={{ top: "19rem", left: "25rem" }}
                    whileInView={{ left: "12rem" }}
                    transition={transition}>
                    <Card emoji={Code} heading={"Software Engineering"} detail={"Javascript, Es6, Node.js, Express, InversifyJs, MongoDB, Postgress, GraphQL"} color="rgba(252, 166, 31, 0.45)" />
            </motion.div>
            <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
        </div>
        </div >
    )
}

export default Services