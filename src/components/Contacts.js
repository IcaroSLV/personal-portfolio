import styles from './Contacts.module.css'

import { BsInstagram, BsLinkedin, BsGithub} from 'react-icons/bs'

function Contacts() {
    return(
        <div className={styles.ContactContainer}>
            <div>
                <a href='https://github.com/IcaroSLV/' target='_blank' rel="noreferrer"><BsGithub/></a>
                <a href='https://www.linkedin.com/in/paulo-ícaro-silva-lúcio-90013b254/' target='_blank' rel="noreferrer"><BsLinkedin/></a>
                <a href='https://www.instagram.com/_icaroslv/' target='_blank' rel="noreferrer"><BsInstagram/></a>
            </div>
        </div>
    )
}
export default Contacts