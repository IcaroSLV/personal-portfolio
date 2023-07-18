import styles from './Contatos.module.css'

import {GrInstagram, GrLinkedinOption, GrGithub} from 'react-icons/gr'

import ContactsCard from '../components/ContactsCard'

function Contatos() {
    return(
        <div className={styles.ContactsPage}>
            <ContactsCard 
                icon={<GrInstagram/>}
                socialName={'Instagram'}
                acessLink={"https://www.instagram.com/_icaroslv/"}
            />

            <ContactsCard 
                icon={<GrLinkedinOption/>}
                socialName={'Linkedin'}
                acessLink={"https://www.linkedin.com/in/paulo-ícaro-silva-lúcio-90013b254/"}
            />

            <ContactsCard 
                icon={<GrGithub/>}
                socialName={'GitHub'}
                acessLink={"https://github.com/IcaroSLV"}
            />
        </div>
    )
}

export default Contatos