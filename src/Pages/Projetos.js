import ProjectCard from '../components/ProjectCard'

import styles from './Projetos.module.css'

import calculatorProject from '../assets/images/calculatorimg.png'
import costsProject from '../assets/images/costsimg.png'
import movieRatingProject from '../assets/images/movieratingimg.png'
import todoProject from '../assets/images/todoimg.png'
import spaceTurismProject from '../assets/images/spaceturismimg.png'

import projectData from '../data.json'

function Projetos() {

    const ProjectsImg = [calculatorProject, costsProject, movieRatingProject, todoProject, spaceTurismProject]


    return(
    <div className={styles.projectContainer}>
        <div className={styles.title}>
            <h1>Meus Projetos:</h1>
        </div>
        <div className={styles.projectsList}>
            {ProjectsImg.map((project, index) => (
                <ProjectCard 
                    image={project}
                    name={projectData.Projects[index].name}
                    description={projectData.Projects[index].Description}
                    GITlink={projectData.Projects[index].gitLink}
                    SITElink={projectData.Projects[index].siteLink}
                />
            ))}
        </div>
    </div>
    )
}

export default Projetos