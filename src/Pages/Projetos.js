import ProjectCard from '../components/ProjectCard'
import styles from './Projetos.module.css'

import { useState, useEffect } from 'react'

function Projetos() {

    const [projectData, setProjetData] = useState([])

    useEffect(() => {
        fetch(`https://api.github.com/users/IcaroSLV/repos`)
        .then(resp => resp.json())
        .then(data => setProjetData(data))
        .catch(err => console.log(err))
    })


    return(
    <div className={styles.projectContainer}>
        <div className={styles.title}>
            <h1>Meus Projetos:</h1>
        </div>
        <div className={styles.projectsList}>
        {projectData && 
                projectData.map((project) => (
                    <ProjectCard projectData={project}/>
                ))        
        }
        </div>
    </div>
    )
}

export default Projetos