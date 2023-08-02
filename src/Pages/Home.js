import styles from './Home.module.css'
import {Link} from 'react-router-dom'

import Curriculo from '../assets/Curriculo.pdf'

import Contacts from '../components/Contacts'

function Home() {

    return(
    <div className={styles.HomeContainer}>
        <div>
            <h3>Olá, me chamo Paulo Ícaro!</h3>
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
            <div className={styles.ButtonContainer}>
                <button><Link to='/sobre'>Sobre mim</Link></button>
                <button>
                    <a href={Curriculo} download={'Curriculo.pdf'} type='application/pdf'>Baixar Curriculo</a>
                </button>
                <button><Link to='/projetos'>Meus Projetos</Link></button>
            </div>
            <div className={styles.Contacts}>
                <Contacts/>
            </div>
            
        </div>
    </div>
    )
}

export default Home