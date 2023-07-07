import styles from './Footer.module.css'
import {AiOutlineInstagram, AiOutlineLinkedin} from 'react-icons/ai'

function Footer() {
    return(
    <footer className={styles.footer}>
        <div>
            <a href='https://www.instagram.com/_icaroslv/' target="_blank"><AiOutlineInstagram/></a>
            <a href='https://www.linkedin.com/in/paulo-ícaro-silva-lúcio-90013b254/' target="_blank"><AiOutlineLinkedin/></a>
        </div>
    </footer>
    )
}

export default Footer