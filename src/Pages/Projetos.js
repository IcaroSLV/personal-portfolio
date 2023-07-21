import ProjectCard from '../components/ProjectCard'

import styles from './Projetos.module.css'

import calculatorProject from '../assets/images/projectsImg/calculatorimg.png'
import costsProject from '../assets/images/projectsImg/costsimg.png'
import movieRatingProject from '../assets/images/projectsImg/movieratingimg.png'
import todoProject from '../assets/images/projectsImg/todoimg.png'
import spaceTurismProject from '../assets/images/projectsImg/spaceturismimg.png'

import projectData from '../data.json'

function Projetos() {

    const ProjectsImg = [calculatorProject, costsProject, movieRatingProject, todoProject, spaceTurismProject]

    const Project = projectData.Projects[0]

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
                    link={projectData.Projects[index].gitLink}
                />
            ))}
        </div>
    </div>
    )
}

export default Projetos