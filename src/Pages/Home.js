import styles from './Home.module.css'
import {Link} from 'react-router-dom'

function Home() {
    return(
    <div className={styles.HomeContainer}>
        <div>
            <h3>Olá, me chamo <span>Paulo Ícaro.</span></h3>
            <h1>Frontend Developer</h1>
            <p>
                Apaixonado por programação e 
                computação, sou programador 
                WEB, busco constatemente 
                melhorar minhas habilidades na 
                área de desenvolvimento de software, 
                com paixão em Front-End, estou sempre 
                em busca de desafios para melhorar mais.
            </p>
            <button><Link to='/sobre'>Sobre mim</Link></button>
        </div>
    </div>
    )
}

export default Home