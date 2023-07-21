import styles from './ContactsCard.module.css'

function ContactsCard({icon, socialName, acessLink}) {
    return(
        <div className={styles.Card}>
            <div className={styles.imgContainer}>
                <h1>{icon}</h1>
                <p>{socialName}</p>
            </div>
            <div className={styles.linkContainer}>
                <a href={{acessLink}}>Acessar</a>
            </div>  
        </div>
    )
}

export default ContactsCard
