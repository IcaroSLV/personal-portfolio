import styles from './ProjectCard.module.css'

function ProjectCard({image, name, description, GITlink, SITElink}) {
    return(
        <div className={styles.cardContainer}>
            <div className={styles.cardTitle}>
                <h1>{name}</h1>
            </div>
            <div className={styles.cardImage}>
                <img src={image} alt='img'/>
                <p>{description}</p>
            </div>
            <div className={styles.cardLinkButton}>
                {SITElink !== "" ? (
                    <div className={styles.siteButton}>
                        <a href={SITElink} target="_blank" rel="noreferrer">Ver Site</a>
                        <a href={GITlink} target="_blank" rel="noreferrer">Acessar código</a>
                    </div>

                ):(
                    <a href={GITlink} target="_blank" rel="noreferrer">
                        Acessar código
                    </a>
                )}
            </div>
        </div>
    )
}

export default ProjectCard