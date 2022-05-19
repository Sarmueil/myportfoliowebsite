import React, { useContext } from "react";
import './ProjectCard.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';
import { themeContext } from "../../context";




const ProjectCard = ({ img, text, link, gitLink }) => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <div className='project_card'>
                    <img src={img} alt="" />
                    <div className='project__details__container'>
                        <p style={{ color: darkMode ? "white" : "black" }}>{text}</p>
                        <div className='project__icon_container'>
                            <a href={gitLink} target="_blank" rel="noopener noreferrer">
                                <GitHubIcon style={{ color: 'black', fontSize: '1rem', cursor: 'pointer', marginRight: '5px' }} />
                            </a>
                            <a href={link} target="_blank" rel="noopener noreferrer">
                            <WebIcon style={{ color: 'black', fontSize: '1rem', cursor: 'pointer' }} />
                            </a>
                        </div>
                    </div>
                </div>
            </a>
        </>
    )
}

export default ProjectCard