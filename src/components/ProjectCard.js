import styles from './ProjectCard.module.css'

function ProjectCard({image, name, description, link}) {
    return(
        <div className={styles.cardContainer}>
            <div className={styles.cardTitle}>
                <h1>{name}</h1>
            </div>
            <div className={styles.cardImage}>
                <img src={image}/>
                <p>{description}</p>
            </div>
            <div className={styles.cardLinkButton}>
                <a href={link}>Acessar código</a>
            </div>
        </div>
    )
}

export default ProjectCard