import React, { useContext } from "react";
import "./Intro.css";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import javascript from "../../img/javascript.png";
import code from "../../img/code.png";
import react from '../../img/react.png';
import figma from '../../img/figma.png';
import docs from '../../img/docs.png';
import { themeContext } from "../../context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";



const Intro = () => {
  const transition = { duration: 2, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }} >Hy! I Am</span>
          <span>Samuel Adebisi</span>
          <span style={{ color: darkMode ? "white" : "", fontSize:'20px' }}>
            Frontend Developer with high level of experience in web designing
            and development, producting the Quality work
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>

        <div className="i-icons">
          <a href="https://github.com/Sarmueil" target='_blank'>
            <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/adedoyin-samuel-adebisi-b8a72b191/" target='_blank'>
            <img src={LinkedIn} alt="" />
          </a>
          <a href="https://www.instagram.com/sarmuiel/" target='_blank'>
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>

      <div className="i-right">
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={react} text1="React" text2="Developer" />
        </motion.div>

        <motion.div
          initial={{ top: "50%", left: "54%" }}
          whileInView={{ left: "58%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={figma} text1="UI/UX" text2="Designer" />
        </motion.div>

        <motion.div
          initial={{ top: "15%", left: "34%" }}
          whileInView={{ left: "38%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={javascript} text1="Javascript" text2="Engineer" />
        </motion.div>

        <motion.div
          initial={{ top: "-9%", left: "14%" }}
          whileInView={{ left: "18%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={code} text1="Software" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "1.7rem" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={docs} text1="Web Content" text2="Writer" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;