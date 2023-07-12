import styles from './NavBar.module.css'

import {Link} from 'react-router-dom'

function NavBar() {
    return(
    <nav className={styles.NavBar}>
        <div>
            <Link to='/'><h1>Icaro.</h1></Link>
        </div>
        <div className={styles.buttonList}>
            <Link to='/sobre'>Sobre</Link>
            <Link to='/educacao'>Educação</Link>
            <Link to='/projetos'>Projetos</Link>
            <Link to='/contatos'>Contatos</Link>
        </div>
    </nav>
    )
}

export default NavBar