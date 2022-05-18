import React from 'react'
import './ProjectCard.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';
import ecommerce from '../../img/ecommerce.png'


const ProjectCard = () => {
    return (
        <div className='project_card'>
            <img src={ecommerce} alt="" />
            <div className='project__details__container'>
                <p>Snipe it</p>
                <div className='project__icon_container'>
                    <GitHubIcon style={{ color: 'black', fontSize: '1rem', cursor: 'pointer', marginRight:'5px'}} />
                    <WebIcon style={{color:'black', fontSize:'1rem', cursor:'pointer'}}/>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard