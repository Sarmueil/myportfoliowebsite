import React, { useContext } from "react";
import './Work.css'
import Max from '../../img/max.webp';
import Decagon from '../../img/decagon.webp'
import Itex from '../../img/itex.webp'
import Upwork from '../../img/Upwork.png'
import Para from '../../img/para.jpeg'
import { themeContext } from "../../context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";



const Work = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="works">
            <div className="w-left">
                <div className="awesome">
                    {/* dark Mode */}
                    <span style={{ color: darkMode ? "white" : "" }}>
                        Works for All these
                    </span>
                    <span>Brands & Clients</span>
                    <span>
                        Lorem ispum is simpley dummy text of printing of printing Lorem
                        <br />
                        ispum is simpley dummy text of printingLorem ispum is simpley dummy
                        text
                        <br />
                        y dummy text of printingLorem
                        <br />
                        ispum is simpley dummy text of printing
                    </span>
                    <Link to="contact" smooth={true} spy={true}>
                    <button className="button s-button">Hire Me</button>
                    </Link>
                    <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}
                    ></div>
                </div>
            </div>
            <div className="w-right">
                <motion.div
                    initial={{ rotate: 45 }}
                    whileInView={{ rotate: 0 }}
                    viewport={{ margin: "-40px" }}
                    transition={{ duration: 3.5, type: "spring" }}
                    className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Max} alt=""  style={{borderRadius:'50px'}}/>
                    </div>
                    <div className="w-secCircle">
                        <img src={Decagon} alt="" style={{borderRadius:'50px', width:'160px'}}/>
                    </div>
                    <div className="w-secCircle">
                        <img src={Upwork} alt=""/>
                    </div>{" "}
                    <div className="w-secCircle">
                        <img  src={Itex} alt="" style={{borderRadius:'50px', width:'160px'}}/>
                    </div>
                    <div className="w-secCircle">
                        <img src={Para} alt="" style={{borderRadius:'50px', width:'160px'}}/>
                    </div>
            </motion.div>
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
        </div>
        </div >
    )
}

export default Work