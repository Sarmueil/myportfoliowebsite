import React from 'react'
import './ProjectCard.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';



const ProjectCard = ({img, text}) => {
    return (
        <div className='project_card'>
            <img src={img} alt="" />
            <div className='project__details__container'>
                <p>{text}</p>
                <div className='project__icon_container'>
                    <GitHubIcon style={{ color: 'black', fontSize: '1rem', cursor: 'pointer', marginRight:'5px'}} />
                    <WebIcon style={{color:'black', fontSize:'1rem', cursor:'pointer'}}/>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard